// Index cards can load and fit their titles before the app hydrates.
(() => {
  let grid;
  let dispose = () => {};

  function observeGrid() {
    const nextGrid = document.querySelector("[data-testid='font-grid']");
    if (nextGrid === grid) return;
    dispose();
    grid = nextGrid;
    if (!grid) return;

    const currentGrid = grid;
    const loadByLink = new Map();
    const fitByElement = new Map();
    const resize = new ResizeObserver((entries) => {
      const fits = new Set(entries.map(({ target }) => fitByElement.get(target)));
      for (const fit of fits) fit?.();
    });
    const nearby = new IntersectionObserver((entries) => {
      for (const { target, isIntersecting } of entries) {
        if (isIntersecting) loadByLink.get(target)?.();
      }
    }, { rootMargin: "1200px" });

    for (const stage of currentGrid.querySelectorAll("[data-preview-stage]")) {
      const link = stage.closest("a");
      const title = stage.querySelector("[data-font-preview]");
      const creator = stage.querySelector("p");
      const family = stage.style.getPropertyValue("--preview-family");

      function fit() {
        const titleWidth = title.offsetWidth;
        const titleHeight = title.offsetHeight;
        if (!titleWidth || !titleHeight) return;
        const style = getComputedStyle(stage);
        const widthRatio = Number.parseFloat(style.getPropertyValue("--sample-fit-width"));
        const heightRatio = Number.parseFloat(style.getPropertyValue("--sample-fit-height")) || 0.65;
        const scale = Math.min(
          stage.clientWidth * widthRatio / titleWidth,
          Math.max(1, stage.clientHeight * heightRatio - creator.offsetHeight) / titleHeight
        );
        if (!Number.isFinite(scale) || scale <= 0) return;
        stage.style.setProperty("--specimen-scale", String(scale));
        stage.style.setProperty("--specimen-title-opacity", "1");
      }

      function load() {
        nearby.unobserve(link);
        loadByLink.delete(link);
        void document.fonts.load(`400 160px ${family}`, title.textContent).catch(() => []).then(() => {
          if (!currentGrid.isConnected || grid !== currentGrid) return;
          stage.style.setProperty("--specimen-font", family);
          fitByElement.set(stage, fit);
          fitByElement.set(creator, fit);
          resize.observe(stage);
          resize.observe(creator);
          fit();
        });
      }

      loadByLink.set(link, load);
      if (stage.dataset.previewStage === "eager" || link === document.activeElement) load();
      else nearby.observe(link);
    }

    function loadFocused(event) {
      loadByLink.get(event.target)?.();
    }
    currentGrid.addEventListener("focusin", loadFocused);
    dispose = () => {
      currentGrid.removeEventListener("focusin", loadFocused);
      nearby.disconnect();
      resize.disconnect();
    };
  }

  observeGrid();
  // Client-side navigation can replace the index without reloading this script.
  new MutationObserver(observeGrid).observe(document.body, { childList: true, subtree: true });
})();

const pixelRatio = window.devicePixelRatio || 1
let exp = window.location.href.split(/^(([^:\/?#]+):)?(\/\/([^\/?#]*))?([^?#]*)(\?([^#]*))?(#(.*))?/);
let fontName = exp[5].split('/')[1]

function removeClass(classToRemove) {
  nodes = document.getElementsByClassName(classToRemove)
  if (!nodes[0]) return

  nodes[0].classList.remove(classToRemove)
  if (nodes[0]) removeClass(classToRemove)
}

function formatCSSCode(unicode) {
  unicode = unicode.toString(16)
  return 'content: \'&#92;' + ("0000" + unicode.toUpperCase()).substr(-4) + '\';'
}

function formatHTMLCode(unicode) {
  return '&amp;#' + unicode + ';'
}

function enableHighDPICanvas(canvas) {
  if (pixelRatio === 1) return

  const oldWidth = canvas.width
  const oldHeight = canvas.height
  canvas.width = oldWidth * pixelRatio
  canvas.height = oldHeight * pixelRatio
  canvas.style.width = oldWidth + 'px'
  canvas.style.height = oldHeight + 'px'
  canvas.getContext('2d').scale(pixelRatio, pixelRatio)
}

function highlightSelectedGlyph(glyphIndex) {
  removeClass('active')
  document.getElementById('g' + glyphIndex).parentNode.classList.add('active')
}

function displaySelectedGlyphInfo(glyph) {
  document.getElementById('glyph-info').innerHTML = `
    <h3>Glyph</h3>
    <p class='${fontName}'>&#${glyph.unicode};</p>

    <h3>Glyph Name</h3>
    <p>${glyph.name}</p>

    <h3>HTML Code</h3>
    <p>${glyph.unicodes.map(formatHTMLCode).join(', ') || 'Not available' }</p>

    <h3>CSS Code</h3>
    <p>${glyph.unicodes.map(formatCSSCode).join(', ') || 'Not available' }</p>
  `
}

function displaySelectedGlyph(font, glyph) {
  displaySelectedGlyphInfo(glyph)
  highlightSelectedGlyph(glyph.index)
  history.replaceState({}, document.title, '?i=' + glyph.index)

  const canvas = document.getElementById('glyph-detail-canvas')
  canvas.width = canvas.parentNode.offsetWidth
  canvas.height = canvas.width * 0.8
  enableHighDPICanvas(canvas)
  const ctx = canvas.getContext('2d')
  const { xmin, fontBaseline, fontSize } = getGlyphPosition(font, canvas, glyph)

  // Draw baseline
  ctx.fillStyle = '#F9C4C4'
  ctx.fillRect(32, fontBaseline, (canvas.width / pixelRatio) - 64, 1)

  glyph.draw(ctx, xmin, fontBaseline, fontSize)
}

function getGlyphPosition(font, canvas, glyph) {
  const w = canvas.width / pixelRatio
  const h = canvas.height / pixelRatio
  const maxHeight = font.tables.head.yMax - font.tables.head.yMin
  const maxWidth = font.tables.head.xMax - font.tables.head.xMin

  const fontScale = Math.min(w / maxWidth, h / maxHeight)
  const fontSize = fontScale * font.unitsPerEm
  const fontBaseline = h * font.tables.head.yMax / maxHeight;
  const glyphWidth = glyph.advanceWidth * fontScale
  const xmin = (w - glyphWidth) / 2

  return { xmin, fontBaseline, fontSize }
}

function writeGlyph(font, glyphCanvas, glyphIndex) {
  if (glyphIndex >= font.numGlyphs) return;

  glyphCanvas.id = 'g' + glyphIndex

  const glyph = font.glyphs.get(glyphIndex)
  const { xmin, fontBaseline, fontSize } = getGlyphPosition(font, glyphCanvas, glyph)

  const ctx = glyphCanvas.getContext('2d')
  glyph.draw(ctx, xmin, fontBaseline, fontSize)
}

function highlightPagination(pageNum) {
  removeClass('selected-page')
  document.getElementById('p' + pageNum).className = 'selected-page'
}

function clearGlyphCanvases() {
  removeClass('active')
  const glyphCanvases = document.getElementsByClassName('glyph')

  for (let i = 0; i < glyphCanvases.length; i++) {
    glyphCanvases[i].getContext('2d').clearRect(0, 0, glyphCanvases[i].width, glyphCanvases[i].height);
  }
}

function displaySelectedGlyphPage(font, glyphsPerPage, pageNum) {
  clearGlyphCanvases()
  highlightPagination(pageNum)

  const firstGlyphIndex = pageNum * glyphsPerPage
  const glyphCanvases = document.getElementsByClassName('glyph')

  for (let i = 0; i < glyphsPerPage; i++) {
    writeGlyph(font, glyphCanvases[i], firstGlyphIndex + i)
  }
}

function getNumCols() {
  if (window.innerWidth > 940)
    return 16
  else if (window.innerWidth <= 940 && window.innerWidth > 700)
    return 10
  else if (window.innerWidth <= 700)
    return 6
}

function createGlyphCanvasContainer(font) {
  const glyphCanvasContainer = document.createElement('div')
  glyphCanvasContainer.classList.add('glyph-container')

  glyphCanvasContainer.addEventListener('click', (e) => {
    displaySelectedGlyph(font, font.glyphs.get(e.target.id.substr(1)))
  }, false)

  document.getElementById('glyph-grid').appendChild(glyphCanvasContainer)

  return glyphCanvasContainer
}

function createGlyphCanvas(font) {
  const glyphCanvasContainer = createGlyphCanvasContainer(font)
  const canvasWidth = document.getElementById('glyph-grid').offsetWidth / getNumCols() - 1

  const glyphCanvas = document.createElement('canvas')
  glyphCanvas.width = canvasWidth
  glyphCanvas.height = canvasWidth * 1.2
  glyphCanvas.className = 'glyph'

  enableHighDPICanvas(glyphCanvas)
  glyphCanvasContainer.appendChild(glyphCanvas)
}

function displayGlyphGrid(font, glyphsPerPage) {
  for (let i = 0; i < glyphsPerPage; i++) {
    createGlyphCanvas(font)
  }
}

function displayPagination(font, glyphsPerPage) {
  const numPages = Math.ceil(font.numGlyphs / glyphsPerPage)
  const paginationContainer = document.getElementById('glyph-pagination')

  for (let i = 0; i < numPages; i++) {
    const pageLink = document.createElement('a');
    pageLink.href = '#'
    pageLink.textContent = i + 1
    pageLink.id = 'p' + i

    pageLink.addEventListener('click', (e) => {
      e.preventDefault()
      displaySelectedGlyphPage(font, glyphsPerPage, e.target.id.substr(1))
    }, false)

    paginationContainer.appendChild(pageLink)
  }
}

function getInitialGlyph(font) {
  let glyphIndex = new URL(window.location.href).searchParams.get('i')

  if (!glyphIndex)
    glyphIndex = 5

  if (glyphIndex >= font.numGlyphs)
    glyphIndex = font.numGlyphs - 1

  if (glyphIndex < 0)
    glyphIndex = 0

  return font.glyphs.get(glyphIndex)
}

function getGlyphsPerPage() {
  if (window.innerWidth > 940)
    return 128
  else if (window.innerWidth <= 940 && window.innerWidth > 700)
    return 130
  else if (window.innerWidth <= 700)
    return 54
}

function glyphInspector(fontFile) {
  opentype.load(fontFile, function(err, font) {
    if (err) {
      console.log('Font could not be loaded: ' + err)
    }
    else {
      const glyphsPerPage = getGlyphsPerPage()
      const initialGlyph = getInitialGlyph(font)
      const initialGlyphPage = Math.floor(initialGlyph.index / glyphsPerPage)

      displayPagination(font, glyphsPerPage)
      displayGlyphGrid(font, glyphsPerPage)
      displaySelectedGlyphPage(font, glyphsPerPage, initialGlyphPage)
      displaySelectedGlyph(font, initialGlyph)
    }
  })
}

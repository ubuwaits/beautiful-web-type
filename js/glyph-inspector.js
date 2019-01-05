const pixelRatio = window.devicePixelRatio || 1

function removeClass(classToRemove) {
  nodes = document.getElementsByClassName(classToRemove)
  if (!nodes[0]) return

  nodes[0].classList.remove(classToRemove)
  if (nodes[0]) removeClass(classToRemove)
}

function formatCSSCode(unicode) {
  unicode = unicode.toString(16)

  if (unicode.length > 4) {
    return '&#92;' + ("000000" + unicode.toUpperCase()).substr(-6)
  }
  else {
    return 'content: \'&#92;' + ("0000" + unicode.toUpperCase()).substr(-4) + '\';'
  }
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
  const glyphInfoContainer = document.getElementById('glyph-info')

  if (glyph.unicodes.length == 0) {
    glyphInfoContainer.innerHTML = `
      <h3>Glyph Name</h3>
      <p>${glyph.name}</p>

      <h3>HTML Code</h3>
      <p>Undefined</p>

      <h3>CSS Code</h3>
      <p>Undefined</p>
    `
  }
  else {
    glyphInfoContainer.innerHTML = `
      <h3>Glyph Name</h3>
      <p>${glyph.name}</p>

      <h3>HTML Code</h3>
      <p>${glyph.unicodes.map(formatHTMLCode).join(', ')}</p>

      <h3>CSS Code</h3>
      <p>${glyph.unicodes.map(formatCSSCode).join(', ')}</p>
    `
  }
}

function displaySelectedGlyph(font, glyph) {
  const canvas = document.getElementById('glyph-detail-canvas')
  canvas.width = canvas.parentNode.offsetWidth
  canvas.height = canvas.width * 0.8
  enableHighDPICanvas(canvas)
  const ctx = canvas.getContext('2d')
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  glyphPosition = getGlyphPosition(canvas, glyph, font)

  // Draw baseline
  ctx.fillStyle = '#F9C4C4'
  ctx.fillRect(32, glyphPosition.fontBaseline, (canvas.width / pixelRatio) - 64, 1)

  glyph.draw(ctx, glyphPosition.xmin, glyphPosition.fontBaseline, glyphPosition.fontSize)

  displaySelectedGlyphInfo(glyph)
  highlightSelectedGlyph(glyph.index)
  history.replaceState({}, document.title, '?i=' + glyph.index)
}

function getGlyphPosition(canvas, glyph, font) {
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

function getNumCols() {
  if (window.innerWidth > 940) {
    return 16
  }
  else if (window.innerWidth <= 940 && window.innerWidth > 700) {
    return 10
  }
  else if (window.innerWidth <= 700) {
    return 6
  }
}

function createGlyphCanvasContainer(font, glyphIndex) {
  const glyphCanvasContainer = document.createElement('div')
  glyphCanvasContainer.classList.add('glyph-container')

  glyphCanvasContainer.addEventListener('click', () => {
    displaySelectedGlyph(font, font.glyphs.get(glyphIndex))
  }, false)

  document.getElementById('glyph-grid').appendChild(glyphCanvasContainer)

  return glyphCanvasContainer
}

function createGlyphCanvas(font, glyphIndex) {
  const glyphCanvasContainer = createGlyphCanvasContainer(font, glyphIndex)
  const numCols = getNumCols()
  const canvasWidth = document.getElementById('glyph-grid').offsetWidth / numCols - 1

  const glyphCanvas = document.createElement('canvas')
  glyphCanvas.width = canvasWidth
  glyphCanvas.height = canvasWidth * 1.2
  glyphCanvas.className = 'glyph'
  glyphCanvas.id = 'g'+ glyphIndex

  enableHighDPICanvas(glyphCanvas)
  glyphCanvasContainer.appendChild(glyphCanvas)

  return glyphCanvas
}

function writeGlyph(font, glyphIndex) {
  const glyphCanvas = createGlyphCanvas(font, glyphIndex)
  if (glyphIndex >= font.numGlyphs) return;

  const ctx = glyphCanvas.getContext('2d')
  const glyph = font.glyphs.get(glyphIndex)
  const glyphPosition = getGlyphPosition(glyphCanvas, glyph, font)
  glyph.draw(ctx, glyphPosition.xmin, glyphPosition.fontBaseline, glyphPosition.fontSize)
}

function highlightPagination(pageNum) {
  removeClass('selected-page')
  document.getElementById('p' + pageNum).className = 'selected-page'
}

function removeGlyphs() {
  const glyphGrid = document.getElementById('glyph-grid')

  while (glyphGrid.firstChild) {
    glyphGrid.removeChild(glyphGrid.firstChild)
  }
}

function displaySelectedGlyphPage(font, glyphsPerPage, pageNum) {
  removeGlyphs()
  highlightPagination(pageNum)

  const firstGlyphIndex = pageNum * glyphsPerPage

  for (let i = 0; i < glyphsPerPage; i++) {
    writeGlyph(font, firstGlyphIndex + i)
  }
}

function displayPagination(font, glyphsPerPage) {
  const numPages = Math.ceil(font.numGlyphs / glyphsPerPage)
  var pagination = document.createDocumentFragment()

  for (var i = 0; i < numPages; i++) {
    let pageLink = document.createElement('a');
    pageLink.href = '#'
    pageLink.textContent = i + 1
    pageLink.id = 'p' + i

    pageLink.addEventListener('click', (e) => {
      e.preventDefault()
      displaySelectedGlyphPage(font, glyphsPerPage, e.target.id.substr(1))
    }, false)
    pagination.appendChild(pageLink)
  }

  document.getElementById('glyph-pagination').appendChild(pagination)
}

function getInitialGlyphIndex(font) {
  const parsedUrl = new URL(window.location.href)
  let glyphIndex = parsedUrl.searchParams.get('i')

  if (!glyphIndex) { glyphIndex = 5 }
  if (glyphIndex >= font.numGlyphs) { glyphIndex = font.numGlyphs - 1 }
  if (glyphIndex < 0 ) { glyphIndex = 0 }

  return glyphIndex
}

function getGlyphsPerPage() {
  if (window.innerWidth > 940) {
    return 128
  }
  else if (window.innerWidth <= 940 && window.innerWidth > 700) {
    return 130
  }
  else if (window.innerWidth <= 700) {
    return 54
  }
}

function glyphInspector(fontFile) {
  opentype.load(fontFile, function(err, font) {
    if (err) {
      console.log('Font could not be loaded: ' + err)
    }
    else {
      const glyphsPerPage = getGlyphsPerPage()
      const initialGlyphIndex = getInitialGlyphIndex(font)
      const initialGlyphPage = Math.floor(initialGlyphIndex / glyphsPerPage)

      displayPagination(font, glyphsPerPage)
      displaySelectedGlyphPage(font, glyphsPerPage, initialGlyphPage)
      displaySelectedGlyph(font, font.glyphs.get(initialGlyphIndex))
    }
  })
}

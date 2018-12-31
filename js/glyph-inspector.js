const pixelRatio = window.devicePixelRatio || 1

function removeClass(classToRemove) {
  nodes = document.getElementsByClassName(classToRemove)
  if (!nodes[0]) return

  nodes[0].classList.remove(classToRemove)
  if (nodes[0]) removeClass(classToRemove)
}

function formatCSSCode(unicode) {
  unicode = unicode.toString(16);

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
  if (typeof canvas === 'string') {
    canvas = document.getElementById(canvas)
  }
  if (pixelRatio === 1) return

  const oldWidth = canvas.width
  const oldHeight = canvas.height
  canvas.width = oldWidth * pixelRatio
  canvas.height = oldHeight * pixelRatio
  canvas.style.width = oldWidth + 'px'
  canvas.style.height = oldHeight + 'px'
  canvas.getContext('2d').scale(pixelRatio, pixelRatio)
}

function highlightSelectedGlyph(glyph) {
  removeClass('active')
  document.getElementById('g' + glyph.index).parentNode.classList.add('active')
}

function displayActiveGlyphInfo(glyph) {
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

function displayActiveGlyph(glyph, font) {
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

  displayActiveGlyphInfo(glyph)
  highlightSelectedGlyph(glyph)

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

function createCanvas(glyphIndex, font) {
  const glyphContainer = document.createElement('div')
  glyphContainer.classList.add('glyph-container')
  glyphContainer.addEventListener('click', () => { displayActiveGlyph(font.glyphs.get(glyphIndex), font) }, false)

  if (window.innerWidth > 940) { var numCols = 16 }
  else if (window.innerWidth <= 940 && window.innerWidth > 700) { var numCols = 10 }
  else if (window.innerWidth <= 700) { var numCols = 6 }

  document.getElementById('glyph-grid').appendChild(glyphContainer)
  const canvasWidth = (document.getElementById('glyph-grid').offsetWidth / numCols) - 1

  const glyphCanvas = document.createElement('canvas')
  glyphCanvas.width = canvasWidth
  glyphCanvas.height = canvasWidth * 1.2
  glyphCanvas.className = 'glyph'
  glyphCanvas.id = 'g'+ glyphIndex
  enableHighDPICanvas(glyphCanvas)
  glyphContainer.appendChild(glyphCanvas)

  return glyphCanvas
}

function writeGlyph(glyphIndex, font) {
  const glyphCanvas = createCanvas(glyphIndex, font)
  if (glyphIndex >= font.numGlyphs) return;

  const ctx = glyphCanvas.getContext('2d')
  const glyph = font.glyphs.get(glyphIndex)
  const glyphPosition = getGlyphPosition(glyphCanvas, glyph, font)
  glyph.draw(ctx, glyphPosition.xmin, glyphPosition.fontBaseline, glyphPosition.fontSize)
}

function paginationHighlight(pageNum) {
  removeClass('selected-page')
  document.getElementById('p' + pageNum).className = 'selected-page'
}

function removeGlyphs() {
  const glyphGrid = document.getElementById('glyph-grid')

  while (glyphGrid.firstChild) {
    glyphGrid.removeChild(glyphGrid.firstChild)
  }
}

function displayGlyphPage(pageNum, glyphsPerPage, font) {
  removeGlyphs()
  paginationHighlight(pageNum)

  const firstGlyph = pageNum * glyphsPerPage
  for (var index = 0; index < glyphsPerPage; index++) {
    writeGlyph(firstGlyph + index, font)
  }
}

function paginationCreate(glyphsPerPage, font) {
  const numPages = Math.ceil(font.numGlyphs / glyphsPerPage)
  var pagination = document.createDocumentFragment()

  for (var i = 0; i < numPages; i++) {
    let pageLink = document.createElement('a');
    pageLink.href = '#'
    pageLink.textContent = i + 1
    pageLink.id = 'p' + i

    pageLink.addEventListener('click', (e) => {
      e.preventDefault()
      displayGlyphPage(e.target.id.substr(1), glyphsPerPage, font)
    }, false)
    pagination.appendChild(pageLink)
  }

  return pagination
}

function glyphInspector(fontFile) {
  opentype.load(fontFile, function(err, font) {
    if (err) {
      console.log('Font could not be loaded: ' + err)
    }
    else {
      // Set the number of glyphs per page based on window width
      if (window.innerWidth > 940) { var glyphsPerPage = 128 }
      else if (window.innerWidth <= 940 && window.innerWidth > 700) { var glyphsPerPage = 130 }
      else if (window.innerWidth <= 700) { var glyphsPerPage = 54 }

      // Create pagination
      const pagination = paginationCreate(glyphsPerPage, font)
      document.getElementById('glyph-pagination').appendChild(pagination)

      // See if there is a URL parameter specifying specific glyph
      const parsedUrl = new URL(window.location.href)
      let glyphIndex = parsedUrl.searchParams.get('i')

      // Error checking
      if (!glyphIndex) { glyphIndex = 5 }
      if (glyphIndex >= font.numGlyphs) { glyphIndex = font.numGlyphs - 1 }
      if (glyphIndex < 0 ) { glyphIndex = 0 }

      // Display initial page of glyphs
      const startPage = Math.floor(glyphIndex / glyphsPerPage)
      displayGlyphPage(startPage, glyphsPerPage, font)

      // Display initial glyph
      displayActiveGlyph(font.glyphs.get(glyphIndex), font)
    }
  })
}

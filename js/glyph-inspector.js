var font
var head
var maxHeight
var glyphsPerPage = 128
var numCols = 16

if (window.innerWidth <= 940 && window.innerWidth > 700) {
  var numCols = 10
  window.numCols = numCols
  var glyphsPerPage = 130
  window.glyphsPerPage = glyphsPerPage
}
else if (window.innerWidth <= 700) {
  var numCols = 6
  window.numCols = numCols
  var glyphsPerPage = 54
  window.glyphsPerPage = glyphsPerPage
}

const glyphGrid = document.getElementById('glyph-grid')
const canvasWidth = (glyphGrid.offsetWidth / numCols) - 1
const glyphInfoContainer = document.getElementById('glyph-info')
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

function selectGlyph(e) {
  removeClass('active')
  this.classList.add('active')

  displayGlyphInfo(font.glyphs.get(e.target.id.substr(1)))
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

function createCanvas(id) {
  const glyphContainer = document.createElement('div')
  glyphContainer.classList.add('glyph-container')
  glyphContainer.addEventListener('click', selectGlyph, false)
  glyphGrid.appendChild(glyphContainer)

  const canvas = document.createElement('canvas')
  canvas.width = canvasWidth
  canvas.height = canvasWidth * 1.2
  canvas.className = 'glyph'
  canvas.id = 'g'+ id
  enableHighDPICanvas(canvas)
  glyphContainer.appendChild(canvas)

  return canvas
}

function removeGlyphs() {
  removeClass('selected-page')

  while (glyphGrid.firstChild) {
    glyphGrid.removeChild(glyphGrid.firstChild)
  }
}

function pageSelect(e) {
  e.preventDefault()
  pageNum = e.target.id.substr(1)

  removeGlyphs()
  displayGlyphPage(pageNum)
}

function getGlyphPosition(canvas, glyph) {
  const w = canvas.width / pixelRatio
  const h = canvas.height / pixelRatio

  const fontScale = Math.min(w / (head.xMax - head.xMin), h / maxHeight)
  const fontSize = fontScale * font.unitsPerEm
  const fontBaseline = h * head.yMax / maxHeight;
  const glyphWidth = glyph.advanceWidth * fontScale
  const xmin = (w - glyphWidth) / 2

  return { xmin, fontBaseline, fontSize }
}

function displayGlyphInfo(glyph) {
  const canvas = document.getElementById('active-glyph')
  canvas.width = document.getElementById('glyph-detail').offsetWidth
  canvas.height = canvas.width * 0.8
  enableHighDPICanvas(canvas)
  const ctx = canvas.getContext('2d')
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  glyphPosition = getGlyphPosition(canvas, glyph)
  glyph.draw(ctx, glyphPosition.xmin, glyphPosition.fontBaseline, glyphPosition.fontSize)

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

function writeGlyph(index) {
  const canvas = createCanvas(index)
  if (index >= font.numGlyphs) return;

  const ctx = canvas.getContext('2d')

  const glyph = font.glyphs.get(index)
  glyphPosition = getGlyphPosition(canvas, glyph)

  glyph.draw(ctx, glyphPosition.xmin, glyphPosition.fontBaseline, glyphPosition.fontSize)
}

function displayGlyphPage(pageNum) {
  const firstGlyph = pageNum * glyphsPerPage;
  document.getElementById('p' + pageNum).className = 'selected-page';

  for (var index = 0; index < glyphsPerPage; index++) {
    writeGlyph(firstGlyph + index)
  }
}

function createNavigation() {
  const glyphPagination = document.getElementById('glyph-pagination')

  var fragment = document.createDocumentFragment()
  var numPages = Math.ceil(font.numGlyphs / glyphsPerPage)

  for (var i = 0; i < numPages; i++) {
    var link = document.createElement('a');
    link.href = '#'

    link.textContent = i + 1
    link.id = 'p' + i

    link.addEventListener('click', pageSelect, false)
    fragment.appendChild(link)
  }

  glyphPagination.appendChild(fragment)
}

function glyphInspector(fontFile) {
  opentype.load(fontFile, function(err, font) {
    if (err) {
      console.log('Font could not be loaded: ' + err)
    }
    else {
      window.font = font

      var head = font.tables.head
      window.head = head

      var maxHeight = head.yMax - head.yMin
      window.maxHeight = maxHeight

      createNavigation()
      displayGlyphPage(0)

      document.getElementById('g0').parentNode.classList.add('active')
      displayGlyphInfo(font.glyphs.get(0))
    }
  })
}

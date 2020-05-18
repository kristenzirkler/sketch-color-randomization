var randomizeGrays = function (context) {

var sketch = require('sketch')
var Style = require('sketch/dom').Style
var UI = require('sketch/ui')

var document = sketch.getSelectedDocument()

var selection = document.selectedLayers
var selectedCount = selection.length

if (selectedCount === 0) {
  //console.log('No layers are selected.')
  UI.message('No layers are selected.')
} else {
  //console.log(selectedCount+' Selected layers:');
}

// Define color palette
var color1 = "#E6E7E9"
var color2 = "#C4C4C4"
var color3 = "#969696"
var color4 = "#7C7C7C"
var color5 = "#626262"
var colorCount = 5
var colors = [color1,color2,color3,color4,color5]
//console.log(colors);

// Select a random number
function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}
// Loop through object and change its fill color
selection.forEach(function (layer, i) {

  // Get a random color to fill layer style
  var r = getRandomIntInclusive(1,5)

  // Avoid repeat colors
  while (lastColor == r) {
    var r = Math.floor(Math.random()*5)
  }
  // Fill the color
  layer.style.fills = [
    {
      color: colors[r],
      fillType: Style.FillType.Color,
    },
  ]
  UI.message('Colors Updated.')

  // Remember last used color
  var lastColor = r
})
};          
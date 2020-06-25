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
var color1 = "#ccc"
var color2 = "#999"
var color3 = "#666"
var colorCount = 3
var colors = [color1,color2,color3]
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
  var r = getRandomIntInclusive(0,colorCount)
  //console.log(r);

  // Avoid repeat colors
  while (lastColor == r) {
    var r = Math.floor(Math.random()*colorCount)
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
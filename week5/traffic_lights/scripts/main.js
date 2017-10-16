window.onload = function(){

  //UTILITY FUNCTIONS
  function hasClass(elem, className) {
    return new RegExp(' ' + className + ' ').test(' ' + elem.className + ' ');
  }

  function addClass(elem, className) {
      if (!hasClass(elem, className)) {
          elem.className += ' ' + className;
      }
  }

  function removeClass(elem, className) {
      var newClass = ' ' + elem.className.replace( /[\t\r\n]/g, ' ') + ' ';
      if (hasClass(elem, className)) {
          while (newClass.indexOf(' ' + className + ' ') >= 0 ) {
              newClass = newClass.replace(' ' + className + ' ', ' ');
          }
          elem.className = newClass.replace(/^\s+|\s+$/g, '');
      }
  }

  /* YOUR CODE GOES HERE */

  // ELEMENTS
  // BUTTONS
  var stopButton = document.getElementById('stopLightControl');
  console.log('stopButton', stopButton);
  var cautionButton = document.getElementById('cautionLightControl');
  console.log('cautionButton', cautionButton);
  var goButton = document.getElementById('goLightControl');
  console.log('goButton', goButton);

  // LIGHTS
  var lights = document.querySelectorAll(".light");

  var stopLight = document.getElementById("stopLight");
  var cautionLight = document.getElementById("cautionLight");
  var goLight = document.getElementById("goLight");


  function turnAllOff(){
    for(var i = 0; i < lights.length; i++){
      removeClass(lights[i], 'on');
    }
  }

  function turnOnGreen(){
    addClass(lights[2], 'on');
  }

  function turnOnYellow(){
    addClass(lights[1], 'on');
  }

  function turnOnRed(){
    addClass(lights[0], 'on');
  }

  // EVENT BINDINGS
  stopButton.addEventListener('click', function(){
    console.log('Stop was clicked');
    turnAllOff();
    turnOnRed();
  });

  cautionButton.addEventListener('click', function(){
    console.log('Caution was clicked');
    turnAllOff();
    turnOnYellow();
  });

  goButton.addEventListener('click', function(){
    console.log('Go was clicked');
    turnAllOff();
    turnOnGreen();
  });

};

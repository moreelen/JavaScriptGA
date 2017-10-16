#Traffic Lights Exercise

##Instructions

###Stage 1
Using the `addEventListener` function, bind an event listener to the `red`, `amber` & `green` buttons so that when the user clicks the button the relevant light turns on.

To use `addEventListener` you say:

```javascript
//Get hold of the element
var el = document.getElementById('blahLightControl');

//Bind [click] event listener to it
el.addEventListener('click', function(){

  //find light
  var targetLight = document.getElementById('blahLight');

  //Turn light on by adding class 'on'
  addClass(targetLight, 'on');

});
```

###Stage 2
Now enhance your handler functions so that when clicked they turn all other lights off AND THEN turn the target light on.

Here you'll want to create a function that selects all the light elements:
```javascript
var lights = document.querySelectorAll('.light')
```
and then iterates over them, removing the class 'on' from each one. (hint: 'for loop')

Call that function in your handler functions BEFORE you switch on the relevant light.

###Stage 3 (VERY OPTIONAL CHALLENGE)
* Change Buttons for a 'start' and 'stop' button (line 19 in html)
* Use setInterval()
  * setInterval (like it's partner setTimeout) is provided for you in the window object, so it's window.setInterval, but because window is 'everything' you can just type setTimeout.
  * setInterval & setTimeout take a function and a time in milliseconds as arguments, so:
    ```javascript
    var myInterval = setInterval(function(){/* Do something */}, 2000);
    //This will start the process

    To cancel, use clearInterval(myInterval);
    ```
* Make the traffic lights work automatically
  * Make them do 'Red, Red & Amber, Green, Amber, Red.'

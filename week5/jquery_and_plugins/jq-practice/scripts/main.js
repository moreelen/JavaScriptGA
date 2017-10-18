$(function(){
  var $target = $('#classer'); //.eq(0) picks up an item in the array.
  var $hider = $('#hider');
  var $fader = $('#fader');
  var $slider = $('#slider');

  var $addButton = $('#add-class-control');
  var $removeButton = $('#remove-class-control');
  var $toggleButton = $('#class-toggle-control');

  var $hideButton = $('#hide-control');
  var $showButton = $('#show-control');
  var $toggleHideButton = $('#hide-toggle-control')

  var $fadeOutButton = $('#fade-out-control');
  var $fadeInButton = $('#fade-in-control');
  var $fadeToggleButton = $('#fade-toggle-control');

  var $slideUpButton = $('#slide-up-control');
  var $slideDownButton = $('#slide-down-control');
  var $toggleSlideButton = $('#slide-toggle-control');

  $addButton.on('click.addClass', function($e){
    console.log('this', this); // show what the vent target was
    console.log('$e', $e); // show the event object. You don't need to add $e but it shows that all functions have it.
    $target.addClass('hinge');
    return false; // prevent bad stuff happening eg. event bubbling.
  });

  $removeButton.on('click.removeClass', function($e){
    $target.removeClass('hinge');
    return false;
  });

  $toggleButton.on('click.toggleClass', function($e){
    $target.toggleClass('hinge');
    return false;
  });

  $hideButton.on('click.addClass', function($e) {
    console.log('clicked');
    $hider.hide();
    return false;
  });

  $showButton.on('click.removeClass', function($e) {
    $hider.show();
    return false;
  });

  $toggleHideButton.on('click.toggleClass', function($e) {
    $hider.toggle();
    return false;
  });

  $fadeOutButton.on('click.addClass', function($e) {
    console.log('clicked');
    $fader.fadeOut(400);
    return false;
  });

  $fadeInButton.on('click.removeClass', function($e) {
    $fader.fadeIn(400);
    return false;
  });

  $fadeToggleButton.on('click.toggleClass', function($e) {
    $fader.fadeToggle();
    return false;
  });

  $slideUpButton.on('click.addClass', function($e) {
    $slider.slideUp();
    return false;
  });

  $slideDownButton.on('click.removeClass', function($e) {
    $slider.slideDown();
    return false;
  });

  $toggleSlideButton.on('click.toggleClass', function($e) {
    $slider.slideToggle();
    return false;
  });

});

$(function(){

  // Class controls
  var $addClassButton = $('#add-class-control');
  var $removeClassButton = $('#remove-class-control');
  var $toggleClassButton = $('#class-toggle-control');

  // Hiding controls
  var $hideButton = $('#hide-control');
  var $showButton = $('#show-control');
  var $hideToggle = $('#hide-toggle-control');

  // Fading controls
  var $fadeOutButton = $('#fade-out-control');
  var $fadeInButton = $('#fade-in-control');
  var $fadeToggle = $('#fade-toggle-control');

  // Sliding controls
  var $slideUpButton = $('#slide-up-control');
  var $slideDownButton = $('#slide-down-control');
  var $slideToggle = $('#slide-toggle-control');

  // Target divs
  var $hider = $('#hider');
  var $fader = $('#fader');
  var $slider = $('#slider');
  var $classer = $('#classer');

  // Class to be added
  var classToBeAdded = 'hinge';

  // Attach Handlers
  // Class manipulation section

  $addClassButton.on('click.addClass', function() {
    $classer.addClass(classToBeAdded);
  });

  $removeClassButton.on('click.removeClass', function() {
    $classer.removeClass(classToBeAdded);
  });

  $toggleClassButton.on('click.toggleClass', function() {
    $classer.toggleClass(classToBeAdded);
  });

  // Hide section
  $hideButton.on('click.hide', function(){
    $hider.hide();
  });

  $showButton.on('click.show', function(){
    $hider.show();
  });

  $hideToggle.on('click.toggle', function(){
    $hider.toggle();
  });

  // Fade Section
  $fadeOutButton.on('click.fadeOut', function(){
    $fader.fadeOut();
  });

  $fadeInButton.on('click.fadeIn', function(){
    $fader.fadeIn();
  });

  $fadeToggle.on('click.fadeToggle', function(){
    $fader.fadeToggle();
  });

  // Slide Section
  $slideUpButton.on('click.slideUp', function(){
    $slider.slideUp();
  });

  $slideDownButton.on('click.slideDown', function(){
    $slider.slideDown();
  });

  $slideToggle.on('click.slideToggle', function(){
    $slider.slideToggle();
  });

});

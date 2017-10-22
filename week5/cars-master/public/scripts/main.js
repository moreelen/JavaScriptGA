$(function(){
  // VARIABLES

  // TEMPLATING
  var source   = $("#car-template").html();
  var carTemplate = Handlebars.compile(source);

  // PAGE ELEMENTS
  var $loadButton = $('#load');
  var $carsList = $('#carsList');
  var $addForm = $('#addForm');
  var $carInput = $('#carName');

  // GENERATED ELEMENTS
  var $spinner = $('<i class="fa fa-refresh spinner" aria-hidden="true"></i>');


  // HELPER FUNCTIONS
  function errorHandler(error){ //just to show you how to error catch
    console.error(error);
  }

  function getCars() {
    $carsList.addClass('loading').html($spinner);
    $.ajax({
      url: '/cars'
    }).done(function(response){
        console.log(response);
        writeCars(response);
    }).fail(errorHandler);
  }

  function writeCars (cars) {
    console.log(cars, cars.length);
    if (!cars.length) {
      $carsList.addClass('uninitialised').html('<li>No cars to display</li>');
      return;
    }
    $carsList.html('').removeClass('loading uninitialised');
    cars.forEach(function(car){
      $carsList.append(carTemplate(car));
    });
  }

  function addCar(car) {
    console.log('adding a car', car);
    $.ajax({
      method: 'POST',
      url: '/cars',
      data: car
    }).done(function(response){
      getCars();
    }).fail(errorHandler);
  }

  function deleteCar(id) {
    console.log('deleting a car', id);
    $.ajax({
      method: 'DELETE',
      url: '/cars/' + id
    }).done(function(response){
      getCars();
    }).fail(errorHandler);
  }

  // EVENT BINDINGS
  // CREATE
  $addForm.on('submit.addCar', function($e){
    var newCar = {
      name: $carInput.val()
    }
    console.log('newCar', newCar);
    addCar(newCar);
    $carInput.val('');
    return false;
  });
  // READ
  $loadButton.on('click.load', getCars);

  // UPDATE

  // DELETE
  $($carsList).on('click.delete', '.delete-button', function(){
    var $button = $(this);
    var carToBeDeletedId = $button.data('id');
    console.log('deleting...', carToBeDeletedId);
    deleteCar(carToBeDeletedId);
    $button.parents('li').remove();
  });

  // RUNNING ORDER
  getCars();


});

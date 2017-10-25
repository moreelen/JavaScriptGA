$(function(){
  var source = $("#memory-template").html();
  var memoryTemplate = Handlebars.compile(source);

  var $loadButton = $("#load");
  var $memoriesList = $("#memoriesList");
  var $addForm = $("#addForm");
  var $author = $("#author");
  var $age = $("#age");
  var $location = $("#location");
  var $memory = $("#memory");
  var colours = ['#556270', '#4ECDC4', '#C7F464', '#FF6B6B', '#C44D58'];
  var $colourMemories = $("#memories li");
  // console.log('$memoriesList', $memoriesList);
  // console.log('$colourMemories', $colourMemories);

  function errorHandler(error){
    console.error(error);
  }

  function getMemories(){
    // console.log('getMemories');
    $.ajax({
      url: '/memories'
    }).done(function(response){
      // console.log(response);
      writeMemories(response);
    }).fail(errorHandler());
  }

  function writeMemories(memories){
    // console.log('writeMemories');
    $memoriesList.html('');
    memories.forEach(function(memory){
      $memoriesList.append(memoryTemplate(memory));
    });
  }

  function addMemory(memory){
    // console.log('Adding memory.');
    $.ajax({
      method: 'POST',
      url: '/memory',
      data: memory
    }).done(function(response){
      getMemories();
    }).fail(errorHandler);
  }

  function deleteMemory(id){
    // console.log('Delete ' + id);
    $.ajax({
      method: 'DELETE',
      url: '/memory/' + id
    }).done(function(response){
      getMemories();
    }).fail(errorHandler);
  }

  function randomColour(){
    var colourPicker = Math.floor(Math.random() * 5);
    return colourPicker;
  }

  function colourMemory(){
    console.log('colour:', colours[randomColour()]);
    //$colourMemories.forEach(function(memory){
    //  console.log(memory);
    //});
    //.css({
    //  "background-color" : colours[randomColour()]
    //});
  }

  colourMemory();

  $loadButton.on('click.load', function(){
    // console.log('clicked');
    getMemories();
  });

  $addForm.on('submit.addMemory', function(){
    var newMemory = {
      author: $author.val(),
      age: $age.val(),
      location: $location.val(),
      memory: $memory.val()
    }
    // console.log('newMemory', newMemory);
    addMemory(newMemory);
    $author.val('');
    $age.val('');
    $location.val('');
    $memory.val('');
    return false;
  });

  $($memoriesList).on('click.delete', '.delete-button', function(){
    var $button = $(this);
    var memoryDeletedId = $button.data('id');
    // console.log('Deleting ', memoryDeletedId);
    deleteMemory(memoryDeletedId);
    $button.parents('li').remove();
  });

  getMemories();

});

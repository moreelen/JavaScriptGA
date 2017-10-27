$(function(){
  // chart with data inside it
  // firebase with data inside it
  // put the variable at the top so when data comes in for firebase
  // you can then copy it into chart and when data comes in from chart
  // you can copy it into data

  let happy = null;
  let ok = null;
  let sad = null;

  // Initialize Firebase - copied from firebase
  var config = {
    apiKey: "AIzaSyC7j1xbkcdBajmkfM8279-J1uysmJmD-Ro",
    authDomain: "joyometer-9a862.firebaseapp.com",
    databaseURL: "https://joyometer-9a862.firebaseio.com",
    projectId: "joyometer-9a862",
    storageBucket: "",
    messagingSenderId: "282949781090"
  };
  firebase.initializeApp(config);

  function getData(){
    // to format the data so we can use nvd3 to graph it
    return [{
      label: "happy",
      value: happy
    }, {
      label: "ok",
      value: ok
    }, {
      label: "sad",
      value: sad
    }];
  }

  function drawGraph(){
    // grab code from nvd3 or d3 which draws you the pie chart.
    const data = getData();
    console.log('data', data);

    nv.addGraph(function() {
      var chart = nv.models.pieChart()
        .x(function(d) { return d.label })
        .y(function(d) { return d.value })
        .showLabels(true);

        d3.select("#chart svg")
          .datum(data)
          .transition().duration(350)
          .call(chart);

          return chart;
    });
  }

  const query = firebase.database().ref(); // firebase has a database function inside it
  // which turns it into a database object and then you can reference it.

  query.on("value", snapshot => { // you put a listener which looks for value
    // snapshot is a snapshot of the database you can pull data from there.
    const data = snapshot.val(); // val function gives you the data that you are looking for
    console.log('new data', data);
    // Put the corresponding data into the variables.
    happy = data.happy;
    ok = data.ok;
    sad = data.sad;

    drawGraph(getData());
  });

  // DOM Elements
  const $happyButton = $("#happy");
  const $okButton = $("#ok");
  const $sadButton = $("#sad");

  // Event Listeners
  $happyButton.on('click.happy', () => {
    console.log('Happy click!');
  });

  $okButton.on('click.ok', () => {
    console.log('OK click.');
  });

  $sadButton.on('click.sad', () => {
    console.log('Sad click...');
  });

});

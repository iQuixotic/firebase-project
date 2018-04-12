
  var config = {
    apiKey: "AIzaSyDDzO9UIovkM-fnwCzK7K7u1j6MJqAYnvE",
    authDomain: "my-awesome-project-45ec5.firebaseapp.com",
    databaseURL: "https://my-awesome-project-45ec5.firebaseio.com",
    projectId: "my-awesome-project-45ec5",
    storageBucket: "my-awesome-project-45ec5.appspot.com",
    messagingSenderId: "714920785006"
  };
  firebase.initializeApp(config);
  

  
  var database = firebase.database();
  

  $("#submit").on("click", function(event) {
    event.preventDefault();
  

    var trainName = $("#train-name-input").val().trim();
    var trainNum = $("#number-input").val().trim();
    var frequency = $("#frequency-input").val().trim();
    var arrival = $("#arrival-input").val().trim();
    var destination = $("#destination-input").val().trim();
  

    var newTrain = {
      dataTrainName: trainName,
      dataTrainNum: trainNum,
      dataFrequency: frequency,
      dataArrival: arrival,
      dataDestination: destination
    };
  
    
    database.ref().push(newTrain);
  
   
    console.log(newTrain.dataTrainName);
    console.log(newTrain.dataTrainNum);
    console.log(newTrain.dataFrequency);
    console.log(newTrain.dataArrival);
    console.log(newTrain.dataDestination);
  
  
    alert("New Train successfully added");
  
  
    $("#train-name-input").val("");
    $("#number-input").val("");
    $("#frequency-input").val("");
    $("#destination-input").val("");
    $("#arrival-input").val("");

    var newDiv = $("<div>").attr('class', 'row');

    var newTrainNameDiv = $("<div>").addClass('card justify-content-center myCard card col-lg-3');
    // newTrainNameDiv = $("<div>").attr('class', 'myCard');
    // newTrainNameDiv = $("<div>").attr('class', 'card');
    // newTrainNameDiv = $("<div>").attr('class', 'col-lg-3');
    var newTrainNumDiv =$("<div>").addClass('justify-content-center card myCard num-col');
    var newTrainDestinationDiv =$("<div>").addClass('justify-content-center myCard card col-lg-3');
    var newTrainFrequencyDiv =$("<div>").addClass('justify-content-center myCard card col-lg-2');
    var newTrainArrivalDiv =$("<div>").attr('class', 'justify-content-center myCard card col-lg-2');

    var p1 = $("<p>").text(trainName);
    newTrainNameDiv.append(p1);
    console.log(trainName);
    console.log(p1);
    console.log(newTrainNameDiv);
    var p2 = $("<p>").text(trainNum);
    newTrainNumDiv.append(p2);
    var p3 = $("<p>").text(destination);
    newTrainDestinationDiv.append(p3);
    var p4 = $("<p>").text(frequency);
    newTrainFrequencyDiv.append(p4);
    var p5 = $("<p>").text(arrival);
    newTrainArrivalDiv.append(p5);


    newDiv.append(newTrainNumDiv);
    newDiv.append(newTrainNameDiv);
    newDiv.append(newTrainDestinationDiv); 
    newDiv.append(newTrainFrequencyDiv);
    newDiv.append(newTrainArrivalDiv);
    $("#add-here").append(newDiv);

    //------------------------------------------------------------------------------------------------------------

        database.ref().on("child_added", function(childSnapshot, prevChildKey) {

      console.log(childSnapshot.val());
    
   
      var newName  = childSnapshot.val().dataTrainName;
      var newFrequency = childSnapshot.val().dataFrequency;
      var newArrival = childSnapshot.val().dataArrival;
      var newDestination = childSnapshot.val().dataDestination;
      var newTrainNum= childSnapshot.val().dataTrainNum;
    
 
      console.log(newName);
      console.log(newFrequency);
      console.log(newArrival);
      console.log(newDestination);
      console.log(newTrainNum);
      



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




    var newDiv = $("<div>");
    var newTrainNameDiv =$("<div>").attr('justify-content-center myCard card col-lg-3');
    var newTrainNumDiv =$("<div>").attr('justify-content-center card myCard num-col');
    var newTrainDestinationDiv =$("<div>").attr('justify-content-center myCard card  col-lg-3');
    var newTrainFrequencyDiv =$("<div>").attr('justify-content-center myCard card col-lg-2');
    var newTrainArrivalDiv =$("<div>").attr('justify-content-center myCard card col-lg-2');

    var p1 = $("<p>").val(trainName);
    newTrainNameDiv.append(p1);
    var p2 = $("<p>").text(trainNum);
    newTrainNumDiv.append(p2);
    var p3 = $("<p>").text(destination);
    newTrainDestinationDiv.append(p3);
    var p4 = $("<p>").text(frequency);
    newTrainFrequencyDiv.append(p4);
    var p5 = $("<p>").text(arrival);
    newTrainArrivalDiv.append(p5);


    newDiv.append(newTrainNumDiv + newTrainNameDiv + newTrainDestinationDiv + newTrainFrequencyDiv + newTrainArrivalDiv);
    $("#add-here").append(newDiv);
});









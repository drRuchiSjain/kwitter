
const config = {
  apiKey: "AIzaSyA3a-PAH_yb3JHg7mnaqJC3NKG33SzyCnw",
  authDomain: "kwitter-415a4.firebaseapp.com",
  databaseURL: "https://kwitter-415a4-default-rtdb.firebaseio.com",
  projectId: "kwitter-415a4",
  storageBucket: "kwitter-415a4.appspot.com",
  messagingSenderId: "254244318475",
  appId: "1:254244318475:web:6f3995a0060824de91060e"
};
firebase.initializeApp(config);
  user_name = localStorage.getItem("user_name");

document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";

function addRoom()
{
  console.log("I am here");
  room_name = document.getElementById("room_name").value;

  firebase.database().ref("/").child(room_name).update({
    purpose : "adding room name"
  });

    localStorage.setItem("room_name", room_name);
    
    window.location = "kwitter_page.html";
}

function getData() { 
   firebase.database().ref("/").on('value', function(snapshot) { 
     document.getElementById("output").innerHTML = "";
       snapshot.forEach(function(childSnapshot) { 
         childKey  = childSnapshot.key;
       Room_names = childKey;
       console.log("Room Name - " + Room_names);
      row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
      document.getElementById("output").innerHTML += row;
    });
  });

}

getData();

function redirectToRoomName(name)
{
  console.log(name);
  localStorage.setItem("room_name", name);
    window.location = "kwitter_page.html";
}

function logout() {
localStorage.removeItem("user_name");
localStorage.removeItem("room_name");
    window.location = "index.html";
}

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
function addUser() {

  user_name = document.getElementById("user_name").value;

  localStorage.setItem("user_name", user_name);
  
    window.location = "kwitter_room.html";
}



//ADD YOUR FIREBASE LINKS HERE

var firebaseConfig = {
  apiKey: "AIzaSyAYW99AT0huwda-OaEi57lh2-vxtB0jW0Y",
  authDomain: "kwitter-6f31e.firebaseapp.com",
  databaseURL: "https://kwitter-6f31e.firebaseio.com",
  projectId: "kwitter-6f31e",
  storageBucket: "kwitter-6f31e.appspot.com",
  messagingSenderId: "97485171473",
  appId: "1:97485171473:web:632563a45872d181347ab0",
  measurementId: "G-56F7YT6VVM"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

name_user = localStorage.getItem("user");
document.getElementById("member").innerHTML = name_user;

function addroom(){
   add_room = document.getElementById("room").value;//YOUR FIREBASE LINKS

   var firebaseConfig = {
         apiKey: "AIzaSyAYW99AT0huwda-OaEi57lh2-vxtB0jW0Y",
         authDomain: "kwitter-6f31e.firebaseapp.com",
         databaseURL: "https://kwitter-6f31e.firebaseio.com",
         projectId: "kwitter-6f31e",
         storageBucket: "kwitter-6f31e.appspot.com",
         messagingSenderId: "97485171473",
         appId: "1:97485171473:web:632563a45872d181347ab0",
         measurementId: "G-56F7YT6VVM"
       };
       // Initialize Firebase
       firebase.initializeApp(firebaseConfig);
   
       var user = localStorage.getItem("user");
       var room_name = localStorage.getItem("room_name");
   
       function send(){
             var chat = document.getElementById("message").value;
             firebase.database().ref(room_name).push({
                name: user, 
                message: chat,
                like: 0,
             });
   
             document.getElementById("message").value = "";
       }
   
   
   function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
            firebase_message_id = childKey;
            message_data = childData;
   //Start code
    console.log(firebase_message_id);
    console.log(message_data);
   
    message = message_data['message'];
    name = message_data['name'];
    like = message_data['like'];
   
    name_with_tag = "<h4>"+name+ "<img class = 'user_tick' src = 'tick.png'></h4>";
    message_with_tag = "<h4 class = 'message_h4'>" + message + "</h4>";
    like_button = "<button class = 'btn btn-warning' id = "+firebase_message_id+" value = "+like+" onclick = 'updateLike(this.id)'>";
    span_with_tag = "<span class = 'glyphicon glyphicon-thumbs-up'>Like:"+like+"</span></button><hr>";
   
    row = name_with_tag + message_with_tag + like_button + span_with_tag;
    document.getElementById("output").innerHTML += row;
   
   //End code
         } });  }); }
   getData();
   
   function updateLike(message_id){
     console.log("click on this button to"+ message_id);
     button_id = message_id;
     likes = document.getElementById(button_id).value;
     updated_likes = Number(likes)+1;
     console.log(updated_likes);
   
     firebase.database().ref(room_name).child(message_id).update({
           like: updated_likes
     });
   }
   
   function logout(){
         localStorage.removeItem("room_name");
         localStorage.removeItem("user");
         window.location = "index.html";
      }
   firebase.database().ref("/").child(add_room).update({
         purpose: "adding roomname"
   });
   
   localStorage.setItem("room_name", add_room);
   window.location = "kwitter_page.html";

}

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
   Room_names = childKey;
  //Start code
     console.log("Room name - "+ Room_names);
     row = "<div class = 'room_name' id = "+Room_names+" onclick = 'redirectToRoomName(this.id)'># "+Room_names+"</div><hr>";
      document.getElementById("output").innerHTML += row; 

  //End code
  });});}
getData();

function redirectToRoomName(name){
console.log(name);
localStorage.setItem("room_name", name);
window.location = "kwitter_page.html";
}

function logout(){
localStorage.removeItem("room_name");
localStorage.removeItem("user");
window.location = "index.html";
}
'use strict'

const switcher = document.querySelector('.btn');

// button event listener
switcher.addEventListener('click', function() {
    document.body.classList.toggle('dark-theme')

    var className = document.body.className;
    if(className == 'light-theme') {
        this.textContent = "Dark";
    }
    else {
        this.textContent = "Light";
    }

});

document.addEventListener('musickitloaded', function() {
    // MusicKit global is now defined
    MusicKit.configure({
      developerToken: 'DEVELOPER-TOKEN',
      app: {
        name: 'My Cool Web App',
        build: '1978.4.1'
      }
    });
  });


// form function
function myFunction() {
  var x, text;

  //Finish the function

  // Get the value of the input field with id="teamname"
  x = document.getElementById("teamname").value;

  text = "Your team name idea is " + x;

  document.getElementById("formbtn").innerHTML = text;
} 

function authorize(){
    document.write("Jukebox");
    let music = MusicKit.getInstance();

    // This is called with or without authorization: 
    music.player.play();
   
    // This ensures user authorization before calling play():
    music.authorize().then(function() {
      music.player.play();
    });
   
    // You can wrap any method to ensure authorization before calling:
    music.authorize().then(function() {
      music.api.library.albums.then(function(cloudAlbums) {
        // user's cloudAlbums
      });
    });
}


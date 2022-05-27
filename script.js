//bring in all the DOM elements i need

const musicContainer = document.getElementById("music-container");
const playBtn = document.getElementById("play");
const prevBtn = document.getElementById("prev");
const nextBtn = document.getElementById("next");

const audio = document.getElementById("audio");
const progress = document.getElementById("progress");
const progressContainer = document.getElementById("progress-container");
const title = document.getElementById("title");
const cover = document.getElementById("cover");
// const currTime = document.querySelector('#currTime');
// const durTime = document.querySelector('#durTime');
//=====================================================================
//create an array named songs which takes in the songs titles
const songs = ["Hey", "Summer", "Ukulele"];

//=====================================================================

//Keep track of song

let songIndex = 2;
//==============================================================

//loadSong FUNCTIONALITY

//take in a song param
//change the title to whatever the song is
//change the audio element src to whatever the song name
//change the image to match the played song
// invoke the function which takes in the songs(title of the song)and the index(number of the song)
const loadSong = (song) => {
  title.innerText = song;
  audio.src = `music/${song}.mp3`;
  cover.src = `images/${song}.jpg`;
};

//Initially load song details into DOM
loadSong(songs[songIndex]);
//========================================================================

//playSong FUNCTIONALITY

//add the play class to music-container to play the song
//select the class of the  i button and remove the class fa-play and add the class fa-pause  to have the pause icon displayed on the DOM from font-awesome
//to play the song with the audio Api ,call the play() method

const playSong = () => {
  musicContainer.classList.add("play");
  playBtn.querySelector("i.fas").classList.remove("fa-play");
  playBtn.querySelector("i.fas").classList.add("fa-pause");
  audio.play();
};
//=========================================================================

// pauseSong FUNCTIONALITY

//follow the playSong function

const pauseSong = () => {
  musicContainer.classList.remove("play");
  playBtn.querySelector("i.fas").classList.add("fa-play");
  playBtn.querySelector("i.fas").classList.remove("fa-pause");

  audio.pause();
};
//=====================================================================

//EVENT LISTENERS

//playBtn
//check if the song is playing
//if its playing than ia want to be able to pause it
// if music-container contains the class play than its playing
//if isPlaying is true than invoke playSong else invoke pauseSong

playBtn.addEventListener("click", () => {
  const isPlaying = musicContainer.classList.contains("play");
  if (isPlaying) {
    pauseSong();
  } else {
    playSong();
  }
});
///======================================================================

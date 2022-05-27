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

//prevSong FUNCTIONALITY

//take the songIndex and decrease it by 1 with -- (double minus)

const prevSong = () => {
  songIndex--;

  if (songIndex < 0) {
    songIndex = songs.length - 1;
  }
  loadSong(songs[songIndex]);
  playSong();
};
//=====================================================================

//nextSong FUNCTIONALITY

//if songIndex is greater than songs.length(3) -1 which gives us the song with index 2 ,the last song than take me back to the first song songIndex=0

const nextSong = () => {
  songIndex++;

  if (songIndex > songs.length - 1) {
    songIndex = 0;
  }
  loadSong(songs[songIndex]);
  playSong();
};
//==========================================================================

//updateProgress FUNCTIONALITY

//take in an event param
//get duration and currentTime from srcElement
//destructure duration and current time
//console.log(duration,currentTime) and get duration and currentTime
//create a variable ,asign it to currentTime and divide it to durationand multiply by 100 to get the actual  gone percentage  of the song that is being played
// progress.style.width is the actual progress bar in the DOM i asign it to the actual  gone percentage  of the song that is being played

const updateProgress = (e) => {
  const { duration, currentTime } = e.srcElement;
  // console.log(duration, currentTime);
  const progressPercent = (currentTime / duration) * 100;
  progress.style.width = `${progressPercent}%`;
};
//=========================================================================

//setProgress FUNCTIONALITY

//make the song jump where you click on the bar
//assign width variable to this keyword .clientWidth
//take in an event param
//get the X offset with the e param and offsetX
//get the duration from the audio api audio.duration
//set the current time of the audioto the right position

//i cant resolve this issue ,still looking for a solution---> script.js:131 Uncaught TypeError: Failed to set the 'currentTime' property on 'HTMLMediaElement': The provided double value is non-finite.

// const setProgress = (e) => {
//   const width = this.clientWidth;
//   const clickX = e.offsetX;
//   const duration = audio.duration;

//   audio.currentTime = (clickX / width) * duration;
// };
//===========================================================================
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

//switch songs
prevBtn.addEventListener("click", prevSong);
nextBtn.addEventListener("click", nextSong);

//time/song update event
audio.addEventListener("timeupdate", updateProgress);

// click on progress bar
progressContainer.addEventListener("click", setProgress);

//song ending

audio.addEventListener("ended", nextSong);

///======================================================================

renderHomeUI();
const audioTag = document.querySelector('.audioPlayer');
const audioHolder = document.querySelector(".audio-holder");
const playPause = document.querySelector(".playPause");
const volumeBar = document.querySelector(".vol-range");
const audioBar = document.querySelector(".audio-range");
const thumbnailImage = document.querySelector(".thumbnail-image");
const artistName = document.querySelector(".artist");
const titleName = document.querySelector(".title");
const titleContainer = document.querySelector('.music-title');
const titleElement = document.querySelector('.title');
const totalTime = document.querySelector(".total-time");
const currentTime = document.querySelector(".current-time");

//Global variables
let currentMusicIndex = 0;
let isPlaying = false;
let i = 0;

function scrollText(){
  if (titleElement.scrollWidth > titleContainer.offsetWidth) {
    titleElement.classList.add('scrollText');
  } else {
    titleElement.classList.remove('scrollText');
  }
}

function updateTotalTime(){
   let totalMinute = Math.floor(audioTag.duration / 60);
   let totalSecond = Math.floor(audioTag.duration % 60);
   let preceddingZero = totalSecond < 10 ? `0${totalSecond}`:`${totalSecond}`;
   let totalString = `${totalMinute}:${preceddingZero}`;
   totalTime.innerText = totalString;
   audioBar.setAttribute("max",Math.floor(audioTag.duration));
}

function updateCurrentTime(){
   let currentMinute = Math.floor(audioTag.currentTime / 60);
   let currentSecond = Math.floor(audioTag.currentTime % 60);
   let preceddingZero = currentSecond < 10 ? `0${currentSecond}`:`${currentSecond}`;
   let currentString = `${currentMinute}:${preceddingZero}`;
   currentTime.innerText = currentString;
}

//dead function
function handleAudioBarChange() {
   updateCurrentTime();
   audioTag.currentTime = audioBar.value;
}

 audioTag.addEventListener('timeupdate',() => {
  audioBar.value = audioTag.currentTime;
  if(audioTag.currentTime === audioTag.duration){
    playNext();
  };
  updateTotalTime();
  updateCurrentTime();
  });

function handlePlayPause() {
  isPlaying = !isPlaying;
  if (isPlaying) {
    playPause.innerHTML = `<span class="play-holder w-full h-full">
        <img src="./source/pause-button.png" class="play-btn w-full h-full">
        </span>`;
    audioTag.play();
  } else {
    playPause.innerHTML = `<span class="play-holder w-full h-full">
        <img src="./source/play-button.png" class="play-btn w-full h-full">
        </span>`;
    audioTag.pause();
  }
};


function playNext() {
  if (currentMusicIndex < musicArray.length - 1) {
    currentMusicIndex++;
  } else {
    currentMusicIndex = 0;
  }
  updateState();
  handlePlayPause();
  localStorage.setItem("currentSong",JSON.stringify(musicArray[currentMusicIndex]));
}

function playPrevious(){
   if (currentMusicIndex > 0) {
    currentMusicIndex--;
  } else {
    currentMusicIndex = 0;
  }
  updateState();
  handlePlayPause();
  localStorage.setItem("currentSong",JSON.stringify(musicArray[currentMusicIndex]));
}

function updateState(){
  const nextMusic = musicArray[currentMusicIndex];
  updateInfo(nextMusic);
  scrollText();
}

function updateInfo(nextMusic){
  if(nextMusic !== undefined){
    if(nextMusic.image){
     thumbnailImage.src = nextMusic.image;
    } else{
     thumbnailImage.src = "./source/image/default_image.jpg";
    };
    if(nextMusic.artist){
    artistName.innerText = nextMusic.artist;
    } else{
      artistName.innerText = "Unknown";
    };
    if(nextMusic.title){
    titleName.innerText = nextMusic.title;
    } else{
      titleName.innerText = "Unknown";
    }
    audioTag.src = nextMusic.path;
    audioBar.value = 0;
  } else{
    console.log("source error");
  };
}
  
 function border(){
    document.querySelector(".search-holder").style.border = "1px solid cyan";
  }
  
  /*Extra fumctions */
 /*document.querySelector(".file").addEventListener("change",(event) => {
     const file = event.target.files[0];
     const objectURL = URL.createObjectURL(file);
    titleName.innerText = event.target.files[0].name.replace(".mp3","");
    thumbnailImage.src = "./source/image/default_image.jpg";
    artistName.innerText = "Unknown";
    audioTag.src = objectURL;
    audioTag.play();
    scrollText();
  });
  
   function changeVolume(){
  audioTag.volume = volumeBar.value;
  let volContainer = document.querySelector(".vol-container");
  volContainer.classList.add("border-cyan-800","border");
   setTimeout(() => {
    volContainer.classList.remove("border");
   },3000);
  };*/
  /*-------------------------*/
  
 function renderHomeUI(){
  document.querySelector(".body-wrapper").innerHTML =  
  `<div class="music-thumbnail flex justify-evenly">
    <div class="thumbnail border-2 rounded overflow-hidden">
        <img src="./source/image/default_image.jpg" class="thumbnail-image object-cover h-full w-full"/>
    </div>
   </div>
     <div class="music-title mt-3">
       <div class="title-container">
       <div class="title text text-white text-2xl">Unknown</div>
       </div>
       <div class="artist text-3xl text-white text-xs mt-1">Unknown</div>
     </div>
    <div class="music-bar mx-4 mt-2">
    <div class="timer-holder flex">
     <span class="current-time text-white text-sm pl-1">0:00</span>
    <span class="total-time text-white text-sm pr-1">0:00</span>
    </div>
     <input type="range" class="audio-range flex my-1 rounded h-2 appearance-none bg-white-600" style="width:100%" step="0.01" value="0" min="0" max="" onchange="handleAudioBarChange()">
     </div>
     <div class="music-controls">
      <div class="audio-holder">
        <audio src="" class="audioPlayer"></audio>
      </div>
      
    <div class="btn-holder flex mt-8">
       <button class="previous text-white border-blue rounded-full bg-white w-12 h-12 p-2" onclick="playPrevious()">
        <span class="previous-holder w-full h-full">
        <img src="./source/previous.png" class="previous-btn w-full h-full">
        </span>
        </button>
       <button class="playPause text-white border-blue rounded-full bg-white w-12 h-12 p-2" onclick="handlePlayPause()">
        <span class="play-holder w-full h-full">
        <img src="./source/play-button.png" class="play-btn w-full h-full">
        </span>
        </button>
       <button class="next text-white border-blue rounded-full bg-white w-12 h-12 p-2" onclick="playNext()">
        <span class="next-holder w-full h-full">
        <img src="./source/next.png" class="previous-btn w-full h-full">
        </span>
        </button>
       </div>`;
 }
 
 handlePlayFirstTime();
 
 function handlePlayFirstTime(){
  i++;
  if(i == 1){
   currentMusicIndex = Math.floor(Math.random() * musicArray.length);
   updateState();
   localStorage.setItem("currentSong",JSON.stringify(musicArray[currentMusicIndex]));
  }
 };
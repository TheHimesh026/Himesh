const inputElement = document.querySelector(".input-bar");
const bodyWrapperElement = document.querySelector(".body-wrapper");
const backButton = document.querySelector(".back-btn");

const fakeData = 
  {
    youtubeId:"404",
    thumbnailUrl:"./source/image/default_image.jpg",
    title:"Now playing",
    artists:[
      {
        name:"Unknown",
      }],
  };

function startSearchProcess(){
  showBackButton();
  searchMusic();
  inputElement.value = "";
}

function searchMusic(){
  const URL = `http://localhost:3000/search?q=${inputElement.value}`;
  bodyWrapperElement.innerHTML = "";
  try{
   fetch(URL)
    .then(response => response.json())
    .then(data => renderSearchUI(data))
    .catch(error => console.error("error",error))
  } catch(error){
    console.error('Error fetching data:', error)}
}

function renderSearchUI(data) {
  let innerHtml = `<div class="result-displayer flex flex-col">`;
  data.forEach(item => {
    let jsonString = JSON.stringify(item);
    innerHtml += 
    `<div class="result flex items-center text-white h-16 rounded thin-border mx-4" data-search-item='${jsonString}' onclick="playSearchedSong(this.getAttribute('data-search-item'))">
        <span class="image-holder h-14">
          <img src="${item.thumbnailUrl}" class="w-full h-full border rounded">
        </span>
        <div class="details-container mx-1 w-full whitespace-nowrap overflow-hidden flex flex-col items-start">
          <span class="title-container w-52 flex justify-start">
            <p class="title truncate">${item.title}</p>
          </span>
          <div class="artist-container flex whitespace-nowrap overflow-y-scroll w-full">`;
   item.artists.forEach(artist => {
     innerHtml += `<p class="artist mr-2 text-xs">${artist.name}</p>`;
    });
    innerHtml += 
         `</div>
        </div>
      </div>`;
  });
  innerHtml += `</div>
  <div class="audio-bottom-ui flex items-center text-white rounded sticky bottom-0 w-full h-18">`;
  bodyWrapperElement.innerHTML = innerHtml;
}


function playSearchedSong(JsonObj) {
  let retrievedObj;
  let retrieved = JSON.parse(JsonObj);
  let audioURL = `http://localhost:3000/stream?videoId=${retrieved.youtubeId}&quality=lowest`;
  try{
  fetch(audioURL)
   .then(response => response.blob())
   .then(audio => {
       const audioBlobURL = URL.createObjectURL(audio);
      // let newAudio = new Audio(audioBlobURL);
   if (retrieved.thumbnailUrl) {
     retrieved.path = audioBlobURL;
   }
   retrievedObj = retrieved;
   renderAudioUI(retrievedObj);
   })}
   catch(error) {
       console.error('Error fetching audio:', error);
   }
  renderAudioUI(retrievedObj);
};

function renderAudioUI(item=fakeData){
  innerHtml = `
    <div class="flex items-center text-white h-16 rounded w-full">
     <span class="image-holder h-14 pl-1">
     <img src=${item.thumbnailUrl} class="w-full h-full border rounded">
        </span>
    <audio class="new-audio" src="${item.path}"></audio>
     <div class="details-container mx-1 w-full whitespace-nowrap overflow-hidden flex flex-col items-start bg-black">
     <span class="title-container w-52 flex justify-start">
      <p class="title truncate">${item.title}</p>
    </span>
    <div class="artist-container flex whitespace-nowrap overflow-y-scroll w-full">`;
    item.artists.forEach(artist => {
      innerHtml += 
      `<p class="artist mr-2 text-xs">${artist.name}</p>`;
    });
    innerHtml +=
        `</div>
        </div>
        </div>`;
  document.querySelector(".audio-bottom-ui").innerHTML = innerHtml;
  if(item.path){
    setTimeout(returnBack,1000);
  }
  localStorage.setItem("currentSong",JSON.stringify(item));
}

function showBackButton(){
  backButton.classList.remove("hidden");
}

function returnBack(){
  backButton.classList.add("hidden");
  let currentMusicString = JSON.parse(localStorage.getItem("currentSong"));
  reRenderHomeUI(currentMusicString);
}
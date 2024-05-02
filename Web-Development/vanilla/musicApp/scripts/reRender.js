function reRenderHomeUI(currentMusic){
   let innerHtml = 
  `<div class="music-thumbnail flex justify-evenly my-10">
    <div class="thumbnail border-2 rounded overflow-hidden">
      <img src="${(currentMusic.image || currentMusic.thumbnailUrl) ?  (currentMusic.image || currentMusic.thumbnailUrl) :
      './source/image/default_image.jpg'}"  class="thumbnail-image object-cover h-full w-full"/>
    </div>
   </div>
     <div class="music-title mt-3">
       <div class="title-container">
       <div class="title text text-white text-2xl">${currentMusic.title || 'Unknown'}</div>
       </div>
       <div class="artist text-3xl text-white text-xs mt-1 flex justify-center">`;
  if(typeof currentMusic.artists == "object"){
      currentMusic.artists.forEach(name => {
      innerHtml += `<p class="mr-2">${name.name}
       </p>`;
      })} else{
     innerHtml += `<p class="flex">${currentMusic.artist || 'Unknown'}`;
      }
   innerHtml += `</div>
     </div>
     <div class="music-controls">
      <div class="audio-holder">
        <audio src=${currentMusic.path} class="reRenderedMusicPlayer"></audio>
      </div>
      
    <div class="btn-holder flex mt-8">
       <button class="playPause text-white border-blue rounded-full bg-white w-12 h-12 p-2" onclick="handleRePlayPause()">
        <span class="play-holder w-full h-full">
        <img src="./source/pause-play.png" class="play-btn w-full h-full">
        </span>
        </button>
       </div>`;
    document.querySelector(".body-wrapper").innerHTML =  innerHtml;
    document.querySelector(".reRenderedMusicPlayer").play();
   
 }
 
let renderedIsPlaying = false;
 function handleRePlayPause(){
   renderedIsPlaying = !renderedIsPlaying;
  let playBtn = document.querySelector(".reRenderedMusicPlayer")
  if(renderedIsPlaying) {
    playBtn.play();
  } else {
    playBtn.pause();
  }
}
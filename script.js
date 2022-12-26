console.log("Welcome to spotify");

// Initialize the variables
let songIndex = 0;
let audioElement = new Audio('mortal.mp3');
let masterplay = document.getElementById('masterplay');
let myprogressbar = document.getElementById('myprogressbar');
let gif = document.getElementById('gif');
let songs =
[
    {songname: "jadugar", filepath: "folders/jadugar.mp3" ,coverpath: "covers/1.jpg"},
    {songname: "jadugar", filepath: "folders/jadugar.mp3" ,coverpath: "covers/1.jpg"},
    {songname: "jadugar", filepath: "folders/jadugar.mp3" ,coverpath: "covers/1.jpg"},
    {songname: "jadugar", filepath: "folders/jadugar.mp3" ,coverpath: "covers/1.jpg"},
    {songname: "jadugar", filepath: "folders/jadugar.mp3" ,coverpath: "covers/1.jpg"},
    {songname: "jadugar", filepath: "folders/jadugar.mp3" ,coverpath: "covers/1.jpg"},
    {songname: "jadugar", filepath: "folders/jadugar.mp3" ,coverpath: "covers/1.jpg"},
    {songname: "jadugar", filepath: "folders/jadugar.mp3" ,coverpath: "covers/1.jpg"},
]
//audioElement.play();
// handle play/pause click
masterplay.addEventListener('click', ()=>{
    if(audioElement.paused || audioElement.currentTime<=0)
    {
        audioElement.play();
        masterplay.classList.remove('fa-circle-play');
        masterplay.classList.add('fa-circle-pause');
        gif.style.opacity = 0.4;
   }
   else
   {
    audioElement.pause();
    masterplay.classList.remove('fa-circle-pause');
    masterplay.classList.add('fa-circle-play');
    gif.style.opacity = 0;
   }

   
})

//listen to events
myprogressbar.addEventListener('timeupdate',()=>
{
    console.log('timeupdate');
}

)
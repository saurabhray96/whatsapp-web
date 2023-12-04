var chat,send,sendMsg,pbgcolor,dpCnt,c=1;

send=document.getElementById('mic-icon');
pbgcolor=document.querySelector('.all-chat');

function chatInp() {
    chat=document.getElementById('chat-inp').value;
send=document.getElementById('mic-icon').className='fa-solid fa-paper-plane fa-xl';
if(chat===''){
    document.getElementById('mic-icon').className='fa-solid fa-microphone fa-xl';


}}


function sendAC() {  
  
    if (send==='fa-solid fa-paper-plane fa-xl') {
//multipal box open 
const textArray = [
    "Text element ",
    /*
    "Text element 2",
    "Text element 3",
    "Text element 11",
    // ...
    "Text element 50"*/
  ];
  const container = document.createElement("div");
  container.style.float = "right";
  container.style.flexWrap = "wrap";
  container.style.display='table';
  container.style.clear='both';
  textArray.forEach(() => {
    const div = document.createElement("div");
    div.style.width = "auto";
    div.style.marginTop = "10px";
    div.style.marginRight='10px';
    div.style.borderRadius = '10px';
    div.style.padding = "5px 16px";
    div.style.background = 'rgba(151, 246, 142, 0.886)';
    const p = document.createElement("p");
   // p.innerText = text;
   p.innerText=chat;
    div.appendChild(p);
    container.appendChild(div); 
  });
  document.body.appendChild(container);
   //multipal box open over
     document.getElementById('mic-icon').className='fa-solid fa-microphone fa-xl';
      document.inp.reset();
      send='error';
    }
}
function backMain(){
    window.open('http://127.0.0.1:5500/wapp/index.html');
}
let name1;
var dpcntt=document.getElementById('dpcnt');
name1=localStorage.getItem('name');
dpCnt=localStorage.getItem('Img');
dpcntt.src=dpCnt;
document.getElementById('name').innerHTML=name1;

/*......................*/ function videocamera() {
  
alert("he")
document.addEventListener("DOMContentLoaded", () => {
  let but = document.getElementById("but");
  let video = document.getElementById("vid");
  let mediaDevices = navigator.mediaDevices;
  vid.muted = true;
  but.addEventListener("click", () => {

      // Accessing the user camera and video.
      mediaDevices
          .getUserMedia({
              video: true,
              audio: true,
          })
          .then((stream) => {

              // Changing the source of video to current stream.
              video.srcObject = stream;
              video.addEventListener("loadedmetadata", () => {
                  video.play();
              });
          })
          .catch(alert);
  });
});
};
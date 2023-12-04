var stg,bdenter,c=-1,d;
function setting() { 
   document.getElementById('stg').open=true; 
  //document.getElementById('stgbox').style.transition='all 3s';
   document.getElementById('stgbox').open=true;  
}
bdenter=document.querySelector('#stg');
bdenter.addEventListener('click',function(){
    document.getElementById('stg').open=false; 
});

var divsize,dsize1,dsize2,dsize3,dsize4,dsize5,dsize6,n,dsize7,dsize8;
var stg0,stg1,btnclr,a,btnclrI,btnclrIc,pname2,nu,dpCnt;

  //this function use after onclick on profile 

 function openchat(pname1,nu)
{   
   
if(nu===1){
   dpCnt=document.getElementById('dp1').src;
}
else if(nu===2){
   dpCnt=document.getElementById('dp2').src;
}
else if(nu===3){
   dpCnt=document.getElementById('dp3').src;
}
else if(nu===4){
   dpCnt=document.getElementById('dp4').src;
}
else if(nu===5){
   dpCnt=document.getElementById('dp5').src;
}
else if(nu===6){
   dpCnt=document.getElementById('dp6').src;
}
else if(nu===7){
   dpCnt=document.getElementById('dp7').src;
}
else if(nu===8){
   dpCnt=document.getElementById('dp8').src;
}
else if(nu===9){
   dpCnt=document.getElementById('dp9').src;
}
else if(nu===10){
   dpCnt=document.getElementById('dp10').src;
}
else if(nu===11){
   dpCnt=document.getElementById('dp11').src;
}
localStorage.setItem('Img',dpCnt);
btnclr=document.querySelectorAll('.f-btn');
btnclrI=document.querySelectorAll('.footerbox');
btnclrIc=document.querySelectorAll('#i-c');
   divsize=document.querySelectorAll('#section');
   dsize1=document.querySelectorAll('.div-8');
   dsize2=document.querySelectorAll('.name-');
   dsize3=document.querySelectorAll('.dp-');
   dsize4=document.querySelectorAll('.allname');
   dsize5=document.querySelectorAll('.send');
   dsize6=document.querySelectorAll('#p');
   dsize7=document.querySelector('header');
   dsize8=document.querySelector('#wapp-1');
   stg0=document.querySelector('#footer');
   stg1=document.querySelectorAll('button');
   
   stg0.style.width='0px';
   dsize8.style.color=' rgb(251, 248, 249)';
   dsize7.style.width='0px';
   for ( n = 0; n <12; n++) {//this loop use to clear all screen
    dsize4[n].style.width='0px';
   dsize4[n].style.height='0px';
   dsize4[n].style.color='transparent';
   dsize4[n].style.backgroundColor='transparent';

   dsize5[n].style.color='transparent';

   dsize6[n].style.color='transparent';

   dsize3[n].style.width='0px';
   dsize3[n].style.height='0px';
   dsize3[n].style.color='transparent';
   dsize3[n].style.borderColor='transparent';
   }
  
   for ( a = 0; a < 4; a++) { //this loop use to clear footer box all button
btnclrI[a].style.width='0px';
btnclr[a].style.width='0px';
btnclr[a].style.height='0px';
btnclrI[a].style.color='transparent';
btnclrIc[a].style.color='transparent';
btnclr[a].style.backgroundColor='transparent';
   }
   pname2=pname1;
   localStorage.setItem('name',pname1);
   window.open('http://127.0.0.1:5500/wapp/wapp2.html')

}
   //this function use to open camera of phone after onclick camera icon
 /*  function opencamera() {
      let All_mediaDevices=navigator.mediaDevices
         if (!All_mediaDevices || !All_mediaDevices.getUserMedia) {
            console.log("getUserMedia() not supported.");
            return;
         }
         All_mediaDevices.getUserMedia({
            audio: true,
            video: true
         })
         .then(function(vidStream) {
            var video = document.getElementById('videoCam');
            if ("srcObject" in video) {
               video.srcObject = vidStream;
            } else {
               video.src = window.URL.createObjectURL(vidStream);
            }
            video.onloadedmetadata = function(e) {
               video.play();
            };
         })
         .catch(function(e) {
            console.log(e.name + ": " + e.message);
         });
      }*/


      // uper side is wrong
      function opencamera() {
         
      
      var video = document.getElementById('video');
if(navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
 navigator.mediaDevices.getUserMedia({ video: true }).then(function(stream) {
 video.src = window.URL.createObjectURL(stream);
 video.play();
 });
}
      }
    
// this is use for open search button
var mar=document.querySelector('#header-1');
var first=document.getElementById('section');
var sdia= document.querySelector('#searchdia');
var wcolor=document.getElementById('wapp-1');

function opnsearch() {
   document.getElementById('searchdia').open=true;
 
 wcolor.style.color='transparent'
 mar.style.width='0px';
 first.style.marginTop='250px';
 sdia.style.height=' 240px';
 sdia.style.marginTop='-250px'
 }
function ofsearch() {
   document.getElementById('searchdia').open=false;
 wcolor.style.color='white'
 mar.style.width='100%';
 first.style.marginTop='70px';
 sdia.style.height=' 240px';
 sdia.style.marginTop='-250px';
}
 //after onclick open profile details
 var pname,nu;
 function onclickpic(pname,nu){
   var pdp=document.getElementById('profile-div-div2');
if(nu===1){
  pdp.style.backgroundImage='url( dp-1.jpg)';
}
else if(nu===2){
  pdp.style.backgroundImage='url( no-dp-icon.png)';
}
else if(nu===3){
  pdp.style.backgroundImage='url( dp-3.jpg)';
}
else if(nu===4){
  pdp.style.backgroundImage='url( dp-4.jpg)';
}
else if(nu===5){
  pdp.style.backgroundImage='url( dp-5.jpg)';
}
else if(nu===6){
  pdp.style.backgroundImage='url( dp-6.jpg)';
}
else if(nu===7){
  pdp.style.backgroundImage='url( dp-7.jpg)';
}
else if(nu===8){
  pdp.style.backgroundImage='url( dp-8.jpg)';
}
else if(nu===9){
  pdp.style.backgroundImage='url( dp-9.jpg)';
}
else if(nu===10){
  pdp.style.backgroundImage='url( dp-10.png)';
}
else if(nu===11){
  pdp.style.backgroundImage='url( dp-9.jpg)';
}
document.getElementById('profile-div-header-name').innerHTML=pname;
  document.getElementById('profile-cover').open=true;
 }
 function offprofile()
 {
   document.getElementById('profile-cover').open=false;
 
 }
 
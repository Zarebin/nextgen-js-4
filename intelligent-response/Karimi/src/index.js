// import HelloWorldButton from './components/hello-world-button/hello-world-button.js';
// import addImage from './add-image.js';
// const helloWorldButton = new HelloWorldButton();
// helloWorldButton.render();
// addImage();
// 
// 

import './spin.scss';

const template =document.createElement('template');
template.innerHTML=`
<link rel="stylesheet" href="./dist/styles.css">



<div class="main-box" id="main-box">
<div class="mainbox" id="mainbox">


        <div class="box box1">1</div>
        <div class="box box2">2</div>
        <div class="box box3">3</div>
        <div class="box box4">4</div>
        <div class="box box5">5</div>
        <div class="box box6">6</div>
        <div class="box box7">7</div>
        <div class="box box8">8</div>
</div>
<button id="spin" class="spin"><a>spin?!</a></button>
<h3 id="winner">What is your guess?!</h3>
</div>


`;


class SpinWheel extends HTMLElement{

    constructor(){
        super();
        // this.spinWheel=true;
        this.attachShadow({mode:'open'});
        this.shadowRoot.appendChild(template.content.cloneNode(true));
        
     
    }
 
    spinnerWheel(){
        this.spinWheel=!this.spinWheel;
        let winner=this.shadowRoot.querySelector("#winner");
        let mainbox=this.shadowRoot.querySelector('.mainbox');    
        let spin = document.querySelector(".spin");
        mainbox.style.transition="5s"
        let rotateSpin= Math.ceil(Math.random()*1000);
         mainbox.style.transform = "rotate(" + rotateSpin+ "deg)";
         let remainder= rotateSpin %360 ;
         const timer = setTimeout(() => {
                mainbox.style.transition="0s"
                if(remainder<=22.5){
                    winner.innerHTML="you win One"
                alert("You Win One");
                }
                if(remainder > 22.5 && remainder<=67.5){
                    winner.innerHTML="you win Eight"
                         alert("You Win Eight")
                }
                if(remainder>67.5 && remainder<=112.5){
                    winner.innerHTML="you win Seven"

                        alert("You Win Seven")
                 }
                 if(remainder>112.5 && remainder<=157.5){
                    winner.innerHTML="you win Six"

                    alert("You Win Six")
                }
             if(remainder>157.5 && remainder<=202.5){
                winner.innerHTML="you win Five"

                alert("You Win Five")
               }
               if(remainder>202.5 && remainder<=247.5){
                winner.innerHTML="you win Four"

                alert("You Win Four")
               }
               if(remainder>247.5 && remainder<=292.5){
                winner.innerHTML="you win Three"

                alert("You Win Three")
               }
               if(remainder>292.5 && remainder<=337.5){
                winner.innerHTML="you win Two"

                alert("You Win Two")
               }
               if(remainder>337.5 && remainder<360){
                winner.innerHTML="you win One"

                alert("You Win One")
               }
                 mainbox.style.transform="rotate(0deg)";

              }, 5500);
        
    }
    
    
    connectedCallback(){
        this.shadowRoot.querySelector("#spin").addEventListener('click',()=>this.spinnerWheel());



    }
    disconnectedCallback(){
        this.shadowRoot.querySelector("#spin").removeEventListener();
    }
}

window.customElements.define("spin-wheel", SpinWheel);
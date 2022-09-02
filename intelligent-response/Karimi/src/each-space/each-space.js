import './each-space.scss';

// class HelloWorldButton {
//     buttonCssClass = 'hello-world-button';

//     render() {
//         const button = document.createElement('button');
//         const body = document.querySelector('body');
//         button.innerHTML = 'Hello world';
//         button.onclick = function () {
//             const p = document.createElement('p');
//             p.innerHTML = 'Hello world';
//             p.classList.add('hello-world-text');
//             body.appendChild(p);
//         }
//         button.classList.add(this.buttonCssClass);
//         body.appendChild(button);
//     }
// }

// export default HelloWorldButton;

const template =document.createElement('template');
template.innerHTML=`



<div>
<h3></h3>

</div>
`;

export class EachSpace extends HTMLElement{
    constructor(){
        super();
        this.attachShadow({mode:'open'});
        this.shadowRoot.appendChild(template.content.cloneNode(true));
        // this.shadowRoot.querySelector("h3").innerText=this.getAttribute('name');
       
   
     
    }
    // toggleInfo(){
    //     console.log(this.shadowRoot.querySelector(".box1").innerHTML);
    // }
    // connectedCallback(){
    //     this.shadowRoot.querySelector("#spin").addEventListener('click',()=>this.toggleInfo());

    // }
    // disconnectedCallback(){
    //     this.shadowRoot.querySelector("#spin").removeEventListener();

    // }
}
import "./buttom.js"
const template= document.createElement('template')
template.innerHTML =
`<link href="./dev/app.css" rel="stylesheet">
 <div class="out">
 <p class="equation"></p>
 <p class="Answer"></p>
 </div>

`;

class Displayed extends HTMLElement{
    constructor(){
        super();
        this.attachShadow({mode:'open'});
        this.shadowRoot.appendChild(template.content.cloneNode(true));
    }

    static get observedAttributes() {
      return ["equ","res"];
    }


    attributeChangedCallback(attrName, oldVal, newVal) {
        if (attrName === "equ") {
          this.shadowRoot.querySelector(".equation").innerHTML = newVal;
        }
        if(attrName === "res"){
          this.shadowRoot.querySelector(".Answer").innerHTML = newVal;
        }
      }




}

window.customElements.define("my-display",Displayed)
import "./buttom.js"

const template= document.createElement('template')
template.innerHTML =
`<link href="./dev/app.css" rel="stylesheet">
 <div id="history">
    <ul id="history--ul"></ul>
 </div>

`;

class Hist extends HTMLElement{
    constructor(){
        super();
        let val;
        this.attachShadow({mode:'open'});
        this.shadowRoot.appendChild(template.content.cloneNode(true));
        this.handlerhistory=this.handlerhistory.bind(this)
    }

    static get observedAttributes() {
      return ["class"];
    }

      connectedCallback(){
        window.addEventListener('history',this.handlerhistory,false);

     }
     attributeChangedCallback(attrName, oldVal, newVal) {
      if (attrName === "class") {
        this.shadowRoot.querySelector("#history").setAttribute("class",newVal);
      }
    }


     handlerhistory(event){
      let res=event.detail.history1;
      let equation=event.detail.history2;
      if(equation.toString().length >= 12){
        this.val=equation;
        equation=equation.toString().slice(0,12)+"...";
        console.log(this.val)
      }
      // let obj={equation,res}
      // console.log(obj)
      var z = document.createElement('li'); 
      z.innerHTML = `<span class="my-history--span">${equation}</span> = <span class="my-history--span">${res}</span>`;
      this.shadowRoot.querySelector('#history--ul').appendChild(z)

  }

  disconnectedCallback() {
    window.removeEventListener('history',this.handlerhistory,false);

  }



}

window.customElements.define("my-history",Hist)
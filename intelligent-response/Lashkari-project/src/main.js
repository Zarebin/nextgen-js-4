import "./style.scss"
import "./components/buttom.js"
import "./components/display.js"
import { addEvent, hist } from "./components/utilities"
import "./components/historyhandler.js"
import "./components/buttons"


const template= document.createElement('template')
template.innerHTML =
`<link href="./dev/app.css" rel="stylesheet">
  <div id="calculator" style="margin:0 auto ;width: 400px;">
  <span><svg id="history-icon"style="width: 22px;height: 22px; position: absolute;left: 15px;top: 5px;" focusable="false" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M13 3a9 9 0 0 0-9 9H1l3.89 3.89.07.14L9 12H6c0-3.87 3.13-7 7-7s7 3.13 7 7-3.13 7-7 7c-1.93 0-3.68-.79-4.94-2.06l-1.42 1.42A8.954 8.954 0 0 0 13 21a9 9 0 0 0 0-18zm-1 5v5l4.28 2.54.72-1.21-3.5-2.08V8H12z"></path></svg></span>
  <my-display></my-display>
  <my-history class="notHistory"></my-history>
  <my-buttons><my-buttons>
  </div>
`;


class Farshad extends HTMLElement{
    constructor(){
        super();
        this.attachShadow({mode:'open'});
        this.shadowRoot.appendChild(template.content.cloneNode(true));

        this.handler=this.handler.bind(this)
        this.handlehistory=this.handlehistory.bind(this)
       
    }
    connectedCallback(){
        window.addEventListener('output',this.handler,false);
        this.shadowRoot.querySelector("#history-icon").addEventListener('click',this.handlehistory,false);
    }
    handlehistory(){
        try{
            if(this.shadowRoot.querySelector('my-history').getAttribute('class')=="notHistory"){
                    this.shadowRoot.querySelector('my-history').removeAttribute("class")
                    this.shadowRoot.querySelector('my-history').setAttribute('class','yesHistory')
        
                    }else{
                        this.shadowRoot.querySelector('my-history').removeAttribute("class")
                        this.shadowRoot.querySelector('my-history').setAttribute('class','notHistory')
                    }
        }
        catch(e){
        }
        }
    

    handler(event){
        let value=event.detail.value;
        let res=event.detail.res;
        this.shadowRoot.querySelector('my-display').setAttribute("equ",value)
        this.shadowRoot.querySelector('my-display').setAttribute("res",res)
    }


    disconnectedCallback() {
        window.removeEventListener("output", this.handler,false);
        this.shadowRoot.querySelector("#history-icon").removeEventListener('click',this.handlehistory,false);

      }

}

window.customElements.define("my-main",Farshad)
    
    



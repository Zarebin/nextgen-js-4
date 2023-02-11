import "./buttom.js"
const template= document.createElement('template')
template.innerHTML =
`<link href="./dev/app.css" rel="stylesheet">
<span id="num"></span>
<span id="res"></span>
<form style="width: 100%;">
<input class="output" id="output" type="text" value="" >
</form>

<div class="grid-container">
<my-buttom className="grid-item operator" sign="("></my-buttom>
<my-buttom className="grid-item operator" sign=")"></my-buttom>
<my-buttom className="grid-item operator" sign="CE"></my-buttom>
<my-buttom className="grid-item operator" sign="AC"></my-buttom>
</div>
<div class="grid-container">
<my-buttom className="grid-item digit" sign="7"></my-buttom>
<my-buttom className="grid-item digit" sign="8"></my-buttom>
<my-buttom className="grid-item digit" sign="9"></my-buttom>
<my-buttom className="grid-item operator" sign="/"></my-buttom>
</div>
<div class="grid-container">
<my-buttom className="grid-item digit" sign="4"></my-buttom>
<my-buttom className="grid-item digit" sign="5"></my-buttom>
<my-buttom className="grid-item digit"  sign="6"></my-buttom>
<my-buttom className="grid-item operator" sign="x"></my-buttom>
</div>
<div class="grid-container">
<my-buttom className="grid-item digit" sign="1"></my-buttom>
<my-buttom className="grid-item digit" sign="2"></my-buttom>
<my-buttom className="grid-item digit" sign="3"></my-buttom>
<my-buttom className="grid-item operator" sign="-"></my-buttom>
</div>
<div class="grid-container">
<my-buttom className="grid-item digit" sign="0"></my-buttom>
<my-buttom className="grid-item digit" sign="."></my-buttom>
<my-buttom className="grid-item equal" sign="="></my-buttom>
<my-buttom className="grid-item operator" sign="+"></my-buttom>
</div>

`;

class Buttons extends HTMLElement{
    constructor(){
        super();
        this.attachShadow({mode:'open'});
        this.shadowRoot.appendChild(template.content.cloneNode(true));
    }

}

window.customElements.define("my-buttons",Buttons)
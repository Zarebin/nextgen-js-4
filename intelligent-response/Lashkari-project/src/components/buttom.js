import {addEvent , hist} from "./utilities";
const template= document.createElement('template')
template.innerHTML =
`<link href="./dev/app.css" rel="stylesheet">
  <div id="wrapper">
  </div>

`;

let out = document.getElementById("output");
let num = document.getElementById("num").innerHTML;
let res = document.getElementById("res")
let pointchecker=false;


 class Calculator extends HTMLElement{
  constructor(){
     super();
     this.res="";
     this.hist="";
     this.attachShadow({mode:'open'});
     this.shadowRoot.appendChild(template.content.cloneNode(true));
     this.shadowRoot.querySelector('#wrapper').innerHTML = this.getAttribute("sign");
     this.equal=this.equal.bind(this)
     let putId= this.shadowRoot.querySelector("#wrapper");
     putId.setAttribute("class",this.getAttribute("className"));
     
  }

  equal (){
    try{
      this.res=out.value;
       out.value = eval(out.value);
       addEvent(this.res,out.value);
       this.hist=eval(out.value);
       hist(this.hist,this.res)
    }
    catch(e){
      out.value=out.value;
    }

    
  }

  add (){
        let val = out.value;
        val = val + this.getAttribute("sign");
        out.value=val;
        num=val;
        addEvent(out.value,this.res);
  }
  point (){
    if(!pointchecker){
      out.value=out.value+".";
      pointchecker=true
      num=num+".";
      addEvent(out.value,this.res);
    }else{
      out.value=out.value;
    }
    
  }

  operate(bt){
    let oper=out.value[out.value.length-1];
    if (oper !== bt && oper!== "/" && oper!=="*" && oper!=="+" && oper!=="-"){
      if(bt==="x"){
        out.value=out.value+"*";
        pointchecker=false
        addEvent(out.value,this.res);
      }else{
      out.value=out.value+bt;
      pointchecker=false;
      addEvent(out.value,this.res);
    }
  }
    
  }

  clear(){
    out.value="";
    addEvent(out.value,this.res);
  }

  clearlastelement(){
    if (out.value!=""){
      // if(out.value.slice(-1)==="*" && out.value.slice(-1)==="+" && out.value.slice(-1)==="-" && out.value.slice(-1)==="/"){
      //   this.pointchecker=true;
      // }
     let deleted= out.value.slice(0, out.value.length - 1);
     out.value=deleted;
     addEvent(out.value,this.res);
    }
    
  }
 
  connectedCallback(){
    this.shadowRoot.querySelector("#wrapper").addEventListener('click',() =>{
        let but = this.getAttribute("sign")
        switch(but) {
          case "=":
             this.equal();
            break;
            case "1":
            case "2":
            case "3":
            case "4":
            case "5":
            case "6":
            case "7":
            case "8":
            case "9":
            case "0":
            case "(":
            case ")":
             this.add();
            break;
            case ".":
              this.point();
            break;
            case "+":
            case "-":
            case "/":
            case "x":          
              this.operate(but);
            break;
            case "CE":
              this.clearlastelement();
            break;
            case "AC":
              this.clear();
          // default:
            
        }
    })
  }

}


window.customElements.define('my-buttom', Calculator)



class App extends HTMLElement{
    constructor(){
        super();
        this.attachShadow({mode:"open"});
        const template = document.getElementById('app-container-template');
        const {shadowRoot} = this ;
        if(template){
            shadowRoot.appendChild(template.content.cloneNode(true))
        }else{
            shadowRoot.innerHTML = "<p>not existed</p>"
        }
    }

    connectedCallback() {
        //this.render()
      }
      static get observedAttributes() {
        return ['appvalue'];
      }
      attributeChangedCallback(property, oldValue, newValue){
        if(oldValue!==newValue)
        this[property]= newValue
      }
      get appvalue(){
            return this.getAttribute('appvalue')
      }
      set appvalue(v){
            if(v){
                this.setAttribute('appvalue' , v)
            }else{
                this.removeAttribute('appvalue')
            }
      }
    render(){
        
       
        console.log(template)
        shadowRoot.innerHTML = '';
  
    }
}
export default App
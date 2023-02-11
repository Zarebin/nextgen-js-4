import tinycolor from "../functions/color";
class Holder extends HTMLElement{
    constructor(){
        super();
        this.attachShadow({mode:'open'})
        this.value
    }
    connectedCallback(){
        this.render();
    }
    static get observedAttributes() {
        return ['value'];
      }
      attributeChangedCallback(property, oldValue, newValue){
        if(oldValue!==newValue)
        this[property]= newValue
        this.shadowRoot.innerHTML=''
        this.render()
      }
      get value(){
            return this.getAttribute('value')
      }
      set value(v){
            if(v){
                this.setAttribute('value' , v)
            }else{
                this.removeAttribute('value')
            }
      }
    render(){
        const {shadowRoot} = this ;
        const template = document.getElementById('color-value');
        shadowRoot.innerHTML = '';
        if(template){
            const instance = template.content.cloneNode(true);
            shadowRoot.appendChild(instance)
            
            var input = shadowRoot.getElementById('valueholder')
            input.value = this['value']        
            
        }else{
            shadowRoot.innerHTML = "<p>not existed</p>"
        }

    }
}
customElements.define("my-holder",Holder)
export default Holder;
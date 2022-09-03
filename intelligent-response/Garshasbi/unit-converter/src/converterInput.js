const template = document.createElement('template');
template.innerHTML = `
    <style></style>
    <form name="form_A" onSubmit="return false">
        <input type="text" class="numbersonly form-control" name="unit_input" maxlength="20" value="0" onKeyUp="CalculateUnit(document.form_A, document.form_B)">

        <span>
            <select name="unit_menu" class="form-control" onChange="CalculateUnit(document.form_B, document.form_A)">
            </select>
        </span>
    </form>


`
export class UnitConverter extends HTMLElement {
    // static get observedAttributes() {
    //     return ['name'];
    // }
    constructor(){
        super();
        this.attachShadow({mode:'open'});
        this.shadowRoot.appendChild(template.content.cloneNode(true)); 
        
    }

//     attributeChangedCallback(name, oldValue, newValue) {
//         if (name == 'name') {
//             this.shadowRoot.querySelector('unit_menu').options = newValue
//     }
// }

    connectedCallback(){
        
    }
}

// window.customElements.define('converter-input' , UnitConverter);

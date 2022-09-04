import './style.scss';
import './converterInput.scss';

let measureList = ["Length", "Light"];

const mainForm = document.querySelector('.select-property');

mainForm.length = measureList.length;
for (let i = 0; i < measureList.length; i++) {
    mainForm.options[i].text = measureList[i];
}

mainForm.addEventListener('change', () => {
    let i = mainForm.selectedIndex;

    document.querySelectorAll('converter-input').forEach((item) => {
        item.setAttribute('unit', i);
    })
})
var leftUnit = 0;
var leftInput = 0;
var resultLeft = 0;

var rightUnit = 0;
var rightInput = 0;
var resultRight = 0;

window.addEventListener('left-reCalculate' , reCalculateLeft , false);
window.addEventListener('right-reCalculate' , reCalculateRight , false);

function reCalculateLeft(event){
    leftUnit = event.detail.unit;
    leftInput = Number(event.detail.val);
    resultLeft = leftInput * leftUnit;
    document.getElementById('left').setAttribute('resultLeft' , resultLeft);
    // calculate(leftUnit , leftInput , rightUnit);
}

function reCalculateRight(event){
    rightUnit = event.detail.unit;
    rightInput = Number(event.detail.val);
    resultRight = rightUnit * rightInput;
    document.getElementById('right').setAttribute('resultRight' , resultRight)
    // calculate(rightUnit , rightInput , leftUnit);
}

// function calculate(sourceUnit , sourceInput , targetUnit){
//     let result = sourceUnit * sourceInput;
//     let mainResult = result / targetUnit
//     console.log(mainResult)
// }


//--------------------------------------------------------------------------------------------------

export class UnitConverter extends HTMLElement {
    componentPrefix = '';
    listenTo = '';
    unitObj = [
        {
            unit: ["Meter (m)", "Angstrom (A')", "Astronomical unit (AU)", "Caliber (cal)", "Centimeter (cm)", "Kilometer (km)", "Ell", "Em", "Fathom", "Furlong", "Fermi (fm)", "Foot (ft)", "Inch (in)", "League (int'l)", "League (UK)", "Light year (LY)", "Micrometer (mu-m)", "Mil", "Millimeter (mm)", "Nanometer (nm)", "Mile (int'l nautical)", "Mile (UK nautical)", "Mile (US nautical)", "Mile (US statute)", "Parsec", "Pica (printer)", "Picometer (pm)", "Point (pt)", "Rod", "Yard (yd)"],
            factor: [1, 1E-10, 1.49598E11, .000254, .01, 1000, 1.143, 4.2323E-03, 1.8288, 201.168, 1E-15, .3048, .0254, 5556, 5556, 9.46055E+15, .000001, .0000254, .001, 1E-9, 1852, 1853.184, 1852, 1609.344, 3.08374E+16, 4.217518E-03, 1E-12, .0003514598, 5.0292, .9144]
        },
        {
            unit: ["Lumen/sq.meter (Lu/m^2)", "Lumen/sq.centimeter", "Lumen/sq.foot", "Foot-candle (ft-cdl)", "Foot-lambert", "Candela/sq.meter", "Candela/sq.centimeter", "Lux (lux)", "Phot"],
            factor: [1, 10000, 10.76391, 10.76391, 10.76391, 3.14159250538575, 31415.9250538576, 1, 10000]
        }
    ];

    static get observedAttributes() {
        return ['unit' , 'resultLeft' , 'resultRight'];
    }

    constructor() {
        super();
        this.componentPrefix = this.attributes.name.value;
        this.listenTo = this.attributes.listenTo.value;
        const template = document.createElement('template');
        template.innerHTML = `
            <link rel="stylesheet" href="./dist/styles.css">

            <form class="unitForm" id="${this.componentPrefix}-form" onSubmit="return false">
                <input type="number" id="${this.componentPrefix}-input" class="inputUnic numbersonly form-control" name="unit_input" maxlength="20" value="0">

                <span style="width:100%">
                    <select id="${this.componentPrefix}-select" name="unit_menu" class="select-unit form-control">
                    </select>
                </span>
            </form>
        `

        this.attachShadow({ mode: 'open' });
        this.shadowRoot.appendChild(template.content.cloneNode(true));

        this.shadowRoot.getElementById(this.componentPrefix + '-input').addEventListener('keyup', () => {
            let measureIndex = this.attributes.unit.value;
            let SelectedIndex = this.shadowRoot.getElementById(this.componentPrefix + '-select').selectedIndex;

            let event = (new CustomEvent(this.componentPrefix + "-reCalculate" , {
                detail:{
                    unit: this.unitObj[measureIndex].factor[SelectedIndex],
                    val: this.shadowRoot.getElementById(this.componentPrefix + '-input').value
                },
                bubbles:true
            }));
            this.dispatchEvent(event)
        });

        // this.addEventListener(this.listenTo + "-reCalculate", (e) => {
        //     console.log('From ' + this.listenTo + e.detail.unit);
        // });
    }// end constructor


    attributeChangedCallback(name, oldValue, newValue) {
        if (name === 'unit') {
            let unitArr = this.unitObj[this.attributes.unit.value].unit;
            let selectUnit = this.shadowRoot.querySelector('.select-unit')
            for (let i = 0; i < unitArr.length; i++) {
                selectUnit.length = unitArr.length
                selectUnit.options[i].text = unitArr[i];
            }
        }
        if(name === 'resultRight'){
            console.log(this.attributes.resultRight)
        }
        if(name === 'resultLeft'){
            console.log(this.attributes.resultLeft)
        }
    }//end attributeChangedCallback

    connectedCallback() {
    }
}

window.customElements.define('converter-input', UnitConverter);


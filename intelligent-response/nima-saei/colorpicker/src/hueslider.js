import tinycolor from "../functions/color";
class HueSlider extends HTMLElement{
    constructor(){
        super();
        this.attachShadow({mode:'open'});
    }
    connectedCallback() {
        this.render()
        
      }
      static get observedAttributes() {
        return ['color'];
      }
      attributeChangedCallback(property, oldValue, newValue){
        if(oldValue!==newValue)
        this[property]= newValue
      }
      getcolorvalue(){
            return this.getAttribute('color')
      }
      setcolorvalue(v){
            if(v){
                this.setAttribute('color' , v)
            }else{
                this.removeAttribute('color')
            }
      }
    render(){
        const {shadowRoot} = this ;
        const template = document.getElementById('hueslider__template');
        shadowRoot.innerHTML = '';
        if(template){
            const instance = template.content.cloneNode(true);
            shadowRoot.appendChild(instance)

            var hue = 0;
            var saturation = 1;
            var lightness = .5;
            var hueCanvas = shadowRoot.getElementById('hue-canvas');
            var hueCtx = hueCanvas.getContext('2d');
            var hueCursor = shadowRoot.getElementById('hue-cursor');
            var hueCursorHolder = shadowRoot.getElementById('hue-cursor__btnholder');
            var hueRect = hueCanvas.getBoundingClientRect();
            var currentColor = '';
                createHueSpectrum( )
                this.setcolorvalue(currentColor)
               

            function createHueSpectrum() {
                var canvas = hueCanvas;
                var ctx = hueCtx;
                var hueGradient = ctx.createLinearGradient(0, 0, canvas.width,0) ;
                hueGradient.addColorStop(0.00, "hsl(0, 100%, 50%)");
                hueGradient.addColorStop(0.17, "hsl(298.8, 100%, 50%)");
                hueGradient.addColorStop(0.33, "hsl(241.2, 100%, 50%)");
                hueGradient.addColorStop(0.50, "hsl(180, 100%, 50%)");
                hueGradient.addColorStop(0.67, "hsl(118.8, 100%, 50%)");
                hueGradient.addColorStop(0.83, "hsl(61.2, 100%, 50%)");
                hueGradient.addColorStop(1.00, "hsl(360, 100%, 50%)");
                ctx.fillStyle = hueGradient;
                ctx.fillRect(0, 0, canvas.width, canvas.height);
                canvas.addEventListener('mousedown', function(e) {
                  startGetHueColor(e);
                });
              };

              function updateHueCursor(x) {
                hueCursor.style.left = x + "px";
                //hueCursorHolder.style.left = x + "px";
              }
              function startGetHueColor(e) {
                getHueColor(e);
                hueCursor.classList.add('dragging');
                window.addEventListener('mousemove', getHueColor);
                window.addEventListener('mouseup', endGetHueColor);
              }
              function getHueColor(e) {
                e.preventDefault();
                
                var x = e.pageX - hueRect.left;
                if (x > hueRect.width){ x = hueRect.width};
                if (x < 0) { x = 0};
                var percent = x / hueRect.width;
                hue = 360 - (360 * percent);
                var hueColor = tinycolor('hsl ' + hue + ' 1 .5').toHslString();
                var color = tinycolor('hsl ' + hue + ' ' + saturation + ' ' + lightness).toHslString();
                var colorpalette=document.getElementById("my-colorpalette")
                colorpalette.setAttribute('color',hueColor)
                var holder = document.getElementById('val-holder')
                holder.setAttribute('value', color)
                updateHueCursor(x);
                setCurrentColor(color);
                //setColorValues(color);
              };
              function setCurrentColor(color) {
                color = tinycolor(color);
                currentColor = color.toHslString()
                //console.log(color , currentColor)
                hueCursor.style.backgroundColor = 'hsl(' + color.toHsl().h +',100%, 50%)';
              };
              function endGetHueColor(e) {
                hueCursor.classList.remove('dragging');
                window.removeEventListener('mousemove', getHueColor);
                //console.log("our current color is :",currentColor);
                  
              };
            
        }else{
            shadowRoot.innerHTML = "<p>not existed</p>"
        }   
    }
 

}

export default HueSlider
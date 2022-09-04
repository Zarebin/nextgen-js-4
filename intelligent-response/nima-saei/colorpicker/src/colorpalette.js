import tinycolor from "../functions/color";

class ColorPalette extends HTMLElement{
    constructor(){
        super();
        this.color
        this.attachShadow({mode:'open'})

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
      this.shadowRoot.innerHTML = ``
      this.render()
    }
    get huevalue(){
          return this.getAttribute('color')
    }
    set huevalue(v){
          if(v){
              this.setAttribute('color' , v)
          }else{
              this.removeAttribute('color')
          }
    }
    render(){
      const {shadowRoot} = this;
      const template = document.getElementById('colorpalette');
      if(template){
        const instance = template.content.cloneNode(true);
        shadowRoot.appendChild(instance)

      var spectrumCanvas= shadowRoot.getElementById('spectrum-canvas');
      var spectrumCtx = spectrumCanvas.getContext('2d');
      var spectrumCursor = shadowRoot.getElementById('spectrum-cursor');
      var spectrumRect =spectrumCanvas.getBoundingClientRect();
      var hue = 0;
      var saturation = 1;
      var lightness = .5;
      createShadeSpectrum(this['color']);

      function createShadeSpectrum(color){
        var canvas = spectrumCanvas;
        var ctx = spectrumCtx;
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        
        if(!color) color = '#f00';
        ctx.fillStyle = color;
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        
        var whiteGradient = ctx.createLinearGradient(0, 0, canvas.width, 0);
        whiteGradient.addColorStop(0, "#fff");
        whiteGradient.addColorStop(1, "transparent");
        ctx.fillStyle = whiteGradient;
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        
        var blackGradient = ctx.createLinearGradient(0, 0, 0, canvas.height);
        blackGradient.addColorStop(0, "transparent");
        blackGradient.addColorStop(1, "#000");
        ctx.fillStyle = blackGradient;
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        
        canvas.addEventListener('mousedown', function(e) {
          startGetSpectrumColor(e);
      })
      };

      function getSpectrumColor(e){
        e.preventDefault();
        
        var x = e.pageX - spectrumRect.left;
        var y = e.pageY - spectrumRect.top;
        
        if(x > spectrumRect.width) {x = spectrumRect.width}
        if(x < 0) {x = 0}
        if(y > spectrumRect.height) {y = spectrumRect.height}
        if(y < 0) {y = .1}
        
        var xRatio = x / spectrumRect.width * 100;
        var yRatio = y / spectrumRect.height * 100;
        var hsvValue = 1 - (yRatio / 100);
        var hsvSaturation = xRatio / 100;
        lightness = (hsvValue / 2) * (2 - hsvSaturation);
        saturation = (hsvValue * hsvSaturation) / (1 - Math.abs(2 * lightness -1));
        var color = tinycolor('hsl ' + hue + ' ' + saturation + ' ' + lightness);
        setCurrentColor(color);
        updateSpectrumCursor(x, y);
      };
     function updateSpectrumCursor (x, y){
        spectrumCursor.style.left = x + 'px';
        spectrumCursor.style.top = y + 'px';
      };
      
     function startGetSpectrumColor(e){
        getSpectrumColor(e);
        spectrumCursor.classList.add('dragging');
        window.addEventListener('mousemove', getSpectrumColor);
        window.addEventListener('mouseup', endGetSpectrumColor(e));
      };
      function endGetSpectrumColor (e) {
        spectrumCursor.classList.remove('dragging');
        window.removeEventListener('mousemove', getSpectrumColor(e));
        console.log('finished')
      };
      function setCurrentColor(color) {
        color = tinycolor(color);
        //colorIndicator.style.backgroundColor = color;
        spectrumCursor.style.backgroundColor = color;
  }
      }
      else{
        this.shadowRoot.innerHTML= `<p> not existed </p>`
      }
    }

   
}
//window.customElements.define("my-colorpalette",ColorPalette);
export default ColorPalette
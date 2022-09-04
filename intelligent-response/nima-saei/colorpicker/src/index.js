import "./styles/main.scss";
import HueSlider from "./hueslider";
import Holder from "./holder";
import App from "./app";
import ColorPalette from "./colorpalette";

//my templates
const template = `
<template id="app-container-template">
<div id="myApp">
<slot/>
</div>
</template>
`

const sliderTemplate = /* html */ `
<template id="hueslider__template">
<style>
.panel-row{
  background: #1f232a;
  width: 310px;
  border-radius: 8px;
  border: 2px solid #364347;
  box-shadow: 0 4px 12px rgba(0, 0, 0, .4);
  position: absolute;
}
.hue-map {
  margin: 0 16px 0 16px;
  min-width: 100px;
  position: relative;
  height: 52px;
  display: block;
}
.hue-map__content{
  display: flex;
  flex-direction: row;
}
#hue-canvas {
  border-radius: 20px;
  position: absolute;
  top: 21px;
  height: 8px;
  width: 100%;
  background: #ccc;
}
.color-cursor {
  border-radius: 100%;
  background: #ccc;
  box-sizing: border-box;
  position: absolute;
  pointer-events: none;
  z-index: 2;
  border: 2px solid #fff;
  transition: all 0.2s ease;
}
.color-cursor.dragging {
  transition: none;
}
.hue-cursor__btnholder{
  position: relative;
    top: 14px;
    height: 20px;
    width: 1px;
    cursor: pointer;
    left:0;
}
.color-cursor#hue-cursor{
  position: absolute;
  height: 20px;
  width: 20px;
  left: -10px;
  border: 2px white solid;
  /* border-radius: 22px; */
  border-radius: 50%;
  z-index: 10;
  background-color: #4487f6;
}
</style>
<div class="panel-row">
  <div class="hue-map">
    <div class="hue-map__content">
      <div class="hue-cursor__btnholder" id="hue-cursor__btnholder">
        <button id="hue-cursor" class="color-cursor"></button>
      </div>
      <canvas id="hue-canvas"></canvas>
    </div>
  </div>
</div>
</template>
`;

const colorvalueTemplate = `
<template id="color-value">
<span class="value-holder__container" id="valueholder__container">
  <input type="text" class="value-holder__input" id="valueholder"/>
</span>
</template>
`
const colorPaletteTemplate = `
<template id="colorpalette">
<style>
.color-cursor {
  border-radius: 100%;
  background: #ccc;
  box-sizing: border-box;
  position: absolute;
  pointer-events: none;
  z-index: 2;
  border: 2px solid #fff;
  transition: all 0.2s ease;
}
.color-cursor.dragging {
  transition: none;
}
.color-cursor#spectrum-cursor {
  width: 30px;
  height: 30px;
  margin-left:- 15px;
  margin-top: - 15px;
  top: 0;
  left: 0;
}
.spectrum-map {
  position: relative;
  width: 212px;
  height: 200px;
  overflow: hidden;
}
#spectrum-canvas {
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: #ccc;
}
</style>
  <div class="spectrum-map">
    <button id="spectrum-cursor" class="color-cursor" ></button>
    <canvas id="spectrum-canvas"></canvas>
  </div>
  <!-- <span id="color-indicator" class="color-indicator"></span>-->
</template>
`
//register components
customElements.define('my-slider', HueSlider);
//customElements.define("my-holder",Holder);
customElements.define("my-colorpalette",ColorPalette);
customElements.define("my-app",App);



// root.attachShadow({mode:'open'})

// attach templates to the dom
const root = document.getElementById('root');
document.body.appendChild(root);
const attachTemplate = (elem,temp) =>{
  elem.innerHTML += temp
}
attachTemplate(root,template);
attachTemplate(root,sliderTemplate);
attachTemplate(root,colorvalueTemplate);
attachTemplate(root,colorPaletteTemplate)

//append components



    


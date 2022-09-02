import Kiwi from './Kiwi.png';

function addImage() {
    const img = document.createElement('img');
    img.alt = 'Kiwi';
    img.width = '458';
    img.src = Kiwi;

    const body = document.querySelector('body');
    body.appendChild(img);
}

export default addImage;

const wavesContainer = document.getElementById('waves');
const miParrafo = document.getElementById('miParrafo');
const miH2 = document.getElementById('miH2');
const miImg = document.getElementById('miImg');

function createWave(x, y) {
    const wave = document.createElement('div');
    wave.className = 'wave';
    wave.style.left = `${x}px`;
    wave.style.top = `${y}px`;
    wavesContainer.appendChild(wave);

    setTimeout(() => {
        wave.remove();
    }, 2000);
}

document.addEventListener('mousemove', (event) => {
    const { clientX: x, clientY: y } = event;
    createWave(x, y);
});

document.addEventListener('mouseover',(event)=>{
    if(event.target.matches('#miParrafo')){
        miParrafo.classList.add('visible');
    }
    if(event.target.matches('#miH2')){
        miH2.classList.add('visible');
    }
    if(event.target.matches('#miImg')){
        miImg.classList.add('visible');
    }

});
const sonic = document.querySelector('.sonic');
const bullet = document.querySelector('.bullet');
const robotinik = document.querySelector('.robotinik')
const tela = document.querySelector('.tela')
const bat = document.querySelector('.bat')
const button = document.querySelector('button')
const audio = new Audio('vasco-da-gama.mp3')    

function reproduzirAudio()
{
    audio.play()
}
const up = () => {
    sonic.classList.add('up');

    setTimeout(() =>{
        sonic.classList.remove('up')
    },500);
}

const loop = setInterval(() =>{
    const bulletPosition = bullet.offsetLeft;
    const batPosition = bat.offsetLeft
    const sonicPosition = +window.getComputedStyle(sonic).bottom.replace('px', '')

    console.log(bulletPosition);
    console.log(batPosition);

    
    if (bulletPosition < 100 && bulletPosition > 0 && sonicPosition < 80){

        bullet.style.animation = 'none';
        bullet.style.left = `${bulletPosition}px`;
        sonic.style.animation = 'none';
        sonic.style.bottom = `${sonicPosition}px`;
        sonic.src='sonic-stop.png';
        reproduzirAudio();
        robotinik.src='pngegg (1).png';
        audio.play(AudioListener);
        tela.style.background  = "url(vasco-da-gama-logo-2021.svg) no-repeat  center ";
    }
    /*if (batPosition < 100 && batPosition > 0 && sonicPosition < 80){    
        
        bullet.style.animation = 'none';
        bullet.style.left = `${bulletPosition}px`;
        bat.style.animation = 'none'
        bat.style.left = `${batPosition}px`
        sonic.style.animation = 'none';
        sonic.style.bottom = `${sonicPosition}px`;
        sonic.src='sonic-stop.png';
        reproduzirAudio();
        audio.play(AudioListener);
        tela.style.background  = "url(vasco-da-gama-logo-2021.svg) no-repeat  center ";
    }*/

}, 10);

document.addEventListener('keydown', up)
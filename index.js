const button = document.querySelector('.btn_first');
const nightback = document.querySelector('.night');
const zodiaclogo = document.querySelector('.zodiac');
const images = document.querySelector('.carousel');
button.addEventListener('click', function(){
    nightback.style.display = 'none';
    zodiaclogo.style.display = 'none';
    button.style.display = 'none';
    images.style.display = 'block';
})



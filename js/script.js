let message = document.querySelector('.message-container');
let mail = document.querySelector('.mail-message ');
let container = document.querySelector('.container');
let close = document.querySelector('.close');
let text_message = document.querySelector('.message-text');
let back_audio = new Audio('music/back-music.mp3');
let counter = document.querySelector('.counter');
mail.addEventListener('click', () => {
    message.style.display = 'block';
    document.body.style.overflowY = 'hidden';
    typeTitle();
    
})

close.addEventListener('click',() => {
    message.style.display = 'none';
    document.body.style.overflowY = 'auto';
    
});

function typeTitle() {
    let text = 'Selamat ulang tahung yang ke -19, semoga sehat selalu dan diberi kesehataan lahir batih ';
    let count = 0;

   setInterval(() => {
    if(count < text.length){
            text_message.innerHTML += text.charAt(count);
            count++;
            
        }
    else {
        clearTimeout;
    }
   }, 50);
    
}


function count () {
    let counts = 15;
   
    setInterval(() => {
        if(counts >= 0){
            counter.innerHTML = counts;
            counts--;
            
    }else {
            clearInterval;
            back_audio.play();
            document.querySelector('header').style.display = 'none';
            container.style.display = 'block';
            
        }
    },1000)
}

count()







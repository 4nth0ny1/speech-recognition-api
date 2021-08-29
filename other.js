const texts = document.querySelector('.texts');
const startAudio = document.querySelector('.start-audio');
const stopAudio = document.querySelector('.stop-audio');



startAudio.addEventListener('click', () => {
    

    window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

    const recognition = new SpeechRecognition();
    recognition.interimResults = true;

    let p = document.createElement('p');

    recognition.addEventListener('result', (e)=>{
    texts.appendChild(p);
    const text = Array.from(e.results)
        .map(result => result[0])
        .map(result => result.transcript)
        .join('');

    p.innerText = text;

    });
    recognition.start()
})

stopAudio.addEventListener('click', () => {
    p = document.createElement('p')
    texts.appendChild(p)
    
})
const btn = document.querySelector('.mow');
const content = document.querySelector('.content');

// Odpowiedzi
const corobisz = ['niech gówno cie to obchodzi.', 'a ty?', 'nic', 'z wielką chęcią słucham ciebie.'];

//

const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
const recognition = new SpeechRecognition();

recognition.onstart = function(){
    console.log('Jestem gotowy, możesz mówić do mikrofonu.');
};

recognition.onresult = function(event){
    const current = event.resultIndex;
    const transcript = event.results[current][0].transcript;
    content.textContent = transcript;
    readOutLoud(transcript);
}

btn.addEventListener('click', () => {
    recognition.start();
});

function readOutLoud(message){
    const speech = new SpeechSynthesisUtterance();
    speech.text = message;

    //pytania
    if(message.includes('co robisz')){
        const finalText = corobisz[Math.floor(Math.random() * corobisz.length)];
        speech.text = finalText;
    }

    //


    speech.volume = 1;
    speech.rate = 1;
    speech.pitch = 1;
    window.speechSynthesis.speak(speech);
}

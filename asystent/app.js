const btn = document.querySelector('.mow');
const content = document.querySelector('.content');

// Odpowiedzi
const corobisz = ['niech gówno cie to obchodzi.', 'a ty?', 'nic', 'z wielką chęcią słucham ciebie.'];


const u = ['yeah', 'uuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuu', 'nie rozumiem hihi', 'co?', 'no o co ci chodzi nic nie rozumiem', 'eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeemmuu'];


const  kimjestes = ['jestem twoim asystentem ', 'nazywam sie Donekadamudanirywytadaamuritywosifusaburedikolecotnomoda .  dorryfus'];


const nowes = ['no weś', 'ogarnij sie lepiej', 'xd lol', 'no weeeś powiedziałam to szybciej niż ty jestem od ciebie lepsza i mnie nie pobijesz bo jestem cifrowa xd '];


const siema = ['cześć', 'hejo', 'siemka', 'nigdy sie ze mną nie witaj albo pożałujesz', 'elo nie powiem kim jestem do póki nie zapytasz mnie ale pewnie nie zapytasz bo sie boisz lamusie'];


const  kurczak = ['kurczak smażony lub pieczony nie odróżniam XD', 'kurczakiem to ty jesteś ty kurczaku smażony i pieczony jednocześnie w piekarniku'];


const  pogoda = ['będzie lało', 'jest bardzo ładnie na dworzu :)', 'lepiej nie wychodź z domuuuuuuuuuuuuuuuuuuu'];



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
};

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
    };

    if(message == ('u')){
        const finalText = u[Math.floor(Math.random() * u.length)];
        speech.text = finalText;
    };

    if(message.includes('kim jesteś')){
        const finalText = kimjestes[Math.floor(Math.random() * kimjestes.length)];
        speech.text = finalText;
    };

    if(message.includes('No weź')){
        const finalText = nowes[Math.floor(Math.random() * nowes.length)];
        speech.text = finalText;
    };

    if(message.includes('siema')){
        const finalText = siema[Math.floor(Math.random() * siema.length)];
        speech.text = finalText;
    };

    if(message.includes('kurczak')){
        const finalText = kurczak[Math.floor(Math.random() * kurczak.length)];
        speech.text = finalText;
    };

    if(message.includes('pogoda')){
        const finalText = pogoda[Math.floor(Math.random() * pogoda.length)];
        speech.text = finalText;
    };




    //


    speech.volume = 1;
    speech.rate = 0.8;
    speech.pitch = 1;
    window.speechSynthesis.speak(speech);
}

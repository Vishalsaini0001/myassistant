const main = document.querySelector('main');
const voicesSelect = document.getElementById('voices');
const textarea = document.getElementById('text');
const readBtn = document.getElementById('read');
const toggleBtn = document.getElementById('toggle');
const closeBtn = document.getElementById('close');

const data = [

    {
        image: './img/drink.jpg',
        text: "I'm Thirsty"
    },
   {
        image: './img/food.jpg',
        text: "I'm Hungry"
    },
    {
        image: './img/angry.jpg',
        text: "I'm Angry"
    },
    {
        image: './img/happy.jpg',
        text: "I'm Happy"
    },
    {
        image: './img/tired.jpg',
        text: "I'm Tired"
    },
    {
        image: './img/hurt.jpg',
        text: "I'm Hurt"
    },
    {
        image: './img/sad.jpg',
        text: "I'm Sad"
    },
   
    {
        image: './img/scared.jpg',
        text: "I'm Scared"
    },
    {
        image: './img/outside.jpg',
        text: "I Want To Go Outside"
    },
    {
        image: './img/home.jpg',
        text: "I Want To Go Home"
    },
    {
        image: './img/gym.jpg',
        text: "I Want To Go Gym"
    },
    {
        image: './img/dnd.jpg',
        text: "Please Do Not Disturb Me"
    },
];

data.forEach(createBox);

// Create speech boxes
function createBox(item){
    const box = document.createElement('div');

    const { image, text } = item;

    box.classList.add('box');
    box.innerHTML=`
    <img src="${image}" alt="${text}" />
    <p class="info">${text}</p>
    `;

    // @todo - speak event

    main.appendChild(box);
}

//store voices
let voices = [];

function getVoices() {
    voices = speechSynthesis.getVoices();

    voices.forEach(voice => {
        const option = document.createElement('option');

        option.value = voice.name;
        option.innerText=`${voice.name} ${voice.lang}`;

        voicesSelect.appendChild(option);

    });
}
//voices changed
speechSynthesis.addEventListener('voiceschanged', getVoices)

//toggle text box

toggleBtn.addEventListener('click', () => 
    document.getElementById('text-box').classList.toggle('show')
);

//close button

closeBtn.addEventListener('click', () => 
    document.getElementById('text-box').classList.remove('show')
);
getVoices();

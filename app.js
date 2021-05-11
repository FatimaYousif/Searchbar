// hp characters with search bar functionality

let container=document.querySelector(".container");
let nth=document.querySelector(".nth-found");
const ip = document.getElementById('search');
let hpCharacters = [];

ip.addEventListener('keyup', (e) => {
    const searchString = e.target.value.toLowerCase();

    const filteredCharacters = hpCharacters.filter((character) => {
        return (
            character.name.toLowerCase().includes(searchString)
        );
    });
    displayCharacters(filteredCharacters);
});

const loadCharacters = async () => {
    try {
        const res = await fetch('https://hp-api.herokuapp.com/api/characters');
        hpCharacters = await res.json();
        displayCharacters(hpCharacters);
    } catch (err) {
        console.error(err);
    }
};

const displayCharacters = (characters) => {
    const htmlString = characters
        .map((character) => {
            return `
            <div class="col">
                <div class="text">
                        <p class="name">${character.name}</p>
                        
                 </div>
                 <div class="img">
                         <img src="${character.image}">
                 </div>    
                         </div>
        `;
        })
        .join('');
    container.innerHTML = htmlString;
};

loadCharacters();



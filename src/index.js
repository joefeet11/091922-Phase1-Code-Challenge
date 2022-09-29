// Your code here
// initial fetch 
const fetchResource = url => {
    return fetch(url)
    .then(res => res.json())
}
//constant variables
let characterBar = document.getElementById('character-bar')
let currentVotes = 0
let voteForm = document.getElementById('votes-form')
const charVotes = document.getElementById('vote-count')
//render char name
function renderCharacterName(characters) {
    characters.forEach(character => {
        const charSpan = document.createElement('span')
        charSpan.textContent = character.name
        characterBar.appendChild(charSpan)
        charSpan.addEventListener('click', () => {
            const charImg = document.getElementById('image')
            const charName = document.getElementById('name')
            

            charImg.src = character.image
            charName.textContent = character.name
            charVotes.textContent = character.votes
        }) 

    })
}
//event listerners
voteForm.addEventListener('submit', (e) => {
    e.preventDefault()
    let enterVotes = parseInt(e.target.votes.value)
    currentVotes += enterVotes
    charVotes.textContent = currentVotes
    console.log(e)
    
})

//function invocations
fetchResource('http://localhost:3000/characters')
.then(characters => {renderCharacterName(characters)})
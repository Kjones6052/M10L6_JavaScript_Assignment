// JavaScript file containing all the JavaScript code for the task to be completed under Part 1: Exploring Asynchronous JavaScript.

// Task 1: obtain key
const PUBLIC_KEY = 'ba1de457fe1a5da3855d1b2f84fb0024'; // your public key
const PRIVATE_KEY = 'a30b819cd5eb81430c6411f2904a4db97046dcd7'; // youur private key

// Task 2: fetch Marvel character data
async function fetchMarvelData() {
    const ts = Number(new Date());
    const hash = md5.create();
    hash.update(ts + PRIVATE_KEY + PUBLIC_KEY);
    try {
        const response = await fetch(`https://gateway.marvel.com/v1/public/characters?ts=${ts}&orderBy=name&limit=10&apikey=${PUBLIC_KEY}&hash=${hash}`);
        const characterData = response.json();
        return characterData;
    } catch (error) {
        console.error('Error handling images:', error);
        return null;
    };
    
}

// Task 3: update interface with character data
document.addEventListener("DOMContentLoaded", async () => {
    const characterData = await fetchMarvelData('');
    const marvelInfoElement = document.getElementById('marvel-info');

    // Displaying Marvel character data
    marvelInfoElement.innerHTML = `
        <h2>${characterData.name}</h2>
        <img src="${characterData.thumbnail}" alt="${characterData.name}">
        <h3>Description:</h3>
        <p>${characterData.description}</p>
        `;
});
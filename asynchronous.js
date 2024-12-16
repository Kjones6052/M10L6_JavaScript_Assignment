// JavaScript file containing all the JavaScript code for the task to be completed under Part 1: Exploring Asynchronous JavaScript.

// Task 1: obtain key
const PUBLIC_KEY = 'ba1de457fe1a5da3855d1b2f84fb0024'; // your public key
const PRIVATE_KEY = ''; // youur private key

// Task 2: fetch Marvel character data
async function fetchMarvelData() {
    const ts = 1;
    const hash = "a783b08900da50084275249ef1c72bc7";
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

    for (const value in characterData) {
        marvelInfoElement.innerHTML = `
            <div>
            <h2>Character:</h2>
            <p>${value}</p>
            </div> `;
    };
});
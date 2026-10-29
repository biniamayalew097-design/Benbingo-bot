const fs = require('fs');

const data = JSON.parse(fs.readFileSync('bingo-items.json', 'utf8'));
const items = data.squares;

function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

const selectedCard = shuffle([...items]).slice(0, 9);

let markdown = "### 🎮 GitHub Bingo Card\n\n| | | |\n|---|---|---|\n";
for (let i = 0; i < selectedCard.length; i += 3) {
    markdown += `| ${selectedCard[i]} | ${selectedCard[i+1]} | ${selectedCard[i+2]} |\n`;
}

fs.writeFileSync('BINGO.md', markdown);
console.log("Bingo card generated successfully!");

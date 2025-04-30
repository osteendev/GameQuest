
const games = [
  {
    title: "Minecraft",
    image: "https://tse1.mm.bing.net/th/id/OIP.Rh9hzf_1xkmn1gM__VqlyAHaEK?cb=iwc1&rs=1&pid=ImgDetMain",
    description: "A sandbox adventure game.",
    genre: "Sandbox / Adventure",
    reason: "Endless creativity.",
    fact: "Created in 6 days!"
  },
  {
    title: "Blox Fruits",
    image: "https://tse3.mm.bing.net/th/id/OIP.aHJu4SZg9-GpeMtxgcN-tQHaDt?cb=iwc1&rs=1&pid=ImgDetMain",
    description: "Roblox anime fighting game.",
    genre: "Action / Adventure",
    reason: "Fun boss fights.",
    fact: "Inspired by One Piece."
  }
];


const stored = JSON.parse(localStorage.getItem('suggestedGames')) || [];
games.push(...stored);

document.addEventListener('DOMContentLoaded', () => {
  const gallery = document.getElementById('gameGallery');
  games.forEach((game, idx) => {
    const card = document.createElement('div');
    card.className = 'game-card';
    card.innerHTML = `
      <img src="${game.image}" alt="${game.title}">
      <h3>${game.title}</h3>
      <p>${game.description}</p>
      <button id="btn-${idx}">Details</button>
      <div class="game-details" id="details-${idx}">
        <p><strong>Genre:</strong> ${game.genre}</p>
        <p><strong>Why I love it:</strong> ${game.reason}</p>
        <p><strong>Fun Fact:</strong> ${game.fact}</p>
      </div>
    `;
    gallery.appendChild(card);
    document.getElementById(`btn-${idx}`).addEventListener('click', () => {
      const det = document.getElementById(`details-${idx}`);
      det.style.display = det.style.display === 'block' ? 'none' : 'block';
    });
  });
});
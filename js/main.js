
const featuredGame = {
  title: "Minecraft",
  image: "https://th.bing.com/th/id/R.2f619d4e36f048d072bd3a94db369a67?rik=s%2bMcHCo2%2bAu6Ew&pid=ImgRaw&r=0",
  description: "A sandbox adventure game you can build anything in.",
  link: "https://minecraft.net"
};

document.addEventListener('DOMContentLoaded', () => {
  const section = document.getElementById('featuredGame');
  section.innerHTML = `
    <h2>Featured Game: ${featuredGame.title}</h2>
    <img src="${featuredGame.image}" alt="${featuredGame.title}">
    <p>${featuredGame.description}</p>
    <a class="cta-button" href="${featuredGame.link}" target="_blank">Play Now</a>
  `;
});
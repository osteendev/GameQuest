
document.getElementById('suggestForm').addEventListener('submit', (e) => {
  e.preventDefault();
  const title = document.getElementById('title').value;
  const genre = document.getElementById('genre').value;
  const reason = document.getElementById('reason').value;
  const link = document.getElementById('link').value;
  const newGame = { title, genre, reason, fact: '', image: '', description: '' };
  const list = JSON.parse(localStorage.getItem('suggestedGames')) || [];
  list.push(newGame);
  localStorage.setItem('suggestedGames', JSON.stringify(list));
  alert('Game suggestion saved!');
  document.getElementById('suggestForm').reset();
});
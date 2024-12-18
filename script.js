document.getElementById('shayariForm').addEventListener('submit', function(event) {
  event.preventDefault();

  const category = document.getElementById('category').value;
  const shayariText = document.getElementById('shayariText').value;

  if (category && shayariText) {
    // Saving the shayari to localStorage for now (you can later integrate with a database)
    let shayariData = JSON.parse(localStorage.getItem(category)) || [];
    shayariData.push(shayariText);
    localStorage.setItem(category, JSON.stringify(shayariData));

    alert('Shayari Published!');
    document.getElementById('shayariForm').reset();
  }
});

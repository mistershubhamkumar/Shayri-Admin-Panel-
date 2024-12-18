function showNewCategoryInput() {
  const categorySelect = document.getElementById('category');
  const newCategoryInput = document.getElementById('newCategoryInput');
  
  if (categorySelect.value === 'new') {
    newCategoryInput.style.display = 'block';
  } else {
    newCategoryInput.style.display = 'none';
  }
}

document.getElementById('shayariForm').addEventListener('submit', function(event) {
  event.preventDefault();

  const category = document.getElementById('category').value;
  let categoryName = category;
  if (category === 'new') {
    categoryName = document.getElementById('newCategoryName').value;
  }
  
  const shayariText = document.getElementById('shayariText').value;

  if (categoryName && shayariText) {
    let shayariData = JSON.parse(localStorage.getItem(categoryName)) || [];
    shayariData.push(shayariText);
    localStorage.setItem(categoryName, JSON.stringify(shayariData));

    alert('Shayari Published!');
    document.getElementById('shayariForm').reset();
    showNewCategoryInput();
  }
});

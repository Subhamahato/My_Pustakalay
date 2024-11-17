let books = []; // Array to hold books data

// Fetch books data from books.json
async function fetchBooks() {
  try {
    const response = await fetch('books.json'); // Ensure the JSON file is in the same directory
    books = await response.json(); // Parse the JSON file
    renderBooks(books); // Render all books on page load
  } catch (error) {
    console.error("Failed to fetch books:", error);
  }
}

// Function to filter and display books based on search input
function searchBooks() {
  const searchInput = document.getElementById('search-input').value.toLowerCase(); // Get search input value
  const filteredBooks = books.filter(book => book.title.toLowerCase().includes(searchInput)); // Filter books by title
  
  if (searchInput.trim() === '') {
    // If search input is empty, show all categories and books
    renderBooks(books);
  } else {
    // Otherwise, show only matching books and their categories
    renderBooks(filteredBooks, true);
  }
}

// Function to render books for each category
function renderBooks(filteredBooks, isSearch = false) {
  const categories = ['ved', 'puran', 'anya-puran', 'itihas', 'smriti', 'darshan']; // List of all categories

  categories.forEach(category => {
    const categorySection = document.getElementById(category); // Get the category section
    const bookRow = categorySection.querySelector('.book-row'); // Get the book row inside the category section
    bookRow.innerHTML = ''; // Clear the existing books in the row

    // Filter books belonging to the current category
    const categoryBooks = filteredBooks.filter(book => book.category === category);

    if (categoryBooks.length > 0) {
      // If there are matching books, show the category and render the books
      categorySection.style.display = 'block';
      categoryBooks.forEach(book => {
        const bookDiv = document.createElement('div'); // Create a div for the book
        bookDiv.classList.add('book'); // Add class for styling
        bookDiv.innerHTML = `
          <a href="${book.link}" target="_blank">
            <img src="${book.image}" alt="${book.title}">
          </a>
          <div class="book-title">${book.title}</div>
        `;
        bookRow.appendChild(bookDiv); // Add the book to the row
      });
    } else {
      // Hide categories with no matching books if a search is active
      categorySection.style.display = isSearch ? 'none' : 'block';
    }
  });
}

// Initialize the page
document.addEventListener('DOMContentLoaded', () => {
  const searchInput = document.getElementById('search-input'); // Get the search input element
  
  // Trigger search when the user presses Enter
  searchInput.addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
      searchBooks(); // Filter books
      this.blur(); // Hide the keyboard (on mobile devices)
    }
  });

  // Load books from the JSON file on page load
  fetchBooks();
});

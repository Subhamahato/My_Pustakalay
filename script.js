const books = [
     { title: "Rigved",     link: "link", image: "Images/Rigved.jpg", category: "ved" },
     { title: "Yajurved",   link: "link", image: "Images/Yajurved.jpg", category: "ved" },
     { title: "Saamved",    link: "link", image: "Images/Saamved.jpg", category: "ved" },
     { title: "Atharvaved", link: "link", image: "Images/Atharvaved.jpg", category: "ved" },
     
     { title: "Brahma Puran",        link: "link", image: "Images/Brahma Puran.jpg", category: "puran" },
     { title: "Padma Puran",         link: "https://drive.google.com/file/d/1-aNIN_nzY4sNvWtdoNzG7VozC4Y7cCfr/view?usp=drivesdk", image: "Images/Padma Puran.jpg", category: "puran" },
     { title: "Vishnu Puran",        link: "link", image: "Images/Vishnu Puran.jpg", category: "puran" },
     { title: "Shiv Puran",          link: "link", image: "Images/Shiv Puran.jpg", category: "puran" },
     { title: "Bhagwat Puran",       link: "link", image: "Images/Bhagwat Puran.jpg", category: "puran" },
     { title: "Bhavishya Puran",     link: "http", image: "Images/Bhavishya Puran.jpg", category: "puran" },
     { title: "Narad Puran",         link: "link", image: "Images/Narad Puran.jpg", category: "puran" },
     { title: "Markandey Puran",     link: "link", image: "Images/Markandey Puran.jpg", category: "puran" },
     { title: "Agni Puran",          link: "link", image: "Images/Agni Puran.jpg", category: "puran" },
     { title: "Brahmavaivart Puran", link: "link", image: "Images/Brahmavaivart Puran.jpg", category: "puran" },
     { title: "Ling Puran",          link: "link", image: "Images/Ling Puran.jpg", category: "puran" },
     { title: "Varah Puran",         link: "link", image: "Images/Varah Puran.jpg", category: "puran" },
     { title: "Skand Puran",         link: "link", image: "Images/Skand Puran.jpg", category: "puran" },
     { title: "Vaman Puran",         link: "link", image: "Images/Vaman Puran.jpg", category: "puran" },
     { title: "Kurma Puran",         link: "link", image: "Images/Kurma Puran.jpg", category: "puran" },
     { title: "Matsya Puran",        link: "link", image: "Images/Matsya Puran.jpg", category: "puran" },
     { title: "Garud Puran",         link: "link", image: "Images/Garud Puran.jpg", category: "puran" },
     { title: "Brahmand Puran",      link: "link", image: "Images/Brahmand Puran.jpg", category: "puran" },
     
     { title: "Narsingh Puran", link:"link", image: "Images/Narsingh Puran.jpg", category: "anya-puran" },
     { title: "Harivansh Puran", link: "link", image: "Images/Harivansh Puran.jpg", category: "anya-puran" },
     
     { title: "Mahabharat Part1", link: "link", image: "Images/Mahabharat1.jpg", category: "itihas" },
     { title: "Mahabharat Part2", link: "link", image: "Images/Mahabharat2.jpg", category: "itihas" },
     { title: "Mahabharat Part3", link: "link", image: "Images/Mahabharat3.jpg", category: "itihas" },
     { title: "Mahabharat Part4", link: "link", image: "Images/Mahabharat4.jpg", category: "itihas" },
     { title: "Mahabharat Part5", link: "link", image: "Images/Mahabharat5.jpg", category: "itihas" },
     { title: "Mahabharat Part6", link: "link", image: "Images/Mahabharat6.jpg", category: "itihas" },
     
     { title: "Manusmriti", link: "link", image: "Images/Manusmriti.jpg", category: "smriti" },
     { title: "Parashar Smriti", link: "link", image: "Images/Parashar Smriti.jpg", category: "smriti" },
     
     { title: "Vaidik Darshan", link: "link", image: "Images/Vaidik Darshan.jpg", category: "darshan" },
     { title: "Sankhya Darshan", link: "link", image: "Images/Sankhya Darshan.jpg", category: "darshan" },
     { title: "Yog Darshan", link: "link", image: "Images/Yog Darshan.jpg", category: "darshan" },
     { title: "Nyai Darshan", link: "link", image: "Images/Nyai Darshan.jpg", category: "darshan" },
     ];
     
     function searchBooks() {
     const searchInput = document.getElementById('search-input').value.toLowerCase();
     const filteredBooks = books.filter(book => book.title.toLowerCase().includes(searchInput));
     renderBooks(filteredBooks);
     }
     
     function renderBooks(filteredBooks) {
     const categories = ['ved', 'puran', 'anya-puran', 'itihas', 'smriti', 'darshan'];
     categories.forEach(category => {
     const categorySection = document.getElementById(category);
     const bookRow = categorySection.querySelector('.book-row');
     bookRow.innerHTML = '';
     filteredBooks.forEach(book => {
     if (book.category === category) {
     const bookDiv = document.createElement('div');
     bookDiv.classList.add('book');
     bookDiv.innerHTML = `
     <a href="${book.link}" target="_blank">
     <img src="${book.image}" alt="${book.title}">
     </a>
     <div class="book-title">${book.title}</div>
     `;
     bookRow.appendChild(bookDiv);
     }
     });
     });
     }
     
     document.addEventListener('DOMContentLoaded', () => {
     const searchInput = document.getElementById('search-input');
     searchInput.addEventListener('keypress', function (e) {
     if (e.key === 'Enter') {
     searchBooks();
     this.blur(); // Hide the keyboard
     }
     });
     renderBooks(books);
     });
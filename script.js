document.addEventListener('DOMContentLoaded', () => {
    const bookList = document.getElementById('book-list');
    const historyList = document.getElementById('history-list');
    const categories = document.getElementById('categories');
    const searchBar = document.getElementById('search-bar');
    const searchButton = document.getElementById('search-button');

    const books = [
        { title: '1984', author: 'George Orwell', category: 'Dystopian' },
        { title: 'Ramayana', author: 'Valmiki', category: 'Classic' },
        { title: 'Mahabharata', author: 'Ved Vyasa', category: 'Classic' }
    ];

    const history = [
        { title: '1984', date: '2024-12-20' }
    ];

    function renderBooks() {
        bookList.innerHTML = '';
        books.forEach(book => {
            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${book.title}</td>
                <td>${book.author}</td>
                <td>${book.category}</td>
                <td><button class="borrow-button">Borrow</button></td>
            `;
            bookList.appendChild(row);
        });
    }

    function renderHistory() {
        historyList.innerHTML = '';
        history.forEach(entry => {
            const item = document.createElement('li');
            item.textContent = `${entry.title} borrowed on ${entry.date}`;
            historyList.appendChild(item);
        });
    }

    function renderCategories() {
        const categoriesSet = new Set(books.map(book => book.category));
        categories.innerHTML = '';
        categoriesSet.forEach(category => {
            const div = document.createElement('div');
            div.textContent = category;
            categories.appendChild(div);
        });
    }

    searchButton.addEventListener('click', () => {
        const query = searchBar.value.toLowerCase();
        const filteredBooks = books.filter(
            book => book.title.toLowerCase().includes(query) || book.author.toLowerCase().includes(query)
        );
        bookList.innerHTML = '';
        filteredBooks.forEach(book => {
            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${book.title}</td>
                <td>${book.author}</td>
                <td>${book.category}</td>
                <td><button class="borrow-button">Borrow</button></td>
            `;
            bookList.appendChild(row);
        });
    });

    renderBooks();
    renderHistory();
    renderCategories();
});

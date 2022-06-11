console.log("Hello World! in Our BookStore\n");

let books = [
    [1, 'Start with why', 'Simon sinek', 80.0, 13],
    [2, 'But how do it Know', 'J.Clark Scott', 59.9, 22],
    [3, 'Clean Code', 'Robert Cecil Martin', 50.0, 5],
    [4, 'Zero to One', 'Peter Theil', 45.0, 12],
    [5, 'You don\'t Know JS', 'Kyle Simpson', 39.9, 9],
];

function printInfo() {
    console.log("Our Books in BookStore Place");
    for (let book of books) {
        console.log(book);
    }
}

function insertBook(id, title, authors, price, amount) {

    books.push([id, title, authors, price, amount]);
    console.log("inserted is Succesed...\n")
}

function deleteBook(id) {

    for (let index = 0; index < books.length; index++) {
        if (books[index][0] === id) {
            books.splice(index, 1);
        }
    }
    console.log("deleted is succesed\n")
}

function updateBook(id, firstTitle, firstAuthors, firstPrice, firstAmount
    , secondTitle, secondAuthors, secondPrice, secondAmount) {
    for (let i = 0; i < books.length; i++) {
        if (
            books[i][0] === id &&
            books[i][1] === firstTitle &&
            books[i][2] === firstAuthors &&
            books[i][3] === firstPrice &&
            books[i][4] === firstAmount
        ) {
            books[i][1] = secondTitle;
            books[i][2] = secondAuthors;
            books[i][3] = secondPrice;
            books[i][4] = secondAmount;
            console.log("The item is Updated...\n");
        }
    }
}

function bookQuery(id, title, author) {
    for (let i = 0; i < books.length; i++) {
        if (books[i][0] === id &&
            books[i][1] === title &&
            books[i][2] === author) {
            return 'Name is : ' + title + ' , Author is :' + author;
        }
        return 'We don\'t have this is Book\n';
    }
}

function bookSelling(title, amountOfBooks, paymentCustomer, customerName) {

    let totalPayment, amountOfBook;

    for (let index = 0; index < books.length; index++) {

        if (books[index][1] === title) {
            totalPayment = amountOfBooks * books[index][3];
            if (amountOfBooks > books[index][4]) {
                console.log("the quantity of book is not enough please try again.\n")
                break;
            }

            amountOfBook = books[index][4] - amountOfBooks;
            books[index][4] = amountOfBook;
            if (totalPayment > paymentCustomer) {
                console.log("the payment is no\'t enough for buy books\n")
                break;
            }

            exportInvoice(title, amountOfBooks, totalPayment, customerName);
        }
    }
}

function exportInvoice(title, amountOfBooks, totalPayment, customerName) {

    console.log("Hello Mr." + customerName + ' you have a invoice for includes the details:\n');
    console.log("You buy the book : " + title);
    console.log("The number of book which you buy : " + amountOfBooks);
    console.log("The total Payment for this boosk is : " + totalPayment);
    console.log("Weclome for You any time in our StoreBooks..");

}

printInfo()

insertBook(6, "Learn JS", "Muhammed-Manfy", 20, 22);

updateBook(2, 'But how do it Know', 'J.Clark Scott', 59.9, 22, 'bookUpdated', 'Ahmed', 24, 55);

deleteBook(2);

let query = bookQuery(1, "Start with why", "Simon sinek");
console.log(query);

bookSelling('Clean Code', 2, 150.0, 'muhammedManfy');
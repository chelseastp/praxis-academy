var books = [
    {name:'How to be Raisa', pages:5}, 
    {name:'How to be Maudy', pages:2},
    {name:'How to be Chelsea ', pages:20}
  ];
  /* Imperative Pattern */
  for (var i = 0; i < books.length; i++) {
    books[i].lastRead =  new Date();
  }
  /* Declarative Pattern */
  books.map((book)=> {
    book.lastReadBy = 'Chelsea cantik';
    return book;
  });
  console.log(books);
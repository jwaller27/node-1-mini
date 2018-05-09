let books = [];
let id = 0;

module.exports = {
    getBooks(req, res){
        return res.status(200).json(books);
    },
    postBook(req,res){
        // console.log(req.body)
        id++;
        req.body.id = id;
        books.push(req.body);
        return res.status(200).json(books)
    },
    updateBook (req, res){
        // books.forEach(book=> book.id === parseInt(req.params.id) ? Object.assign(book, req.body) : null)
        // when update request comes in, loops through book and checks to see if id's match, overwrite old book w/ values of req.body, else do nothin     
    // }
    for (let i = 0; i < books.length; i++) {
        if (books[i].id == req.params.id) {
          for (let key in req.body) {
            books[i][key] = req.body[key];
          }
        }
      }
      return res.status(200).son(books);  
},
deleteBook(req, res) {
  let ind = books.findIndex(book => book.id == req.params.id);
  books.splice(ind, 1);
  return res.status(200).json(books);
}
};



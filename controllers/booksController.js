import Books from "../models/books.model.js";

// Add/Create a Book
export async function addBook(req, res) {
  try {
    let book = await Books.create(req.body);
    if (book) {
      res.status(200).json({
        success: true,
        message: "Book created Successfully",
        data: book,
      });
    } else {
      res.status(200).json({
        success: true,
        message: "Book could not be created at this time!",
      });
    }
  } catch (e) {
    console.log(e);
    res.status(500).json({
      success: false,
      message: "Oopss! Something is wrong...",
    });
  }
}

// View all Books
export async function viewAllBooks(req, res) {
  try {
    let allbooks = await Books.findAll();
    if (allbooks) {
      res.json({
        success: true,
        message: "Books records retrieved successfully",
        data: allbooks,
      });
    } else {
      res.json({
        success: true,
        message: "Not found!",
        data: allbooks,
      });
    }
  } catch (e) {
    console.log(e);
    res.status(500).json({
      success: false,
      message: "Oooh Something is wrong...",
    });
  }
}

// View a Book
export async function viewBook(req, res) {
  try {
    let allbooks = await Books.findAll({ where: { book_id: req.params.id } });
    if (allbooks) {
      res.json({
        success: true,
        message: "Book records retrieved successfully",
        data: allbooks,
      });
    } else {
      res.json({
        success: true,
        message: "Not found!",
      });
    }
  } catch (e) {
    console.log(e);
    res.status(500).json({
      success: false,
      message: "Something is wrong",
    });
  }
}

// Update a book record
export async function updateBook(req, res) {
  try {
    let updatebook = await Books.update(req.body,{where: {book_id: req.params.id}});
    if (updatebook) {
      res.json({
        success: true,
        message: "Book records updated successfully",
        data: updatebook,
      });
    } else {
      res.json({
        success: true,
        message: "Book not found buddy!",
      });
    }
  } catch (e) {
    console.log(e);
    res.status(500).json({
      success: false,
      message: "Something is wrong...",
    });   
  }
}

// Delete a book record
export async function deleteBook(req, res) {
  try {
    let deletebook = await Books.destroy({ where: { book_id: req.params.id } });
    if (deletebook) {
        res.json({
          success: true,
          message: "Book deleted successfully",
          data: deletemember,
        });
    }else{
      res.json({
        success: true,
        message: "Sorry you need to try next time buddy!!",
        data: deletebook
      });
    }
  } catch (e) {
    console.log(e);
    res.status(500).json({
      success: false,
      message: "Oops!! Something's wrong..."
    });
  }
}

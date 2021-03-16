import Member from "../models/books.model.js";


//Add/Create a book
export async function addbook(req, res) {
    try {
        let book = await Book.create(req.body);
        if (book) {
            res.status(200).json({
                success: true,
                message: 'Book created successfully',
                data: book
            })
        } else {
            res.status(200).json({
                success: true,
                message: 'Book could not be created at this time'
            })
        }
    } catch (err) {
        console.log(err);
        res.status(500).json({
            success: false,
            message: "Oopss! Something is wrong..."
        })
    }
}

//View a book
export async function viewBook(req, res) {
    try {
        let allbooks = await Book.findAll({ where: { book_id: req.params.id } });
        if (allbooks) {
            res.json({
                success: true,
                message: 'Book record retrieved successfully',
                data: allbooks
            })
        } else {
            res.json({
                success: true,
                message: 'No book record found.',
            })
        }
    } catch (err) {
        console.log(err);
        res.status(500).json({
            success: false,
            message: "Oopss! Something is wrong..."
        })
    }
}

//View all books
export async function viewAllBooks(req, res) {
    try {
        let allbooks = await Book.findAll();
        if (allbooks) {
            res.json({
                success: true,
                message: 'Books record retrieved successfully',
                data: allbooks
            })
        } else {
            res.json({
                success: true,
                message: 'No books records found.',
            })
        }
    } catch (err) {
        console.log(err);
        res.status(500).json({
            success: false,
            message: "Oopss! Something is wrong..."
        })
    }
}

//Delete a book
export function deleteBook(req, res) {
    console.log(req.body);
    res.send(req.body)
}

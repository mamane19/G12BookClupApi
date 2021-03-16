import Borrow from "../models/borrowing.model.js";


//Borrow book
export async function borrowBook(req, res) {
    try {
        let borrow = await Borrow.create(req.body);
        if (borrow) {
            res.status(200).json({
                success: true,
                message: 'Borrow record created successfully',
                data: borrow
            })
        } else {
            res.status(200).json({
                success: true,
                message: 'Borrow record could not be created at this time'
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

// return book
export function returnBook(req, res) {
    console.log(req.body);
    res.send(req.body)
}

//View a borrowing
export async function viewBorrowing(req, res) {
    try {
        let allborrowings = await Borrow.findAll();
        if (allborrowings) {
            res.json({
                success: true,
                message: 'Borrowing record retrieved successfully',
                data: allborrowings
            })
        } else {
            res.json({
                success: true,
                message: 'No borrowing records found.',
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

//View all borrowing of a member
export async function viewAllBorrowing(req, res) {
    try {
        let allmemberborrowing = await Borrow.findAll({ where: { member_id: req.params.id } });
        if (allmemberborrowing) {
            res.json({
                success: true,
                message: 'Member borrowing records retrieved successfully',
                data: allmemberborrowing
            })
        } else {
            res.json({
                success: true,
                message: 'No Member borrowing records found.',
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


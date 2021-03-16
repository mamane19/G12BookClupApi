import Borrowing from "../models/borrowing.model.js";


//Add a book borrowing
export async function addBorrowing(req, res) {
    try {
        let borrowing = await Borrowing.create(req.body);
        if (borrowing) {
            res.status(200).json({
                success: true,
                message: 'Borrowing created successfully',
                data: borrowing
            })
        } else {
            res.status(200).json({
                success: true,
                message: 'Borrowing could not be created at this time'
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

//View a borrowing
export async function viewBorrowing(req, res) {
    try {
        let allborrowings = await Borrowing.findAll({where: {borrowing_id: req.params.id}});
        if (allborrowings) {
            res.json({
                success: true,
                message: 'Borrowing records retrieved successfully',
                data: allborrowings
            })
        } else {
            res.json({
                success: true,
                message: 'No Borrowing records found.',
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

//View all borrowings
export async function viewAllBorrowings(req, res) {
    try {
        let allborrowings = await Borrowing.findAll();
        if (allborrowings) {
            res.json({
                success: true,
                message: 'Borrowing records retrieved successfully',
                data: allborrowings
            })
        } else {
            res.json({
                success: true,
                message: 'No Borrowing records found.',
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

//Update borrowing record
export async function returnBook(req, res) {
    try {
        
        let updatedBorrow = await Borrowing.update(req.body,{where:{borrowing_id: req.params.id}});
        if (updatedBorrow) {
            res.json({
                success: true,
                message: 'Book records updated successfully',
                data: updatedBorrow
            })
        } else {
            res.json({
                success: true,
                message: 'No Book records found.',
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
//View all borrowings of a particular member
export async function viewMemberBorrowings(req, res) {
    try {
        
        let memberBorrowings = await Borrowing.findAll({where:{borrower_name: req.params.borrower_name}});
        if (memberBorrowings) {
            res.json({
                success: true,
                message: 'Book records retrieved successfully',
                data: memberBorrowings
            })
        } else {
            res.json({
                success: true,
                message: 'No Book records found.',
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
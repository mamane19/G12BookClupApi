import Borrow from "../models/borrow.models.js";


//Add a book borrowing
export async function addBorrow(req, res) {
    try {
        let borrowing = await Borrow.create(req.body);
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
export async function viewBorrow(req, res) {
    try {
        let allborrowings = await Borrow.findAll({where: {borrow_id: req.params.id}});
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
export async function viewAllBorrows(req, res) {
    try {
        let allborrowings = await Borrow.findAll();
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
        
        let updateborrow = await Borrow.update(req.body,{where:{borrow_id: req.params.id}});
        if (updateborrow) {
            res.json({
                success: true,
                message: 'Book records updated successfully',
                data: updateborrow
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
export async function viewMemberBorrows(req, res) {
    try {
        
        let memberborrows = await Borrow.findAll({where:{borrower_name: req.params.borrower_name}});
        if (memberborrows) {
            res.json({
                success: true,
                message: 'Book records retrieved successfully',
                data: memberborrows
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
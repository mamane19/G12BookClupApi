import User from "../models/users.model.js";


//Add a user
export async function addUser(req, res) {
    try {
        let user = await User.create(req.body);
        if (user) {
            res.status(200).json({
                success: true,
                message: 'User created successfully',
                data: user
            })
        } else {
            res.status(200).json({
                success: true,
                message: 'User could not be created at this time'
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

//View a user
export async function viewUser(req, res) {
    try {
        let user = await User.findAll({ where: { user_id: req.params.id } });
        if (user) {
            res.json({
                success: true,
                message: 'User records retrieved successfully',
                data: user
            })
        } else {
            res.json({
                success: true,
                message: 'No User records found.',
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

//View all users
export async function viewAllUsers(req, res) {
    try {
        let allusers = await User.findAll();
        if (allusers) {
            res.json({
                success: true,
                message: 'User records retrieved successfully',
                data: allusers
            })
        } else {
            res.json({
                success: true,
                message: 'No user records found.',
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

//Sign In
export function signIn(req, res) {
    console.log(req.body);
    res.send(req.body)
}


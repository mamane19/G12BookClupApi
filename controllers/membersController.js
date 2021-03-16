import Member from "../models/members.model.js";

//Add a Member
export async function addMember(req, res) {
  try {
    let member = await Member.create(req.body);
    if (member) {
      res.status(200).json({
        success: true,
        message: "Member created successfully",
        data: member,
      });
    } else {
      res.status(200).json({
        success: true,
        message: "Member could not be created at this time",
      });
    }
  } catch (err) {
    console.log(err);
    res.status(500).json({
      success: false,
      message: "Oopss! Something is wrong...",
    });
  }
}

//View a member
export async function viewMember(req, res) {
  try {
    let allmembers = await Member.findAll({
      where: { member_id: req.params.id },
    });
    if (allmembers) {
      res.json({
        success: true,
        message: "Member records retrieved successfully",
        data: allmembers,
      });
    } else {
      res.json({
        success: true,
        message: "No Member records found.",
      });
    }
  } catch (err) {
    console.log(err);
    res.status(500).json({
      success: false,
      message: "Oopss! Something is wrong...",
    });
  }
}

//View all members
export async function viewAllMembers(req, res) {
  try {
    let allmembers = await Member.findAll();
    if (allmembers) {
      res.json({
        success: true,
        message: "Members records retrieved successfully",
        data: allmembers,
      });
    } else {
      res.json({
        success: true,
        message: "No Member records found.",
      });
    }
  } catch (err) {
    console.log(err);
    res.status(500).json({
      success: false,
      message: "Oopss! Something is wrong...",
    });
  }
}

//Update member record
export async function updateMember(req, res) {
  try {
    let updatemember = await Member.update(
        req.body, 
    //   {
    //     member_name: "",
    //     member_gender: "",
    //     email_address: "",
    //     telephone_number: "",
    //     date_of_birth: "",
    //     address: "",
    //     referral_id: "",
    //   },
      { where: { member_id: req.params.id } }
    );
    if (updatemember) {
      res.json({
        success: true,
        message: "Member updated successfully",
        data: updatemember,
      });
    } else {
      res.json({
        status: true,
        message: "Member not found!!",
      });
    }
  } catch (e) {
    console.log(e);
    res.status(500).json({
      success: false,
      message: "Oops Something's wrong...",
    });
  }
}

// export async function updateMember(req, res, next) {
//     return await Member.update(
//         {member_name: req.body.member_name},
//         {returning: true, where: {id: req.params.member_id}
//     })
//     .then(function([rowsUpdate, [updatedMember] ]) {
//         res.json({
//             success: true,
//             message: "Member updated succesfully",
//             data: updatedMember, rowsUpdate
//         })
//     })
//     .catch(next)
// }

//Delete a member
export async function deleteMember(req, res) {
  try {
    let deletemember = await Member.destroy({
      where: { member_id: req.params.id },
    });
    if (deletemember) {
      res.json({
        success: true,
        message: "Member deleted successfully",
        data: deletemember,
      });
    } else {
      res.json({
        success: true,
        message: "Sorry but the member can't be deleted",
      });
    }
  } catch (e) {
    console.log(e);
    res.status(500).json({
      success: false,
      message: "Oops!! Something's wrong",
    });
  }
}

const path = require("path");
const Students = require("../model/student.model");
const fs = require("fs");
exports.update = async (req, res) => {
  try {
    const { id } = req.params;
    const { fees, educational, medical, address, ...rest } = req.body;

    const updateFields = {
      ...req.body,
      address: req.body?.address,
      fees: req.body?.fees,
    };

    const existingUser = await Students.findById(id);

    if (!existingUser) {
      return res.status(404).json({ message: "Student not found" });
    }
    // profile image
    if (req.files?.profileimage) {
      const newProfileImage = req.files.profileimage[0].filename;
      if (existingUser.profileimage) {
        const oldProfileImage = path.resolve(existingUser.profileimage);
        if (fs.existsSync(oldProfileImage)) {
          fs.unlinkSync(oldProfileImage);
        }
      }
      updateFields.profileimage = newProfileImage;
    }
    // medical image
    if (req.files?.medical) {
      const newMedicalImage = req.files.medical.map((file) => file.filename);
      existingUser.medical.forEach((medicalFile) => {
        const oldMedicalImage = path.resolve(medicalFile);
        if (fs.existsSync(oldMedicalImage)) {
          fs.unlinkSync(oldMedicalImage);
        }
      });
      updateFields.medical = newMedicalImage;
    }
    // educational;
    if (req.files?.educational) {
      const newEducational = req.files.educational.map((file) => file.filename);
      existingUser.educational.forEach((eduFile) => {
        const oldEduImage = path.resolve(eduFile);
        if (fs.existsSync(oldEduImage)) {
          fs.unlinkSync(oldEduImage);
        }
      });
      updateFields.educational = newEducational;
    }
    console.log(req.body);

    const data = await Students.findByIdAndUpdate(id, updateFields, {
      new: true,
    });
    return res.status(200).json({ message: "student updated succesfully" });
  } catch (error) {
    console.log(error);
    return res
      .status(400)
      .json({ message: "error in student update", error: error.message });
  }
};

const { default: mongoose } = require("mongoose");
const Student = require("../model/student.model");
const Teacher = require("../model/teacher.model");

let bucket;

mongoose.connection.once("open", () => {
  bucket = new mongoose.mongo.GridFSBucket(mongoose.connection.db, {
    bucketName: "images",
  });
});

exports.updateProfile = async (req, res) => {
  try {
    const { id } = req.params;
    console.log(req.file);

    const updateFields = {
      ...req.body,
      address: req.body?.address,
    };
    const existingUser = await Teacher.findById(id);

    if (!existingUser) {
      return res.status(404).json({ message: "profile not found" });
    }

    // profile image
    if (req.file) {
      const uploadStream = bucket.openUploadStream(req.file.originalname);
      uploadStream.end(req.file.buffer);

      uploadStream.on("finish", async () => {
        updateFields.image = req.file.originalname;
        updateFields.imageId = uploadStream.id;
      });
      uploadStream.on("error", (error) => {
        return res.status(500).json({ error: error.message });
      });
    }

    // if (req?.file) {
    //   const newProfileImage = req?.file?.filename;
    //   if (existingUser.profileimage) {
    //     const oldProfileImage = path.resolve(existingUser.profileimage);
    //     if (fs.existsSync(oldProfileImage)) {
    //       fs.unlinkSync(oldProfileImage);
    //     }
    //   }
    //   updateFields.image = newProfileImage;
    // }

    const data = await Teacher.findByIdAndUpdate(id, updateFields, {
      new: true,
    });
    return res
      .status(200)
      .json({ message: "profile updated succesfully", data: data });
  } catch (error) {
    return res
      .status(400)
      .json({ message: "error in student update", error: error.message });
  }
};

exports.getStudents = async (req, res) => {
  try {
    const { id } = req.params;
    const students = await Student.find({
      teacher: id,
      adminstatus: "approve",
    });
    return res.status(200).json({ data: students });
  } catch (error) {
    return res
      .status(400)
      .json({ message: "error in student update", error: error.message });
  }
};

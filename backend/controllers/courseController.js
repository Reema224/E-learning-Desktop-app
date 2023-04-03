const Course = require("../models/courseModel");

exports.createCourse = async (req, res) => {
  const { name, description, startDate, endDate, instructor, location } = req.body;

  const course = new Course({ name, description, startDate, endDate, instructor, location });

  try {
    await course.save();
    res.status(201).json(course);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};


exports.getCourse = async (req, res) => {
  try {
    const courseId = req.params.id;

    const course = await Course.findById(courseId).populate("students");

    if (!course) {
      return res.status(404).json({ message: "Course not found" });
    }

    res.json(course);
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ message: "Server Error" });
  }
};

exports.updateCourse = async (req, res) => {
  try {
    const courseId = req.params.id;
    const { name, description, startDate, endDate, instructor, location } = req.body;

    const course = await Course.findByIdAndUpdate(
      courseId,
      { name, description, startDate, endDate, instructor, location },
      { new: true }
    );

    if (!course) {
      return res.status(404).json({ message: "Course not found" });
    }

    res.json(course);
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ message: "Server Error" });
  }
};

exports.deleteCourse = async (req, res) => {
  try {
    const courseId = req.params.id;

    const course = await Course.findByIdAndDelete(courseId);

    if (!course) {
      return res.status(404).json({ message: "Course not found" });
    }

    res.json({ message: "Course deleted successfully" });
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ message: "Server Error" });
  }
};

exports.enroll = async (req, res) => {
  try {
    const courseId = req.params.id;
    const studentId = req.user.id;

    const course = await Course.findById(courseId);

    if (!course) {
      return res.status(404).json({ message: "Course not found" });
    }

    if (course.students.includes(studentId)) {
      return res.status(400).json({ message: "You are already enrolled in this course" });
    }

    course.students.push(studentId);
    await course.save();

    res.json(course);
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ message: "Server Error" });
  }
};


exports.listStudents = async (req, res) => {
  try {
    const courseId = req.params.id;

    const course = await Course.findById(courseId).populate("students");

    if (!course) {
      return res.status(404).json({ message: "Course not found" });
    }

    res.json(course.students);
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ message: "Server Error" });
  }
};

exports.applyWithdrawal = async (req, res) => {
  try {
    const courseId = req.params.id;
    const studentId = req.user.id;

    const course = await Course.findById(courseId);

    if (!course) {
      return res.status(404).json({ message: "Course not found" });
    }

    if (!course.students.includes(studentId)) {
      return res.status(400).json({ message: "You are not enrolled in this course" });
    }

    if (course.withdrawals && course.withdrawals.some((w) => w.student.toString() === studentId)) {
      return res.status(400).json({ message: "You already applied for withdrawal" });
    }

    const withdrawal = {
      student: studentId,
      status: "pending",
      date: new Date(),
    };

    if(!course.withdrawals){
      course.withdrawals = [withdrawal];
    } else {
      course.withdrawals.push(withdrawal);
    }

    await course.save();

    res.json(withdrawal);
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ message: "Server Error" });
  }
};


exports.approveWithdraw = async (req, res) => {
  try {
    const courseId = req.params.id;
    const withdrawalId = req.body.withdrawalId;

    const course = await Course.findById(courseId);

    if (!course) {
      return res.status(404).json({ message: "Course not found" });
    }

    const withdrawal = course.withdrawals && course.withdrawals.find((w) => w._id.toString() === withdrawalId);

    if (!withdrawal) {
      return res.status(404).json({ message: "Withdrawal not found" });
    }

    if (withdrawal.status !== "pending") {
      return res.status(400).json({ message: "Withdrawal has already been processed" });
    }

    withdrawal.status = "approved";
    withdrawal.processedDate = new Date();

    const student = await User.findById(withdrawal.student);

    if (!student) {
      return res.status(404).json({ message: "Student not found" });
    }

    student.courses = student.courses.filter((c) => c.course.toString() !== courseId);

    await student.save();
    await course.save();

    res.json(withdrawal);
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ message: "Server Error" });
  }
};

exports.rejectWithdraw = async (req, res) => {
  try {
    const courseId = req.params.id;
    const withdrawalId = req.body.withdrawalId;
    const reason = req.body.reason;

    const course = await Course.findById(courseId);

    if (!course) {
      return res.status(404).json({ message: "Course not found" });
    }

    const withdrawal = course.withdrawals && course.withdrawals.find((w) => w._id.toString() === withdrawalId);

    if (!withdrawal) {
      return res.status(404).json({ message: "Withdrawal not found" });
    }

    if (withdrawal.status !== "pending") {
      return res.status(400).json({ message: "Withdrawal has already been processed" });
    }

    withdrawal.status = "rejected";
    withdrawal.processedDate = new Date();
    withdrawal.reason = reason;

    await course.save();

    res.json(withdrawal);
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ message: "Server Error" });
  }
};

const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const User = require("../models/User");

// SIGNUP
const signupUser = async (req, res) => {
  const { name, email, password } = req.body;

  try {
    const existingUser = await User.findOne({ email });

    if (existingUser) {
      return res.status(400).json({ message: "User already exists" });
    }

    const user = new User({ name, email, password });
    await user.save();

    res.status(201).json({ message: "User created successfully" });

  } catch (error) {
    console.log("SIGNUP ERROR:", error);
    res.status(500).json({ message: error.message });
  }
};


// LOGIN
const loginUser = async (req, res) => {
  const { email, password } = req.body;

  console.log("👉 LOGIN REQUEST:");
  console.log("EMAIL:", `"${email}"`);
  console.log("PASSWORD:", `"${password}"`);

  const user = await User.findOne({ email });

  console.log("👉 USER FOUND:", user ? "YES" : "NO");

  if (!user) {
    return res.status(400).json({ message: "Invalid credentials (user not found)" });
  }

  const isMatch = await bcrypt.compare(password, user.password);

  console.log("👉 PASSWORD MATCH:", isMatch);

  if (!isMatch) {
    return res.status(400).json({ message: "Invalid credentials (password mismatch)" });
  }

  const token = jwt.sign(
    { id: user._id },
    process.env.JWT_SECRET || "secretkey",
    { expiresIn: "1d" }
  );

  res.json({ token });
};

module.exports = { signupUser, loginUser };
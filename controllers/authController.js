const jwt = require("jsonwebtoken");

// TEMP login (no database yet)
const loginUser = async (req, res) => {
  const { email, password } = req.body;

  // dummy user (for testing)
  if (email === "test@test.com" && password === "123456") {
    const token = jwt.sign({ email }, "secretkey");

    return res.json({ token });
  }

  res.status(400).json({ message: "Invalid credentials" });
};

module.exports = { loginUser };
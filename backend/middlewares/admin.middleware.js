exports.adminMiddleware = (req, res, next) => {
  const user = req.user;

  if (user && user.role === "admin") {
    return next();
  } else {
    return res.status(401).json({ message: "Unauthorized" });
  }
};

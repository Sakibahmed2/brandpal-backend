const notFound = (req, res, next) => {
  return res.status(404).json({
    success: false,
    message: "API not founded!",
    error: "",
  });
};

export default notFound;

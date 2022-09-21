const validate = (schema) => async (req, res, next) => {
  try {
    await schema.validate({
      body: req.body,
      query: req.query,
      params: req.params,
    });
    next();
  } catch (error) {
    console.error(error);
    return res
      .status(400)
      .json({ error: error.errors[0], path: error.path.split(".")[1] });
  }
};

module.exports = validate;

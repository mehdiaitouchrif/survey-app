const { object, string } = require("yup");

const params = {
  params: object({ id: string().required(":id param is required") }),
};

const body = {
  body: object({
    name: string()
      .required("Please enter a name for your survey")
      .max(50, "Name cannot be ore than 50 chars"),
    image: string().url("Please enter a valid url"),
  }),
};

exports.createQuestionSchema = object({ ...body });
exports.updateQuestionSchema = object({ ...params, ...body });
exports.getQuestionSchema = object({ ...params });
exports.deleteQuestionSchema = object({ ...params });

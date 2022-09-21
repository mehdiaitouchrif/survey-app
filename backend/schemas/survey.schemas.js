const { object, string } = require("yup");

const params = {
  params: object({ id: string().required(":id param is required") }),
};

const body = {
  body: object({
    name: string()
      .required("Please enter a name for your survey")
      .max(50, "Name cannot be ore than 50 chars"),
    description: string()
      .required("Please enter a description for your survey")
      .min(10, "Description cannot be less than 10 chars"),
    image: string().url("Please enter a valid url"),
  }),
};

exports.createSurveySchema = object({ ...body });
exports.updateSurveySchema = object({ ...params, ...body });
exports.getSurveySchema = object({ ...params });
exports.deleteSurveySchema = object({ ...params });

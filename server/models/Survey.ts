import mongoose from 'mongoose';

// TODO: add survey interface
// TODO: define a correct model
// TODO: create methods to create, get, and delete a survey
// TODO: define correct names for db

// interface ISurvey {
//   author: string;
//   author_id: string;
//   questions: Array<any>;
// }

const SurveySchema = new mongoose.Schema(
  {
    author: {
      type: String,
      required: true,
    },
    author_id: {
      type: String,
      unique: true,
    },
    questions: {
      type: Array,
      required: true,
      // should be linked the schema of the question
    },
  },
  { timestamps: true }
);

const Survey = mongoose.model('Survey', SurveySchema);

export default Survey;

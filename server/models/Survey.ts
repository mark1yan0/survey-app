import mongoose from 'mongoose';
import { ISurvey } from './interfaces/Survey';

// TODO: add survey interface
// TODO: define a correct model
// TODO: create methods to create, get, and delete a survey
// TODO: define correct names for db

const SurveySchema = new mongoose.Schema<ISurvey>(
  {
    author: {
      type: String,
      required: true,
    },
    author_id: {
      type: String,
      unique: true,
    },
    title: {
      type: String,
      required: true,
    },
    type: { type: String },
    questions: [
      {
        fieldName: String,
        title: String,
        type: { type: String }, // mongoose will interpret this as type definition and not actual key
        options: [
          {
            value: String,
            type: { type: String },
            label: String,
          },
        ],
      },
    ],
  },
  { timestamps: true }
);

const Survey = mongoose.model<ISurvey>('Survey', SurveySchema);

export default Survey;

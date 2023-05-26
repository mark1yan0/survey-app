import mongoose from 'mongoose';
import vars from '../constants/vars';

export default async function connectDb() {
  if (typeof vars.mongodb_uri !== 'string') {
    throw new Error('Error connecting to DB: a db URI env must be provided');
  }
  try {
    console.log('Connecting to db...');
    return await mongoose.connect(vars.mongodb_uri, {
      dbName: '', //vars.mongodb_name,
    });
  } catch (error) {
    console.log('Connection to DB error: ', error);
    return error;
  }
}

import mongoose from 'mongoose';

export default async function connectDb() {
  if (typeof process.env.MONGODB_URI !== 'string') {
    throw new Error('Error connecting to DB: a db URI env must be provided');
  }
  try {
    return await mongoose.connect(process.env.MONGODB_URI);
  } catch (error) {
    console.log('Connection to DB error: ', error);
    return error;
  }
}

import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

const main = async () => {
  await mongoose.connect(process.env.MONGODB_URI, {
    dbName: process.env.MONGODB_DBNAME,
    user: process.env.MONGODB_USER,
    pass: process.env.MONGODB_PASSWORD,
  });

  const personSchema = mongoose.Schema({
    firstName: String,
    lastName: String,
    age: Number,
  });

  const Person = mongoose.model('Person', personSchema);

  const bob = new Person({
    firstName: 'Bob',
    lastName: 'Dev',
    age: 89,
  });

  await bob.save();

  await Person.findByIdAndUpdate('637290fd7fbce2b7f08a68c6', {
    age: 99,
  });
  console.log('Updated Bob, YAY');
};

main().catch((err) => console.error(err));

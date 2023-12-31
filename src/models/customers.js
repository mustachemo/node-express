import mongoose from 'mongoose';

const customerSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      unique: true,
      trim: true,
      lowercase: true,
      minlength: 3,
      maxlength: 20,
    },
    age: {
      type: Number,
      max: 120,
    },
    cute: Boolean,
  },
  { timestamps: true, collection: 'customers', versionKey: false }
);

const Customer = mongoose.model('customers', customerSchema);

export default Customer;

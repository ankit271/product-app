import { Schema, model, Document } from 'mongoose';

interface IProduct extends Document {
  name: string;
  description: string;
  price: number;
  category: string;
  createdAt: Date;
  updatedAt: Date;
}

const ProductSchema = new Schema<IProduct>(
  {
    name: {
      type: String,
      required: [true, 'Please add a name'],
      trim: true,
      maxlength: [50, 'Name cannot be more than 50 characters'],
    },
    description: {
      type: String,
      required: [true, 'Please add a description'],
      maxlength: [500, 'Description cannot be more than 500 characters'],
    },
    price: {
      type: Number,
      required: [true, 'Please add a price'],
      min: [0, 'Price must be at least 0'],
    },
    category: {
      type: String,
      required: [true, 'Please add a category'],
      enum: ['Electronics', 'Clothing', 'Books', 'Other'],
    },
  },
  {
    timestamps: true,
  }
);

export default model<IProduct>('Product', ProductSchema);
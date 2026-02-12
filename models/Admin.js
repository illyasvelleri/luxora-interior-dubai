// models/Admin.js
import mongoose from 'mongoose';

const adminSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true, trim: true, lowercase: true },
  passwordHash: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
  lastLogin: { type: Date },
});

const Admin = mongoose.models?.Admin || mongoose.model('Admin', adminSchema);

export default Admin;
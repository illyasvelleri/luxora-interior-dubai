

// // lib/auth.js
// import bcrypt from 'bcryptjs';
// import jwt from 'jsonwebtoken';
// import { cookies } from 'next/headers';

// import connectDB from './db.js';
// import Admin from '../models/Admin.js';

// const JWT_SECRET = process.env.JWT_SECRET;

// // Only run seeding once (in-memory flag)
// let hasSeeded = false;

// async function seedAdminIfNeeded() {
//   if (hasSeeded) return;

//   try {
//     await connectDB();

//     // Check if admin already exists
//     const existingAdmin = await Admin.findOne({ username: process.env.ADMIN_USERNAME });

//     if (existingAdmin) {
//       console.log('Admin user already exists in database. Using DB credentials.');
//       hasSeeded = true;
//       return;
//     }

//     const plainPassword = process.env.ADMIN_PASSWORD_HASH; // ← we're using this key as initial plain password

//     if (!plainPassword || plainPassword.length > 30) {
//       console.warn('No valid plain password found in ADMIN_PASSWORD_HASH env. Skipping seed.');
//       return;
//     }

//     console.log('No admin found in DB → Creating initial admin user...');

//     const salt = await bcrypt.genSalt(12);
//     const passwordHash = await bcrypt.hash(plainPassword, salt);

//     await Admin.create({
//       username: process.env.ADMIN_USERNAME,
//       passwordHash,
//     });

//     console.log('✅ Initial admin user created successfully in MongoDB');
//     console.log('You can now safely remove or change ADMIN_PASSWORD_HASH in .env');

//     hasSeeded = true;
//   } catch (err) {
//     console.error('Failed to seed admin user:', err.message);
//   }
// }

// // Run seeding automatically when module loads (only once)
// seedAdminIfNeeded().catch(console.error);

// async function verifyCredentials(username, password) {
//   try {
//     await connectDB();

//     const admin = await Admin.findOne({ username });

//     if (!admin) {
//       console.log('→ Login failed: user not found in DB');
//       return false;
//     }

//     const match = await bcrypt.compare(password, admin.passwordHash);

//     if (match) {
//       // Optional: update last login
//       admin.lastLogin = new Date();
//       await admin.save();
//       console.log('→ Login succeeded');
//     } else {
//       console.log('→ Login failed: password incorrect');
//     }

//     return match;
//   } catch (err) {
//     console.error('Auth error:', err);
//     return false;
//   }
// }

// async function createToken(username) {
//   return jwt.sign(
//     { role: 'admin', username },
//     JWT_SECRET,
//     { expiresIn: '8h' }
//   );
// }

// async function verifyToken(token) {
//   try {
//     const decoded = jwt.verify(token, JWT_SECRET);
//     return !!decoded;
//   } catch (err) {
//     return false;
//   }
// }

// function getAdminToken() {
//   const cookieStore = cookies();
//   return cookieStore.get('admin_token')?.value;
// }

// export {
//   verifyCredentials,
//   createToken,
//   verifyToken,
//   getAdminToken,
// };



// lib/auth.js
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { cookies } from 'next/headers';

import connectDB from './db.js';
import Admin from '../models/Admin.js';

const JWT_SECRET = process.env.JWT_SECRET;

if (!JWT_SECRET) {
  throw new Error('JWT_SECRET missing in environment variables');
}

// Seed only once per server lifecycle
let hasSeeded = false;

async function seedAdminIfNeeded() {
  if (hasSeeded) return;

  await connectDB();

  const existingAdmin = await Admin.findOne({
    username: process.env.ADMIN_USERNAME,
  });

  if (existingAdmin) {
    hasSeeded = true;
    return;
  }

  const plainPassword = process.env.ADMIN_PASSWORD_HASH;

  if (!plainPassword) {
    console.warn('ADMIN_PASSWORD_HASH missing. Skipping seed.');
    return;
  }

  const salt = await bcrypt.genSalt(12);
  const passwordHash = await bcrypt.hash(plainPassword, salt);

  await Admin.create({
    username: process.env.ADMIN_USERNAME,
    passwordHash,
  });

  console.log('✅ Admin seeded successfully');
  hasSeeded = true;
}

seedAdminIfNeeded().catch(console.error);

async function verifyCredentials(username, password) {
  await connectDB();

  const admin = await Admin.findOne({ username });

  if (!admin) return false;

  const match = await bcrypt.compare(password, admin.passwordHash);

  if (match) {
    admin.lastLogin = new Date();
    await admin.save();
  }

  return match;
}

function createToken(username) {
  return jwt.sign(
    { role: 'admin', username },
    JWT_SECRET,
    { expiresIn: '8h' }
  );
}

function verifyToken(token) {
  try {
    const decoded = jwt.verify(token, JWT_SECRET);

    if (decoded.role !== 'admin') return false;

    return true;
  } catch {
    return false;
  }
}

function getAdminToken() {
  const cookieStore = cookies();
  return cookieStore.get('admin_token')?.value;
}

export {
  verifyCredentials,
  createToken,
  verifyToken,
  getAdminToken,
};

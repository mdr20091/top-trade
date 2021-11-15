import jwt from 'jsonwebtoken';
import expressAsyncHandler from 'express-async-handler';
import User from '../models/userModel.js';

const protect = expressAsyncHandler(async (req, res, next) => {
  let token;

  if (
    req.header.authorization &&
    req.header.authorization.startWith('Bearer')
  ) {
    console.log('token found');
  }

  try {
    token = req.header.authorization.split(' ')[1];
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = await User.findById(decoded.id).select('-password');

    next();
  } catch (error) {
    console.error(error);
    res.status(401);
    throw new Error('Not authorized, no token');
  }

  // if (!token) {
  //   res.status(401);
  //   throw new Error('Not Authorized no token');
  // }
});

export { protect };

import dotenv from 'dotenv';
import path from 'path';
import { __dirname } from './globals.js';

dotenv.config({
  path: path.join(
    __dirname,
    process.env.NODE_ENV === 'dev' ? '.env.dev' : '.env.prod'
  )
});

export const PORT = process.env.PORT || 80;

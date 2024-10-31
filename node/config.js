import dotenv from 'dotenv';
dotenv.config();
export const  TRACT_Server = process.env.WWW_TRACT_ORIGIN || 'http://3.130.27.77';
export const  WWW_TRACT_ORIGIN = process.env.WWW_TRACT_ORIGIN || 'http://www.librosmaldonado.shop';
export const  TRACT_ORIGIN = process.env.TRACT_ORIGIN || 'http://librosmaldonado.shop';
export const REQUEST_URL = process.env.REQUEST_URL || '/LibMal';
export const MONGO_URL = process.env.MONGO_URL || 'mongodb://localhost:27017/LibMal';
export const BACK_POT = process.env.BACK_POT || 3000

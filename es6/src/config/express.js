import express from 'express';
export const app = new express();
app.use(express.urlencoded({ extended : true }));
app.use(express.json());
export const router = express.Router();







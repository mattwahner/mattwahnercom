import express from 'express';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';

const router = express.Router();

router.post('/', (req, res) => {
    if (bcrypt.compareSync(req.body.password, process.env.PASSWORD))
        res.json({ token: jwt.sign({}, process.env.JWT_SECRET) });
    else
        res.status(400).json({ message: 'Invalid credentials' });
});

export default router;
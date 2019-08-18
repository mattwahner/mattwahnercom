import jwt from 'jsonwebtoken';

export default (req, res, next) => {
    const header = req.headers.authorization;
    let token;

    if (header) token = header.split(' ')[1];

    if (token) {
        jwt.verify(token, process.env.JWT_SECRET, (error, decoded) => {
            if (error)
                res.status(401).json({ error: "Invalid token"});
            else
                next();
        });
    } else {
        res.status(401).json({ error: 'No token!' });
    }
};

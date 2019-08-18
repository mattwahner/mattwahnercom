import express from 'express';
import auth from "../middlewares/auth";
import Message from '../models/Message';

const router = express.Router();

let message = 'In room';

router.route('/')
    .get((req, res) => {
        res.json({ message });
    });

router.use(auth);

router.route('/')
    .post((req, res) => {
        message = req.body.text;
        res.json({ message: 'Location saved' });
    });

const validate = (text) => {
    //if (text.length > 16)
    //    return 'Message must be under 16 characters!';
    if (text.trim().length === 0)
        return 'Message must not be empty!';
    if (!/^[A-Za-z0-9 <>]*$/.test(text))
        return ('Message must contain only normal characters!');
    var words = text.split(' ');
    var line1 = '';
    var line2 = '';
    while (words.length > 0 && line1.concat(' ' + words[0]).trim().length <= 16) {
        line1 = line1.concat(' ' + words.shift()).trim();
    }
    line2 = words.join(' ');
    if (line1.length > 16 || line2.length > 16)
        return 'Message does not wrap correctly';
};

router.route('/messages')
    .get((req, res) => {
        Message.find((error, messages) => {
            if (error)
                res.send(error);
            else
                res.json(messages);
        })
    })
    .post((req, res) => {
        const error = validate(req.body.text);
        if (error)
            res.status(400).json({ error });
        else {
            let message = new Message();
            message.text = req.body.text;

            message.save((error) => {
                if (error)
                    res.send(error);
                else
                    res.json(message);
            });
        }
    });

router.route('/messages/:message_id')
    .get((req, res) => {
        Message.findById(req.params.message_id, (error, message) => {
            if (error)
                res.send(error);
            else
                res.json(message);
        })
    })
    .put((req, res) => {
        const error = validate(req.body.text);
        if (error)
            res.status(400).json({ error });
        else {
            Message.findById(req.params.message_id, (error, message) => {
                if (error)
                    res.send(error);
                else {
                    message.text = req.body.text;

                    message.save((error) => {
                        if (error)
                            res.send(error);
                        else
                            res.json(message);
                    })
                }
            })
        }
    })
    .delete((req, res) => {
        Message.remove({
            _id: req.params.message_id
        }, (error, message) => {
            if (error)
                res.send(error);
            else
                res.json(message);
        });
    });

export default router;

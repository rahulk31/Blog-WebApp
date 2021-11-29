const router = require('express').Router();
const User = require('../models/User');
const bcrypt = require('bcrypt');

// UPDATE
router.put('/:id', async (req, res) => {
    if(req.body.userId === req.params.id) {
        if(req.body.password) {
            const salt = await bcrypt.genSalt(10);
            req.body.password = await bcrypt.hash(req.body.password, salt);
        }
        try {
            const updateUser = await User.findByIdAndUpdate(req.params.id, {
                $set: req.body
            });
            res.status(200).json(updateUser)
        } catch (err) {
          res.send(err.message);
        }
    } else {
        res.status(401).json('You')
    }
});


// DELETE

module.exports = router;

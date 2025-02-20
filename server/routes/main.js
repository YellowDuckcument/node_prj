const express = require('express')
const { render } = require('express/lib/response')
const router = express.Router()


router.get('', (req, res) => {
    const locals = {
        title: 'NodeJs Blog',
        description: "Simple plog create by nodeJS"
    }

    res.render('index', {locals})
})

router.get('/about',  (req, res) => res.render('about'))

module.exports = router









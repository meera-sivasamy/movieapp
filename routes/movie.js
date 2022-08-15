const express   = require('express')
const router    = express.Router()

const MovieController = require('../controllers/MovieController')

router.get('/', MovieController.index)
router.post('/show', MovieController.show )
router.post('/store', MovieController.store)
router.post('/update', MovieController.update)
router.post('/delete', MovieController.destroy)

module.exports = router
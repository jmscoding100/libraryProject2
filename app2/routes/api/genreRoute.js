const express = require('express')
const router = express.Router()
const { genreDao: dao} = require('../../daos/dao')


//findAll 
//localhost:3005/api/genre
router.get('/', (req, res)=>{
    dao.findGenre(res, dao.table)
})

//find by genre
router.get('/genre/:genre', (req, res)=>{
    dao.findBookByGenre(res, dao.table, req.params.genre)
})


router.post('/genre/update/:id', (req, res)=>{
    dao.update(req, res, dao.table)
})

module.exports = router
const express = require('express')
const router = express.Router()
const { publishingDao: dao} = require('../../daos/dao')


//findAll 
//localhost:3005/api/genre
router.get('/', (req, res)=>{
    dao.findPublisher(res, dao.table)
})


router.get('/publishing/:publishing_company',(req, res)=>{
    dao.findBookByPublisher(res, dao.table, req.params.publishing_company)
})

router.get('/sort', (req, res)=>{
    dao.sort(res, dao.table)
})


module.exports = router
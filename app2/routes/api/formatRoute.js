const express = require('express')
const router = express.Router()
const { formatDao: dao} = require('../../daos/dao')


//findAll 
//localhost:3005/api/format
router.get('/', (req, res)=>{
    dao.findFormat(res, dao.table)
})

router.get('/format/:format', (req, res)=>{
    dao.findBookByFormat(res, dao.table, req.params.format)
})

module.exports = router
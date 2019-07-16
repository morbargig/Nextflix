const request = require("request")
const express = require('express')
const router = express.Router()
const watchedShow = require("../model/watchedShow")
const blackList = require("../model/blackList")
const wishList = require("../model/wishList")
const bodyParser = require('body-parser')
// const path = require('path')

// router.use(express.static(path.join(__dirname, 'dist')))
// router.use(express.static(path.join(__dirname, 'node_modules')))
router.use(bodyParser.json())
router.use(bodyParser.urlencoded({ extended: false }))


router.get("/show/:showname", function (req, res) {
    const showname = req.params.showname
    request(`http://api.tvmaze.com/singlesearch/shows?q=${showname}`, function (error, response,body) {
        let data = JSON.parse(body)
        let newData = {
            name : data.name,
            language : data.language,
            genres: data.genres,
            premiered:data.premiered,
            rating:data.rating.average,
            mediumImg:data.image.medium,
            originalImag:data.image.original,
            summary:data.summary,
            runTime:data.runtime,
            status:data.status,
            id:data.id,
        }

        res.send(newData)
    })

})

router.get("/watchedShows",function(req,res){
    watchedShow.find({},function(err,show){
    res.send(show)
    })
})

router.get("/blackList",function(req,res){
    blackList.find({},function(err,show){
    res.send(show)
    console.log(show)
    })
})

router.get("/wishList",function(req,res){
    wishList.find({},function(err,show){
    res.send(show)
    })
})

router.post('/watchedShow', function (req, res) {
    let info = req.body
    let ws1 = new watchedShow(info)
    ws1.save()

    res.end("saved")
})

router.post('/blackList', function (req, res) {
    let info = req.body
    let bl1 = new blackList(info)
    bl1.save()

    res.end("saved")
})

router.post('/wishList', function (req, res) {
    let info = req.body
    let wl1 = new wishList(info)
    wl1.save()

    res.end("saved")
})

router.delete('/wishList/:showname', function (req, res) {
    // console.log("remove")
    const showName = req.params.showname
    // console.log(showName)
    wishList.findOneAndDelete({ name: showName }, function (err) {
        res.end()
    })
})
router.delete('/watchedShow/:showname', function (req, res) {
    // console.log("remove")
    const showName = req.params.showname
    // console.log(showName)
    watchedShow.findOneAndDelete({ name: showName }, function (err) {
        res.end()
    })
})


router.delete('/blackList/:showname', function (req, res) {
    // console.log("remove")
    const showName = req.params.showname
    // console.log(showName)
    blackList.findOneAndDelete({ name: showName }, function (err) {
        res.end()
    })
})


module.exports = router
const request = require("request")
const express = require('express')
const router = express.Router()
const Show = require("../dist/show")
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

router.get("/shows",function(req,res){
    Show.find({},function(err,show){
    res.send(show)
    })
})

router.post('/show', function (req, res) {
    let info = req.body
     console.log(req.body)
    let s1 = new Show(info)
    s1.save()

    res.end("saved")
})


router.delete('/show/:showname', function (req, res) {
    // console.log("remove")
    const showName = req.params.showname
    // console.log(showName)
    Show.findOneAndDelete({ name: showName }, function (err) {
        res.end()
    })
})


module.exports = router
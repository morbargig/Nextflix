

const request = require("request")
const express = require('express')
const router = express.Router()
// const Show = require("./Show")



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
            id:data.id
        }

        res.send(newData)
    })

})

router.get("/shows",function(req,res){
    Show.find({},function(err,show){
    res.send(show)
    })
})

router.post("/show" , function(req,res){
  const showdata = req.body
  const s1 = new Show(showdata)
  s1.save()
  res.end()
})


router.delete("/show/:showname",function(req,res){
    let show = req.params.showname 
    City.findOneAndDelete({ "name" : show}).then(function(){

    })
    res.end()
})


module.exports = router
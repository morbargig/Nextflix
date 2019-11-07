const request = require("request")
const express = require('express')
const router = express.Router()
const bodyParser = require('body-parser')
const watchedShow = require("../model/watchedShow")
const blackList = require("../model/blackList")
const wishList = require("../model/wishList")
// const path = require('path')
// router.use(express.static(path.join(__dirname, 'dist')))
// router.use(express.static(path.join(__dirname, 'node_modules')))



router.get('/homeScreen', function (req, res) {

    watchedShow.find({}, function (err, show) {
        // console.log(show)

        randomList = []
        let rdm = Math.floor(Math.random() * 43048)
        request(`http://api.tvmaze.com/shows/${rdm}`, function (error, response, body) {

            console.log(show.genres)

            randomList.push(show.genres)

            let rnd2 = Math.floor(Math.random() * show.length)
            myGenres = show[rnd2]
            // console.log(myGenres)
            console.log(randomList)
            if (body) {
                let data = JSON.parse(body || '{}')
                let newData = {
                    name: data.name,
                    language: data.language || "doesn't exist",
                    genres: data.genres,
                    premiered: data.premiered || 000000,
                    rating: data.rating ? data.rating.average : 0,
                    mediumImg: data.image ? data.image.medium : "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBhUQBxMWFRUXFhYYGBcVFxYbFhUWFxgYGhgXFhgaHSggGB0lHhYXJTEhJSkvLi4uFx8zODMsNygtLisBCgoKBQUFDgUFDisZExkrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrK//AABEIAOAA4AMBIgACEQEDEQH/xAAbAAEAAgMBAQAAAAAAAAAAAAAABAUCAwYBB//EADcQAQABAwICCAIIBgMAAAAAAAABAgMRBAUhMRJBUWFxgZGhEzMGIzJyscHw8RUiJEJi0SU0Uv/EABQBAQAAAAAAAAAAAAAAAAAAAAD/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwD68AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACNuGrjR2YqmM5nGASRX2d40tz7eafFNt3rV2PqqonwkGY1379uxRm7OPKVde3yzT8mmZ8eEAtRF27VTq9P0qoxOZiYhKAAAAAAAAAAAAAAAAAAABQ7zf1NvVzTFUxTiJiI4friC6u37NmPraojxlT7/d6V6minqjPnP7PdLs134kVX6o5xOOcy0x/Wb13dL2p/YE/+Daeq1HOJxxx2ol3Zb1E5sVRPtK31eop0tia6+OOrvRtu3KNZXNNUYnn3Arvibpo/tdKY7/5o9Xn8Q093/tWqZ744S6Fpu6Wxe+ZTE/j6ggbdqNBZzFqqYzjhV1ea0prprj+SYnwmJVt7ZLFXy5mn3hCubTq9Pxs1ROOycT6A6AUuzarU39T0a6sxETM59uK6AAAAAAAAAAAAAAAAAU/0htZoprjwnzXCLudr42hqjsjPoDXp9V/xHTnnFMx5xwj8kH6PWs3Kq56ox682q5M2dlpj/3VM+Ufss9mtRa0ETPXmQS79mi/amm5ylH0egs6OZmiZz2z1KzcN1qqvxGmnhTOfvT/AKYbjulWpp6NnhHX2zP+gX9u5RdozbnMNOt1lrSW83OfVHXKj2/catHaqpxns7pRL965fuTVdnMyDrqKulRE9sIu6XfhaGrvjEefD8Mtmgq6eion/GFd9IbuKaaI8QZfR61i1VXPXOPKFsjbda+DoqY7s+vFJAAAAAAAAAAAAAAAAAJiJjiHiDnd6qpi/Tbo5UUxH69k7TbtpfhxTXE04iI5Zj2U2qu/G1NVXbM+nV7NQOkmxt+sj+Toz92cT6I17Y6J+TVMePFSRwngk2dfqrP2ap8+P4g23tq1dvlHS+7P5c0Kuiu3OK4mPGFrZ3yuPnUxPhOEyjc9FqIxc4d1UAz2arpbdT3Zj3Veu/q946McsxT6c/zXVurT2bEzYxiMzwU2yUTe1011dUTPnP6kHQeAAAAAAAAAAAAAAAAAADC9RNy1NNM4mYmMswHO3tn1Vv7GKvDmg3LVy1P1kTHjDq9VRVXpqotzicTiY556nP2911NMYuTFUdlUQCC9WluvS6ycVWaontt5/Dk23NkzGbNWO6qAUwmXtr1dr+3Mf48USqmqicVxMeMYB5EzHJf7Ba6Olmqf7p9oc+67SWvg6amnsiPXrBtAAAAAAAAAAAAAAAAAAAARre36W3VmKY8+KSARERGIAAY10UXIxciJ8WQCHVtekqriYpxMTnhyTAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAB//Z",
                    originalImag: data.image ? data.image.original : "doesn't exist",
                    summary: data.summary || "doesn't exist",
                    runTime: data.runtime || 0,
                    status: data.status || "doesn't exist",
                    id: data.id || 0,
                }
                res.send(newData)
            }
            else { res.send('') }
        }
        )
    }
    )
})


router.get("/show/:showname", function (req, res) {
    const showname = req.params.showname
    request(`http://api.tvmaze.com/singlesearch/shows?q=${showname}`, function (error, response, body) {
        if (body) {
            let data = JSON.parse(body || '{}')
            // console.log(data)
            let newData = {
                name: data.name,
                language: data.language || "doesn't exist",
                genres: data.genres,
                premiered: data.premiered || 000000,
                rating: data.rating ? data.rating.average : 0,
                mediumImg: data.image ? data.image.medium : "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBhUQBxMWFRUXFhYYGBcVFxYbFhUWFxgYGhgXFhgaHSggGB0lHhYXJTEhJSkvLi4uFx8zODMsNygtLisBCgoKBQUFDgUFDisZExkrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrK//AABEIAOAA4AMBIgACEQEDEQH/xAAbAAEAAgMBAQAAAAAAAAAAAAAABAUCAwYBB//EADcQAQABAwICCAIIBgMAAAAAAAABAgMRBAUhMRJBUWFxgZGhEzMGIzJyscHw8RUiJEJi0SU0Uv/EABQBAQAAAAAAAAAAAAAAAAAAAAD/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwD68AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACNuGrjR2YqmM5nGASRX2d40tz7eafFNt3rV2PqqonwkGY1379uxRm7OPKVde3yzT8mmZ8eEAtRF27VTq9P0qoxOZiYhKAAAAAAAAAAAAAAAAAAABQ7zf1NvVzTFUxTiJiI4friC6u37NmPraojxlT7/d6V6minqjPnP7PdLs134kVX6o5xOOcy0x/Wb13dL2p/YE/+Daeq1HOJxxx2ol3Zb1E5sVRPtK31eop0tia6+OOrvRtu3KNZXNNUYnn3Arvibpo/tdKY7/5o9Xn8Q093/tWqZ744S6Fpu6Wxe+ZTE/j6ggbdqNBZzFqqYzjhV1ea0prprj+SYnwmJVt7ZLFXy5mn3hCubTq9Pxs1ROOycT6A6AUuzarU39T0a6sxETM59uK6AAAAAAAAAAAAAAAAAU/0htZoprjwnzXCLudr42hqjsjPoDXp9V/xHTnnFMx5xwj8kH6PWs3Kq56ox682q5M2dlpj/3VM+Ufss9mtRa0ETPXmQS79mi/amm5ylH0egs6OZmiZz2z1KzcN1qqvxGmnhTOfvT/AKYbjulWpp6NnhHX2zP+gX9u5RdozbnMNOt1lrSW83OfVHXKj2/catHaqpxns7pRL965fuTVdnMyDrqKulRE9sIu6XfhaGrvjEefD8Mtmgq6eion/GFd9IbuKaaI8QZfR61i1VXPXOPKFsjbda+DoqY7s+vFJAAAAAAAAAAAAAAAAAJiJjiHiDnd6qpi/Tbo5UUxH69k7TbtpfhxTXE04iI5Zj2U2qu/G1NVXbM+nV7NQOkmxt+sj+Toz92cT6I17Y6J+TVMePFSRwngk2dfqrP2ap8+P4g23tq1dvlHS+7P5c0Kuiu3OK4mPGFrZ3yuPnUxPhOEyjc9FqIxc4d1UAz2arpbdT3Zj3Veu/q946McsxT6c/zXVurT2bEzYxiMzwU2yUTe1011dUTPnP6kHQeAAAAAAAAAAAAAAAAAADC9RNy1NNM4mYmMswHO3tn1Vv7GKvDmg3LVy1P1kTHjDq9VRVXpqotzicTiY556nP2911NMYuTFUdlUQCC9WluvS6ycVWaontt5/Dk23NkzGbNWO6qAUwmXtr1dr+3Mf48USqmqicVxMeMYB5EzHJf7Ba6Olmqf7p9oc+67SWvg6amnsiPXrBtAAAAAAAAAAAAAAAAAAAARre36W3VmKY8+KSARERGIAAY10UXIxciJ8WQCHVtekqriYpxMTnhyTAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAB//Z",
                originalImag: data.image ? data.image.original : "doesn't exist",
                summary: data.summary || "doesn't exist",
                runTime: data.runtime || 0,
                status: data.status || "doesn't exist",
                id: data.id || 0,
            }
            res.send(newData)
        }
        else { res.send('') }
    }
    )
})



router.get("/watchedShow", function (req, res) {
    watchedShow.find({}, function (err, show) {
        res.send(show)
    })
})

router.get("/blackList", function (req, res) {
    blackList.find({}, function (err, show) {
        res.send(show)
    })
})

router.get("/wishList", function (req, res) {
    wishList.find({}, function (err, show) {
        res.send(show)
    })
})

router.post('/watchedShow', function (req, res) {
    req.body.genres = req.body["genres[]"]
    let info = req.body
    console.log(info)

    let ws1 = new watchedShow(info)

    console.log(ws1)
    ws1.save()

    res.end("saved")
})

router.post('/blackList', function (req, res) {
    req.body.genres = req.body["genres[]"]
    let info = req.body
    let bl1 = new blackList(info)
    bl1.save()

    res.end("saved")
})

router.post('/wishList', function (req, res) {
    req.body.genres = req.body["genres[]"]
    let info = req.body
    let wl1 = new wishList(info)
    wl1.save()

    res.end("saved")
})


// router.post('/homeScreen', function (req, res) {
//     req.body.genres = req.body["genres[]"]
//     let info = req.body
//     let hl1 = new homeScreen(info)
//     hl1.save()

//     res.end("saved")
// })

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
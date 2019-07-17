const tempMeneger = new TempManager
const render = new Render



const blackListLoadPage = async function () {
    tempMeneger.blackList = []
    await tempMeneger.blackListDB()
    const d = tempMeneger.blackList
    await render.renderer(d,'blackList')
}


const watchedShowsLoadPage = async function () {
    tempMeneger.watchedShows = []
    await tempMeneger.watchedShowsDB()
    const d = tempMeneger.watchedShows

    await render.renderer(d,'watchedShow')
        
}


const wishListLoadPage = async function () {
    tempMeneger.wishList = []
    await tempMeneger.wishListDB()
    const d = tempMeneger.wishList
    await render.renderer(d,'wishList')
}

//////////////////////////////////////////////////////////////////////

const showSearch = async function () {
    const input = $("#input").val()
    await tempMeneger.getShowData(input)
    const d = tempMeneger.standby
    console.log(d)
    await render.renderer(d,"first")
}

///////////////////////////////////////////////////
$("body").on("click", ".blackListButton", function () {
    const name = $(this).siblings('h2').text()
    tempMeneger.blackListSave(name)
})

$("body").on("click", ".watchedShowButton", function () {
    const name = $(this).siblings('h2').text()
    tempMeneger.watchedShowSave(name)
})

$("body").on("click", ".wishListButton", function () {
    const name = $(this).siblings('h2').text()
    tempMeneger.wishListSave(name)
})

///////////////////////////////////////////

$("body").on("click", ".removeSohwButton",async function () {
    const name = $(this).siblings('h2').text()
    await tempMeneger.watchedShowsRemove(name)
    // await location.reload()
    await watchedShowsLoadPage()
})

$("body").on("click", ".removeWishListButton", async function () {
    const name = $(this).siblings('h2').text()
    console.log(name)
    await tempMeneger.wishListRemove(name)
    await wishListLoadPage()
    // await location.reload()
})

$("body").on("click", ".removeBlackListButton", async function () {
    const name = $(this).siblings('h2').text()
    await tempMeneger.blackListRemove(name)
    await blackListLoadPage()
    // await location.reload()
})

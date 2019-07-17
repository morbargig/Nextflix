const tempMeneger = new TempManager
const render = new Render



const blackListLoadPage = async function () {
    await tempMeneger.blackListDB()
    const d = tempMeneger.blackList
    await render.renderer(d,'blackList')
}


const watchedShowsLoadPage = async function () {
    await tempMeneger.watchedShowsDB()
    const d = tempMeneger.watchedShows
    await render.renderer(d,'watchedShow')
}


const wishListLoadPage = async function () {
    await tempMeneger.wishListDB()
    const d = tempMeneger.wishList
    await render.renderer(d,'wishList')
}

//////////////////////////////////////////////////////////////////////

const showSearch = async function () {
    const input = $("#input").val()
    await tempMeneger.getShowData(input)
    const d = tempMeneger.standby
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
    watchedShowsLoadPage()
    await location.reload()
})

$("body").on("click", ".removeWishListButton", async function () {
    const name = $(this).siblings('h2').text()
    await tempMeneger.wishListRemove(name)
    wishListLoadPage()
    await location.reload()
})

$("body").on("click", ".removeBlackListButton", async function () {
    const name = $(this).siblings('h2').text()
    await tempMeneger.blackListRemove(name)
    blackListLoadPage()
    await location.reload()
})
 
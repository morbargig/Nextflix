const tempMeneger = new TempManager
const render = new Render



const blackListLoadPage = async function () {
    await tempMeneger.blackListDB()
    const d = tempMeneger.blackList
    await render.blackListRender(d)
}


const watchedShowsLoadPage = async function () {
    await tempMeneger.watchedShowsDB()
    const d = tempMeneger.watchedShows
    await render.watchedShowRender(d)
}


const wishListLoadPage = async function () {
    await tempMeneger.wishListDB()
    const d = tempMeneger.wishList
    await render.wishListRender(d)
}

//////////////////////////////////////////////////////////////////////

const showSearch = async function () {
    const input = $("#input").val()
    await tempMeneger.getShowData(input)
    const d = tempMeneger.standby
    await render.renderer(d)
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

// $("body").on("click", ".deletebutton", function () {
//     const name = $(this).siblings('h2').text()
//     tempMeneger.removeCity(name)
//     location.reload()
// })

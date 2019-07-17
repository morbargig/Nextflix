const tempMeneger = new TempManager
const render = new Render



const blackListLoadPage = async function () {
    tempMeneger.blackList = []
    await tempMeneger.blackListDB()
    let d = tempMeneger.blackList
    await render.renderer(d,'blackList')
}


const watchedShowsLoadPage = async function () {
    tempMeneger.watchedShows = []
    await tempMeneger.watchedShowsDB()
    let d = tempMeneger.watchedShows

    await render.renderer(d,'watchedShow')
        
}


const wishListLoadPage = async function () {
    tempMeneger.wishList = []
    await tempMeneger.wishListDB()
    let d = tempMeneger.wishList
    await render.renderer(d,'wishList')
}

//////////////////////////////////////////////////////////////////////
const searchLoadPage = async function (){
    tempMeneger.wishList = []
    await render.renderer(tempMeneger.wishList,"first")
}

const showSearch = async function () {
    tempMeneger.standby = []
    const input = $("#input").val()
    await tempMeneger.getShowData(input)
    await render.renderer(tempMeneger.standby,"first")
}

///////////////////////////////////////////////////
$("body").on("click", ".blackListButton", function () {
    const name = $(this).siblings('h2').text()
    tempMeneger.blackListSave(name)

    searchLoadPage()
})

$("body").on("click", ".watchedShowButton", function () {
    const name = $(this).siblings('h2').text()
    tempMeneger.watchedShowSave(name)
    searchLoadPage()
})

$("body").on("click", ".wishListButton", function () {
    const name = $(this).siblings('h2').text()
    tempMeneger.wishListSave(name)
    searchLoadPage()
})

$("body").on("click", ".watchedShowButtonInWishList",async function () {
    const name = $(this).siblings('h2').text()
    await tempMeneger.watchedShowwSave(name)
    await tempMeneger.wishListRemove(name)
     wishListLoadPage()

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
    // location.reload()
})



///////for css 
function myFunction(x) {
    x.classList.toggle("change");
  }

  let a=0
$("body").on("click", ".container", function(){
    if(a==0) {
        $(".slider").addClass("opened-slider")
        a=1
    }
    else{
        a=0
        console.log("achmed")
        $(".slider").removeClass("opened-slider")}
})
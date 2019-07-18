const tempMeneger = new TempManager
const render = new Render


/////////////////////load page
const blackListLoadPage = async function () {
    tempMeneger.blackList = []
    await tempMeneger.blackListDB()
    let d = tempMeneger.blackList
    await render.renderer(d, 'blackList')
}


const watchedShowLoadPage = async function () {
    tempMeneger.watchedShow = []
    await tempMeneger.watchedShowDB()
    let d = tempMeneger.watchedShow

    await render.renderer(d, 'watchedShow')

}


const wishListLoadPage = async function () {
    tempMeneger.wishList = []
    await tempMeneger.wishListDB()
    let d = tempMeneger.wishList
    await render.renderer(d, 'wishList')
}


const homeScreenLoadPage = async function () {
    tempMeneger.homeScreen = []
    await tempMeneger.getHomeScreen()
    const d = tempMeneger.homeScreen
    await render.renderer(d, 'homeScreen')
}


//////////////////////////////////////////////////////////////////////
const searchLoadPage = async function () {
    tempMeneger.wishList = []
    await render.renderer(tempMeneger.wishList, "first")
    enter()
}

const showSearch = async function () {
    tempMeneger.standby = []
    const input = $("#input").val()
    await tempMeneger.getShowData(input)
    await render.renderer(tempMeneger.standby, "first")
}

//////////////////////////on click render
$("body").on("click", ".blackListButton2", async function () {
    const name = $(this).siblings('h2').text()
    // tempMeneger.blackList = []
    // await tempMeneger.blackList2DB()
    await tempMeneger.blackListSave2(name)
    await homeScreenLoadPage()

})
$("body").on("click", ".watchedShowButton2", async function () {
    const name = $(this).siblings('h2').text()
    // tempMeneger.watchedShows = []
    // await tempMeneger.watchedShowsDB()
    await tempMeneger.watchedShowSave2(name)
    await homeScreenLoadPage()

})


$("body").on("click", ".wishListButton2", async function () {
    const name = $(this).siblings('h2').text()
    // tempMeneger.wishList = []
    // await tempMeneger.wishListDB()
    await tempMeneger.wishListSave2(name)
    await homeScreenLoadPage()

})
///////////////////////////
$("body").on("click", ".watchedShowButton",async function () {
    const name = $(this).siblings('h2').text()
    tempMeneger.watchedShow = []
    await tempMeneger.watchedShowDB()
    console.log(name)
    console.log("hi")
    console.log(tempMeneger.watchedShow)
    let valid = 0
    for (let i of tempMeneger.watchedShow) {
        console.log('1')
        if (i.name == name) {
            console.log('2')
            alert('the show you are trying to add is already existing')
            valid = 1
            break
        }
        else {
            console.log('searching...')
        }
    }
    if (valid == 0) {
        console.log('3')
        tempMeneger.watchedShowSave(name)
        searchLoadPage()
    }
    else {
        console.log('4')
        alert('the show exists')
    }
})

$("body").on("click", ".blackListButton",async function () {
    const name = $(this).siblings('h2').text()
    tempMeneger.blackList = []
    await tempMeneger.blackListDB()
    console.log(name)
    console.log("hi")
    console.log(tempMeneger.blackList)
    let valid = 0
    for (let i of tempMeneger.blackList) {
        console.log('1')
        if (i.name == name) {
            console.log('2')
            alert('the show you are trying to add is already existing')
            valid = 1
            break
        }
        else {
            console.log('searching...')
        }
    }
    if (valid == 0) {
        console.log('3')
        tempMeneger.blackListSave(name)
        searchLoadPage()
    }
    else {
        console.log('4')
        alert('the show exists')
    }
})


$("body").on("click", ".wishListButton",async function () {
    const name = $(this).siblings('h2').text()
    tempMeneger.wishList = []
    await tempMeneger.wishListDB()
    console.log(name)
    console.log("hi")
    console.log(tempMeneger.wishList)
    let valid = 0
    for (let i of tempMeneger.wishList) {
        console.log('1')
        if (i.name == name) {
            console.log('2')
            alert('the show you are trying to add is already existing')
            valid = 1
            break
        }
        else {
            console.log('searching...')
        }
    }
    if (valid == 0) {
        console.log('3')
        tempMeneger.wishListSave(name)
        searchLoadPage()
    }
    else {
        console.log('4')
        alert('the show exists')
    }
})


$("body").on("click", ".watchedShowButtonInWishList", async function () {
    const name = $(this).siblings('h2').text()
    await tempMeneger.watchedShowwSave(name)
    await tempMeneger.wishListRemove(name)
    wishListLoadPage()

})



/////////////////////////on click remove

$("body").on("click", ".removeSohwButton", async function () {
    const name = $(this).siblings('h2').text()
    await tempMeneger.watchedShowRemove(name)
    await watchedShowLoadPage()
})

$("body").on("click", ".removeWishListButton", async function () {
    const name = $(this).siblings('h2').text()
    console.log(name)
    await tempMeneger.wishListRemove(name)
    await wishListLoadPage()
})

$("body").on("click", ".removeBlackListButton", async function () {
    const name = $(this).siblings('h2').text()
    await tempMeneger.blackListRemove(name)
    await blackListLoadPage()
    
})



///////for css 
function myFunction(x) {
    x.classList.toggle("change");
}

let a = 0
$("body").on("click", ".container", function () {
    if (a == 0) {
        $(".slider").addClass("opened-slider")
        a = 1
    }
    else {
        a = 0
        console.log("achmed")
        $(".slider").removeClass("opened-slider")
    }
})

///////////////////////////enter refresh 
const enter = function () {
    let inputt = document.getElementById("input");
    // Execute a function when the user releases a key on the keyboard
    inputt.addEventListener("keyup", function (event) {
        // Number 13 is the "Enter" key on the keyboard
        if (event.keyCode === 13) {
            // Cancel the default action, if needed
            // event.preventDefault();
            // Trigger the button element with a click
            document.getElementById("searchbutton").click();
        }
    });

}
const tempMeneger = new TempManager
const render = new Render


/////////////////////load page
const blackListLoadPage = async function () {
    tempMeneger.blackList = []
    await tempMeneger.blackListDB()
    let d = tempMeneger.blackList
    await render.renderer(d, 'blackList')
}


const watchedShowLoadPage = async function (a) {
    tempMeneger.watchedShow = []
    await tempMeneger.watchedShowDB()
    if ( a === undefined){
        noBleckList(tempMeneger.watchedShow, watchedShowLoadPage,tempMeneger.watchedShowRemove)
    }
    await render.renderer(tempMeneger.watchedShow, 'watchedShow')

}


const wishListLoadPage = async function (a) {
    tempMeneger.wishList = []
    await tempMeneger.wishListDB()
    // console.log('hi')
    if ( a === undefined){
        noBleckList(tempMeneger.wishList, wishListLoadPage,tempMeneger.wishListRemove)
    }
    // console.log('hi')
    // if ( a === 1){
    //     wishListLoadPage()
    // }
    await render.renderer(tempMeneger.wishList, 'wishList')
}


const homeScreenLoadPage = async function (a) {
    tempMeneger.homeScreen = []
    await tempMeneger.getHomeScreen()
    tempMeneger.wishListRemove
    if ( a === undefined){
        noBleckList(tempMeneger.wishList, wishListLoadPage, enter)
    }
    await render.renderer(tempMeneger.homeScreen, 'homeScreen')
}


//////////////////////////////////////////////////////////////////////
const searchLoadPage = async function () {
    tempMeneger.wishList = []
    // console.log('hi')
    noBleckList(tempMeneger.standby,searchLoadPage)
    // console.log('hi')
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
$("body").on("click", "#blackListButton2", async function () {
    const name = $(this).siblings('h2').text()
    // tempMeneger.blackList = []
    // await tempMeneger.blackList2DB()
    await tempMeneger.blackListSave2(name)
    await homeScreenLoadPage()

})
$("body").on("click", "#watchedShowButton2", async function () {
    const name = $(this).siblings('h2').text()
    console.log(name)
    // tempMeneger.watchedShows = []
    // await tempMeneger.watchedShowsDB()
    await tempMeneger.watchedShowSave2(name)
    await homeScreenLoadPage()

})


$("body").on("click", "#wishListButton2", async function () {
    const name = $(this).siblings('h2').text()
    // tempMeneger.wishList = []
    // await tempMeneger.wishListDB()
    await tempMeneger.wishListSave2(name)
    await homeScreenLoadPage()

})
$("body").on("click", "#blackListButton4", async function () {
    const name = $(this).siblings('h2').text()
    // tempMeneger.blackList = []
    // await tempMeneger.blackList2DB()
    await tempMeneger.blackListSave2(name)
    await homeScreenLoadPage()

})
$("body").on("click", "#watchedShowButton4", async function () {
    const name = $(this).siblings('h2').text()
    console.log(name)
    // tempMeneger.watchedShows = []
    // await tempMeneger.watchedShowsDB()
    await tempMeneger.watchedShowSave2(name)
    await homeScreenLoadPage()

})


$("body").on("click", "#wishListButton4", async function () {
    const name = $(this).siblings('h2').text()
    // tempMeneger.wishList = []
    // await tempMeneger.wishListDB()
    await tempMeneger.wishListSave2(name)
    await homeScreenLoadPage()

})
///////////////////////////
$("body").on("click", "#watchedShowButton", async function () {
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

$("body").on("click", "#blackListButton", async function () {
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


$("body").on("click", "#wishListButton", async function () {
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


$("body").on("click", "#watchedShowButtonInWishList", async function () {
    const name = $(this).siblings('h2').text()
    await tempMeneger.watchedShowwSave(name)
    await tempMeneger.wishListRemove(name)
    wishListLoadPage()

})


const noBleckList = function (listName, callback, callback2) {
    // console.log("1")
    // console.log(listName)
    tempMeneger.blackListDB()
    let counter = -1
    for (let i of listName) {
        // console.log('3')
        if (listName[0].name === undefined){
            // console.log('4')
            break
        }
        counter = counter + 1
        for (let a of tempMeneger.blackList) {
            if (i.name === a.name) {
                // console.log("2")
                alert(`this show ${i.name} is on black list, we will remove her `)
                // console.log(listName)
                let name = listName[counter].name
                listName.splice(counter,1)
                // console.log(i)
                // console.log(counter)
                callback(1)
                callback2(name)
                break               
            } 
        }
    }
}

/////////////////////////on click remove

$("body").on("click", "#removeSohwButton", async function () {
    const name = $(this).siblings('h2').text()
    await tempMeneger.watchedShowRemove(name)
    await watchedShowLoadPage()
})

$("body").on("click", "#removeWishListButton", async function () {
    const name = $(this).siblings('h2').text()
    console.log(name)
    await tempMeneger.wishListRemove(name)
    await wishListLoadPage()
})

$("body").on("click", "#removeBlackListButton", async function () {
    const name = $(this).siblings('h2').text()
    await tempMeneger.blackListRemove(name)
    await blackListLoadPage()

})



///////for css 
function myFunction(x) {
    x.classList.toggle("change");
}

let a = 0
$("body").on("click", ".myContainer", function () {
    if (a == 0) {
        $(".mySlider").addClass("opened-mySlider")
        a = 1
    }
    else {
        a = 0
        // console.log("achmed")
        $(".mySlider").removeClass("opened-mySlider")
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


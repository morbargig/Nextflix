class TempManager {
    constructor() {
        this.standby = []
        this.watchedShow = []
        this.blackList = []
        this.wishList = []
        this.homeScreen=[]
    }

    // async getShowData(showName) {
    //     const res = await $.get(`/show/${showName}`)        
    //     this.standby.push(res)
    //     console.log(res)
    // }

    async getHomeScreen() {
        let res = await $.ajax({
            method:"GET",
            url:`/homeScreen` ,
            success: function(data){
                console.log(data)
            },
 
            error: function(data){
                console.log(data)
                alert("error ")
            }
 
 
        })
        this.homeScreen.push(res)
    }

    async getShowData(showName) {
        let res = await $.ajax({
            method:"GET",
            url:`/show/${showName}` ,
            success: function(data){
                console.log(data)
            },
            
            error: function(data){
                console.log(data)
                alert("error ")
            }
            
        })
        if(res){

            this.standby.push(res)
        }
        else{
            alert("The show you are looking for doesn't exist")
        }
    }


    /////////get from db
    async watchedShowDB() {
        let data = await $.get('/watchedShow',function(res){
         return  res
        })
    data.forEach(d => this.watchedShow.push(d));
    }

    async blackListDB() {
        let data = await $.get('/blackList',function(res){
         return  res
        })
    data.forEach(d => this.blackList.push(d));
    }


    async wishListDB() {
        let data = await $.get('/wishList',function(res){
         return  res
        })
    data.forEach(d => this.wishList.push(d));
    }

    /////////////saveDB
    wishListSave(showName) {
        const showD =this.standby.find(s => s.name === showName)
         $.post('/wishList', showD ,function(data,status){
            console.log("status:",status)
            console.log('data:',data)
        })
    }


    
    blackListSave(showName) {
        const showD =this.standby.find(s => s.name === showName)
         $.post('/blackList', showD ,function(data,status){
            console.log("status:",status)
            console.log('data:',data)
        })
    }
    
    watchedShowSave(showName) {
        const showD =this.standby.find(s => s.name === showName)
         $.post('/watchedShow', showD ,function(data,status){
            console.log("status:",status)
            console.log('data:',data)
        })
    }


    watchedShowwSave(showName) {
        this.wishListDB()
        const showD =this.wishList.find(s => s.name === showName)
         $.post('/watchedShow', showD ,function(data,status){
            console.log("status:",status)
            console.log('data:',data)
        })
    }
/////////////save from watchedShows 

wishListSave2(showName) {
    const showD =this.homeScreen.find(s => s.name === showName)
     $.post('/wishList', showD ,function(data,status){
        console.log("status:",status)
        console.log('data:',data)
    })
}



blackListSave2(showName) {
    const showD =this.homeScreen.find(s => s.name === showName)
     $.post('/blackList', showD ,function(data,status){
        console.log("status:",status)
        console.log('data:',data)
    })
}

watchedShowSave2(showName) {
    const showD =this.homeScreen.find(s => s.name === showName)
     $.post('/watchedShow', showD ,function(data,status){
        console.log("status:",status)
        console.log('data:',data)
    })
}


////////////////remove

    wishListRemove(showName) {
        $.ajax({
            method:"DELETE",
            url:`/wishList/${showName}` ,
            success: function(data){
                console.log(data)
            },
        })
    }

    blackListRemove(showName) {
        $.ajax({
            method:"DELETE",
            url:`/blackList/${showName}` ,
            success: function(data){
                console.log(data)
            },
        })
    }
    

    watchedShowRemove(showName) {
        $.ajax({
            method:"DELETE",
            url:`/watchedShow/${showName}` ,
            success: function(data){
                console.log(data)
            },
        })
    }


}
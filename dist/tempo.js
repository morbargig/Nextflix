class TempManager {
    constructor() {
        this.standby = []
        this.watchedShows = []
        this.blackList = []
        this.wishList = []

    }

    async getShowData(showName) {
        const res = await $.get(`/show/${showName}`)        
        this.standby.push(res)
        console.log(res)
       
    }



    async watchedShowsDB() {
        let data = await $.get('/watchedShows',function(res){
         return  res
        })
    data.forEach(d => this.watchedShows.push(d));
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
            url:`/city/${showName}` ,
            success: function(data){
                console.log(data)
            },
        })
    }


    watchedShowsRemove(showName) {
        $.ajax({
            method:"DELETE",
            url:`/city/${showName}` ,
            success: function(data){
                console.log(data)
            },
        })
    }


}
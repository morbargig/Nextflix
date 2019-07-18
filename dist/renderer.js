class Render {
    
    constructor() {
        
    }
    
    
    renderer(shows,listName) {{
        $('.showsInfo').empty()
        const source = $(`#${listName}-template`).html();  
        const template = Handlebars.compile(source)
        const newHTML = template({menu : shows})
        $('.showsInfo').append(newHTML)
        // console.log(shows)
    }
        for (let i in shows){
            $(`#${shows[i].id}`).append(shows[i].summary) 
        }
    }
}
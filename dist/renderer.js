class Render {
    constructor() {

    }


    renderer(shows) {

        $('.showsInfo').empty()
        const source = $('#template').html();
        const template = Handlebars.compile(source);

        const newHTML = template({menu:shows});
        $('.showsInfo').append(newHTML);
    }


    watchedShowRender(shows) {

        $('.showsInfo').empty()
        const source = $('#watchedShowtemplate').html();
        const template = Handlebars.compile(source);

        const newHTML = template({menu:shows});
        $('.showsInfo').append(newHTML);
    }


    wishListRender(shows) {

        $('.showsInfo').empty()
        const source = $('#wishListtemplate').html();
        const template = Handlebars.compile(source);

        const newHTML = template({menu:shows});
        $('.showsInfo').append(newHTML);
    }

    
    blackListRender(shows) {

        $('.showsInfo').empty()
        const source = $('#blackListtemplate').html();
        const template = Handlebars.compile(source);

        const newHTML = template({menu:shows});
        $('.showsInfo').append(newHTML);
    }
}
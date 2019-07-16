


class Render {
    constructor() {

    }
    

    renderer(shows) {

        $('.showsInfo').empty()
        const source = $('ShowInfo').html();
        const template = Handlebars.compile(source);

        const newHTML = template({menu:showws});
        $('.showsInfo').append(newHTML);
    }
}
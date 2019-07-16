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
}
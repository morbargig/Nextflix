class Render {
    constructor() {

    }


    renderer(shows,listName) {

        $('.showsInfo').empty()
        const source = $(`#${listName}-template`).html();
        const template = Handlebars.compile(source);
        const newHTML = template({menu:shows});
        $('.showsInfo').append(newHTML);
    }

}

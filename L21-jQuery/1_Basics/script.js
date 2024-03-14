let body = $('body')

let h1 = $('<h1>')
body
    .append(
        h1.text('Hello World').css('font-size', '84px')
    )
    .append(
        $('<button>')
            .text('Click Me')
            .addClass('button')
            .click(ev=>{
                $(ev.target).css('background-color','magenta')
            })
            .dblclick(ev=>{
                console.log("Kyu Double Dabaya")
            })
    )
    .append(
        $('<ul>')
            .html(
                '<li>Avengers</li> <li>Thor</li> <li>IronMan</li> '
            ).addClass('movies')

    )

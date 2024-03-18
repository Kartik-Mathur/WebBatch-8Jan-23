$('body')
    .append(
        $('<h1>').text('Todo List').addClass('heading')
    )
    .append(
        $('<div>')
            .addClass('inputDetails')
            .append(
                $('<input>')
                    .attr('placeholder', 'Enter New Task')
                    .attr('type', 'text')
                    .addClass('newtask')
            )
            .append(
                $('<button>')
                    .text('Add Task')
                    .addClass('btn')
                    .click(ev => {
                        if ($('.newtask').val().trim() != '') {
                            $('.tasklist')
                                .append(
                                    $('<li>')
                                        .addClass('task')
                                        .text(
                                            $('.newtask').val()
                                        )
                                        .append(
                                            $('<div>')
                                                .addClass('btngrp')
                                                .append(
                                                    $('<button>').text('↑').addClass('upBtn')
                                                )
                                                .append(
                                                    $('<button>').text('↓').addClass('downBtn')
                                                )
                                                .append(
                                                    $('<button>').text('❌').addClass('deleteBtn')
                                                )
                                        )
                                )
                            $('.newtask').val('')
                        }

                    })
            )
    )
    .append(
        $('<ul>')
            .addClass('tasklist')
            .click(ev => {
                if ($(ev.target).hasClass('upBtn')) {
                    $(ev.target).parent().parent()
                        .insertBefore($(ev.target).parent().parent().prev())
                }
                else if ($(ev.target).hasClass('downBtn')) {
                    $(ev.target).parent().parent()
                        .insertAfter($(ev.target).parent().parent().next())
                }
                else if ($(ev.target).hasClass('deleteBtn')) {
                    $(ev.target).parent().parent().remove()
                }
            })
    )
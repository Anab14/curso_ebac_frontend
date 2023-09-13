$(document).ready(function(){
    $('form').on('submit', function(e) {
        e.preventDefault();
        const nometarefa = $('#nome-tarefa').val();
        const novoitem = $('<li></li>');
        $(novoitem).appendTo('ul');
        $(nometarefa).appendTo(novoitem);
    })
})

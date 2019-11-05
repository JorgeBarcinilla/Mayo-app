$(document).ready(function() {

    $('#content-form').on('click','.btn-add',function(event){

        var nameForm = $(this).attr('id').split('-')[1];
        var form = document.getElementById(nameForm+'s');
        var content = form.getElementsByClassName('container-'+nameForm);
        var cant = content.length;
        var indexLastComp = content[cant-1].id.split('-')[1];
        var template = document.getElementById('template-'+nameForm);
        var newNode = template.cloneNode(true);
        newNode.id = nameForm+'-'+(parseInt(indexLastComp,10)+1);
        form.appendChild(newNode);
        $('#'+newNode.id).removeClass('template');

        if(cant > 1){
            $('.btn-delete-'+nameForm).prop('disabled', false);
        }

        if(cant > 3){
            $(this).prop('disabled', true);
        }

    });

    $('#content-form').on('click','.btn-delete',function(event){

        var node = $(this).parent().parent()[0];
        var nameForm = $(this).parent().parent().attr('id').split('-')[0];
        var form = node.parentNode;
        var cant = form.getElementsByClassName('container-'+nameForm).length;
        if (cant < 4) {
            $('.btn-delete-'+nameForm).prop('disabled', true);
        }
        if(cant < 7){
            $('#add-'+nameForm).prop('disabled', false);
        }
        node.parentNode.removeChild(node);
    });

});
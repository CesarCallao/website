$(document).ready(function(){
    //Agregando la clase active al primer enlace******
    $('.category-list .category_item[category="all"]').addClass('ct_item-active');
   
    $('.category_item').click(function(){
        
       var catProduct = $(this).attr('category');
       console.log(catProduct);

        //agregandi clase active
        $('.category_item').removeClass('ct_item-active');
        $(this).addClass('ct_item-active');

        //ocultando productos
        $('.product-item').hide();
        //mostrando productos
        $('.product-item[category="'+catProduct+'"]').show();
        
    });
    $('.category_item[category="all"]').click(function(){

        $('.product-item').show();
    });


});
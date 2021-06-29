var flavour = $("#flavour").val();
var size = $("#size").val();
if(flavor=crispy){
    var price1= 40;
};
    elsif(flavor = stuffed){
        var price1 = 70;
    };
        else {
            var price1 = 90;
        };
        


        if(size=large){
            var price2= 80;
        };
            elsif(size = medium){
                var price2 = 70;
            };
                else {
                    var price2 = 60;
                };


var price = function(price1,price2){
    return price1+price2;
};
$(document).ready(function(){
    $(".primary-container-2 form").submit(function(){
        console.log("the price of pizza you ordered equals"+price);
    });
});

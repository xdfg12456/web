window.onload = function(){
    //document.write("Hello JavaScript");
};

$(function(){
    $("input").on("click",function(){
        //alert("Hi");
        var numberOfListItem = $("li").length;
        var randomChildNumber = Math.floor(Math.random()*numberOfListItem);
        $("h1").text($("li").eq(randomChildNumber).text());
        switch(randomChildNumber){
            case 0:
                //$("div").text('<img src="24-54841.jpeg">');
                document.getElementById("imag").src="24-54841.jpeg";
                break;
            case 1:
                //$("div").text('<img src="yqn093-027c.jpg">');
                document.getElementById("imag").src="yqn093-027c.jpg";
                break;
            case 2:
                //$("div").text('<img src="20190509230042_82.jpg">');
                document.getElementById("imag").src="20190509230042_82.jpg";
                break;
            default:
                break;
        }
            
    });
});
/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

    var quoteArr = [
        {quote: "I'd rather try and fail, than never try at all, you see.", author: "William F. O'Brien"},
        {quote: "Nothing's perfect, the world is not perfect, but it's there for us, trying the best it can, that's what makes it so damn beautiful.", author: "Roy Mustang"},
        {quote: "No single thing is perfect by itself. That's why we're born to attract other things to make up for what we lack.", author: "Uchiha Itachi"},
        {quote: "Moving on doesn't mean you forget about things. It just means you have to accept what's happened and continue living.", author: "Erza Scarlet"},
        {quote: "I'd rather trust and regret, than doubt and regret.", author: "Kazuto Kirigaya"},
        {quote: "Life is basically like a soap bubble. It rides on the wind, flying here and there... and before you realize it - pop! It's gone. When it's about to disappear, you think that you could've flown a little higher. But by the time, it's already too late.", author: "Gintoki Sakata"},
        {quote: "People cry, not because they're weak. Its because they've been strong for too long.", author: "Mirajane Strauss"},
        {quote: "I don't think anyone is born knowing the reason why they're here. It's just something you have to find as you go along.", author: "Honda Tohru"},
        {quote: "The cake is a lie.", author: "Glados"}
    ];

$(document).ready(function(){
    
    

    $(".random").on("click", function(){
       console.log("clicked!");
       generate();
    });
    
    var quoteNr = 0;
      
    function generate(){
        var element = document.getElementsByClassName("quotearea");
        quoteNr = Math.floor(Math.random() * 100 % quoteArr.length);
        element[0].innerHTML = 
                "<p>"
                 + quoteArr[quoteNr].quote +
                 "</p>\n" +
                 
                 "<p class=\"author\"> -- " + quoteArr[quoteNr].author + "</p>";
    }
    
    $(".tweeter").on("click", function(){
       var twitterURL = encodeURI("https://twitter.com/intent/tweet?text=" + quoteArr[quoteNr].quote + ' - ' + quoteArr[quoteNr].author);
       $(".tweeter").attr("href", twitterURL);
    });
    
});

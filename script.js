$(document).ready(function() {
console.log("Hi")

$.get('https://www.reddit.com/r/aww/.json', function(data){
    console.log(data.data.children[0].data.title)});

});

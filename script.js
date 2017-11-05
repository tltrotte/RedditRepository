$(document).ready(function() {
  console.log("Hi")

  $.get('https://www.reddit.com/r/aww/.json', function(data){
    var main = data.data.children;
    // main.forEach(function)
  // first 10  post after initial post
  for(i = 1; i<=10; i++){
  var reddit = main[i];
  var infoEl = $(".post");

  var title = $("<h3 id ='title'>");

  var blog = $("<div id = 'blog'>");
  infoEl.append(blog);

  var content = $("<p> id = 'text' ");
  blog.append(content);

  var photo = $("<div id = 'photo'>");
  blog.append(photo);





}

    //image source grab
    // main.forEach(function(kid){
    //   kid.data.preview.images.forEach(function(image){
    //     console.log(image.source);
      });

    });

  });

}

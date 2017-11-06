$(document).ready(function() {
  console.log("Hi")

  $.get('https://www.reddit.com/r/aww/.json', function(data){
    var main = data.data.children;
    // main.forEach(function)
  // first 10  post after initial post
  for(i = 1; i <=10; i++){
  var reddit = main[i];
  var infoEl = $(".post");
//Reddit Title
  var title = $("<h3 id ='title'>");
  var subTitle = reddit.data.title;
  title.append(subTitle);

//Reddit information container
  var blog = $("<div id = 'blog'>");
  infoEl.append(blog);
//Reddit Text content
  var content = $("<div id = 'text'> ");
  blog.append(content);
  content.append(title);
//Thumbnail photos on Reditt page
  var photo = $("<div id = 'photo'>");
  var photoThumb = reddit.data.thumbnail;
  blog.append(photo);
  photo.append("<img src=" + photoThumb + ">");

  // Link to open article
    var link = reddit.data.permalink;
    var link2 = $("<a href='" + link + "'>Click me!</a>");
    content.append(link2);

  $("#main").append(infoEl);





}


  });
});

var posts=["2025/10/02/hello-world/","2025/10/02/博客文档/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };
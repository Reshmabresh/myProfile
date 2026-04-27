window.onscroll = function(){
  scrollFunction();
};

function scrollFunction(){
  let btn = document.getElementById("topBtn");

  if(document.body.scrollTop > 200 || document.documentElement.scrollTop > 200){
    btn.style.display = "block";
  }else{
    btn.style.display = "none";
  }
}

function topFunction(){
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
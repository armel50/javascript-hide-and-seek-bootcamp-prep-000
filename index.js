function getFirstSelector(selector){
  return document.querySelector(selector);
}

function nestedTarget(){
  return document.querySelector(".target #nested");
}

function increaseRankBy(n){
  var rank = document.querySelector(".ranked-list").innerHTML;
  
  var result = parseInt(rank) + n;
  return result;
}


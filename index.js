function getFirstSelector(selector){
  return document.querySelector(selector);
}

function nestedTarget(){
  return document.querySelector("#nested .target" );
}

function increaseRankBy(n){
  var rank = document.querySelector(".ranked-list").innerHTML;
  
  var result = parseInt(rank) + n;
  return result;
}

function deepestChild(){
  var nested = document.querySelectorAll("#grand-node")[0][0][0]
}
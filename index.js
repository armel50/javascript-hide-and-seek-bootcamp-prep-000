function getFirstSelector(selector){
  return document.querySelector(selector);
}

function nestedTarget(){
  return document.querySelector("#nested .target" );
}

function increaseRankBy(n){
  var rank = document.querySelectorAll(".ranked-list");
  var result=0;
  for(var i = 0; i<rank.length;i++){
    result=parseInt(rank[i]) + n;
    rank[i].innerHTML = String(result);
  }
  
}

function deepestChild(){
  var nested = document.querySelectorAll("#grand-node");
  var found ;
  for(var i = 0; i<nested.length;i++){
    found = nested[i][i][i][i];
    if(found==="")
  }
  return nested;
}
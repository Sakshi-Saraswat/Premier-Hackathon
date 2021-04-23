//Progression 1 - create a Manager array and return it

var Manager= {
  managerName:"Alex Ferguson",
  managerAge: 78,
  currentTeam:"Manchester FC",
  trophiesWon:27,
};
//Write your function here
function createManager(Manager) {
  document.getElementById("inside1").innerHTML=Manager.managerName;
  document.getElementById("inside2").innerHTML=Manager.managerAge;
  document.getElementById("inside3").innerHTML=Manager.currentTeam;
  document.getElementById("inside4").innerHTML=Manager.trophiesWon;
}

createManager(Manager);

// Don't edit the following code
try {
  var manager = createManager(
    managerName,
    managerAge,
    currentTeam,
    trophiesWon
  );
}
catch (e) {
  // do nothing - expected error
}

//Progression 2 - create a formation object and return it
var formation = [2,3,1];
//write your function here
function createFormation(){
  var u=document.getElementById("forward");
  for(var i=0;i<formation[0];i++){
    var content=`<img src="./assets/player.svg" class="pic" id="forwards"/>`;
    u.innerHTML+= content;
  }
  var u=document.getElementById("midfield");
  for(var i=0;i<formation[1];i++){
    var content=`<img src="./assets/player.svg" class="pic1"/>`;
    u.innerHTML+= content;
  }
  var u=document.getElementById("defence");
  for(var i=0;i<formation[2];i++){
    var content=`<img src="./assets/player.svg" class="pic3"/>`;
    u.innerHTML+= content;
  }
}
createFormation();

//Dont edit the following code

try {
  var formationObject = createFormation(
    forwards,
    midfielders, 
    defenders);
} catch (e) {
  //do nothing
}

//Progression 3 - Filter players that debuted in ___ year
var year;
var details=[];
function filterByDebut(year){
  let playerContainer=document.getElementById("player-container");
  for(i in players){
    if(players[i].debut==year){
      //console.log(players[i]);
      details.push(players[i]);
    }
  }
  createCards(details);
}

//Progression 4 - Filter players that play at the posplayer-containerition _______
var position;
var details=[];
function filterByPosition(position){
  for(i in players){
    if (players[i].position==position){
      details.push(players[i]);
    }
  }
  createCards(details);
}

// //Progression 5 - Filter players that have won ______ award
var awardName;
var details=[];
function filterByAward(awardName){
  for(i in players){
    for(j in players[i].awards){
      if (players[i].awards[j].name==awardName){
        details.push(players[i]);
      }
    }
  }
  createCards(details);
  
}

//Progression 6 - Filter players that won ______ award ____ times
var noOfTimes=2;
var a=[];

function filterByAwardxTimes(players,noOfTimes){
  for(i in players){
    var k=0;
    for(j in players[i].awards){
      if(players[i].awards[j].name=="African Player of the Year"){
        k=k+1;
      }
    }
    if(k>=noOfTimes){
      a.push(players[i]);
      break;
    }
  }
  console.log(a);
}
filterByAwardxTimes(players,2);

//Progression 7 - Filter players that won ______ award and belong to ______ country



//Progression 8 - Filter players that won atleast ______ awards, belong to ______ team and are younger than ____


//Challenge 1 - Sort players in descending order of their age

//Challenge 2 - Sort players beloging to _____ team in descending order of awards won


//Judgement 1 - Sort players that have won _______ award _____ times and belong to _______ country in alphabetical order of their names


//Judgement  2 - Sort players that are older than _____ years in alphabetical order


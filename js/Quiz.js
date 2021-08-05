class Quiz {
  constructor(){}

  getState(){
    var gameStateRef  = database.ref('gameState');
    gameStateRef.on("value",function(data){
       gameState = data.val();
    })

  }

  update(state){
    database.ref('/').update({
      gameState: state
    });
  }

  async start(){
    if(gameState === 0){
      contestant = new Contestant();
      var contestantCountRef = await database.ref('contestantCount').once("value");
      if(contestantCountRef.exists()){
        contestantCount = contestantCountRef.val();
        contestant.getCount();
      }
      question = new Question()
      question.display();
    }
  }

  play(){
    //write code here to hide question elements
question.hide();
    //write code to change the background color here
background("yellow");
    //write code to show a heading for showing the result of Quiz
textSize(30);
fill(0);
text("result of the quiz ",350,50);
    //call getContestantInfo( ) here
   Contestant.getPlayerInfo()

    //write condition to check if contestantInfor is not undefined
if(allContestants !== undefined){
  var y = 250
  fill("brown");
  textSize(25);
  text("note:correct answer is in green",130,230);
  for(var i in allContestants){
    if(allContestants[i].answer==2){
fill("green");
    }else{
      fill("red");
    }
    textSize(20);
    text(allContestants[i].name +":"+allContestants[i].answer,250,y);
    y = y+30;
  }
}
    //write code to add a note here

    //write code to highlight contest who answered correctly
    
  }

}

class Game{
    constructor() {

    }

    getState(){
        var gameStateRef=database.ref('gameState')
        gameStateRef.on("value",function(data){
            gameState=data.val();
        })
    }

    update(state) {
        database.ref('/').update({gameState:state});
    }

    start(){
        if (gameState===0) {
            player=new Player();
            player.getCount();
            form=new Form();
            form.display();
        }
    }

    play(){
        form.hide();
        
        textSize(30);
        text("GAME START",120,50);

        Player.getPlayerInfo();

        var displayPosition=100;

        if (allPlayers!=undefined) {
            for (var plr in allPlayers) {
                if (plr==="player"+player.index) {
                    fill("red");
                    
                }
                else{
                    fill("black");
                }
    
                displayPosition+=20;
                
                textSize(15);
                text(allPlayers[plr].name+":"+allPlayers[plr].distance,120,displayPosition);
            }        
        }

        if (keyDown(UP_ARROW)) {
            player.distance+=50;

            player.update();
        }
    }
}
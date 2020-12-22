class Form{
    constructor() {
        this.input=createInput('Enter Your Name');
        this.button=createButton('Play');
        this.Greeting=createElement('h3')
            
    }

    display() {
        var title=createElement('h2');
        title.html("Multiplayer Car Racing Game");
        title.position(130,0);

        this.input.position(130,160)

        this.button.position(130,250);
        this.button.mousePressed(()=> {
            this.input.hide();
            this.button.hide();
            player.name=this.input.value();
            player.update();
            playerCount++
            player.updateCount(playerCount);
            player.index=playerCount;
            
            this.Greeting.html("Hello "+player.name);
            this.Greeting.position(130,160);
        })
    }

    hide() {
        this.Greeting.hide();
    }
}
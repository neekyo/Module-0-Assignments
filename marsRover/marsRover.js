gridArray = [];

const rover = {
  direction: "N",
  x: 0,
  y: 0,
  moveLog:[],
  turnLeft: function(){
    console.log("turnLeft was called!");
    switch(this.direction){
      case "N":
        this.direction = "W";
        break;
      case "W":
        this.direction = "S";
        break;
      case "S":
        this.direction = "E";
        break;
      case "N":
        this.direction = "W";
        break;
      return;
    }
  },
  turnRight: function(){
    console.log("turnRight was called!");
    switch(this.direction){
      case "N":
        this.direction = "E";
        break;
      case "E":
        this.direction = "S";
        break;
      case "S":
        this.direction = "W"
        break;
      case "W":
        this.directions = "N"
        break;
    }
    return;
  },
  moveForward: function(){
    console.log("moveForward was called!");
    px = this.x
    py = this.y
    switch(this.direction){
      case "N":
        if(this.y - 1 < 0){
          console.log("Cant move north, boundary reached.");
          return
        }else{
          this.y -= 1;
        }
        break;
      case "S":
        if(this.y + 1 > 10){
          console.log("Cant move south, boundary reached.");
          return
        }else{          
          this.y += 1;
        }
        break;
      case "E":
        if(this.x + 1 > 10){
          console.log("Can't move east, boundary reached.")
          return
        }else{
          this.x += 1;
        }
        break;
      case "W":
        if(this.x - 1 < 0){
          console.log("Can't move west, boundary reached");
          return
        }else{
          this.x -= 1;
        }
        break;
    }
    console.log("New position: " + this.x.toString() + "," + this.y.toString());
    this.moveLog.push([px,py]);
    return;
  },
  doCommands: function(cmds){
    console.log("Do commands: " + cmds);
    for(let i = 0; i < cmds.length; i++){
      switch(cmds[i]){
        case "l":
          this.turnLeft();
          break;
        case "r":
          this.turnRight();
          break;
        case "f":
          this.moveForward()
          break;
      }
    }
  }
 
};
  

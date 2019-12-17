import React, {Component} from 'react';
import Header from './components/Header.js';
import Player from './components/Player.js';
import AddPlayerForm from './components/AddPlayerForm.js';
import './App.css';

 class App extends Component{
  
  state={players: [

  { id:1,
    name: "Chyna",
    score:0,
 
  },
  {id:2,
    name: "chris",
    score:0,
  },
  {id:3,
    name: "Tony",
    score:0,
  },
  {id:4,
    name: "Steven",
    score:0,
  }

]
};
//Player id count

prevPlayerId = 4;
    handleScoreChange=( index,delta) =>{ 
      this.setState(prevState => ({
    score:prevState.players[index].score +=delta}));
  }
   
 handleAddPlayer =(name) =>{this.setState(prevState => {
   
return{
  players:
 
  [   
    ...prevState.players,

    {name:name,score:0,id:this.prevPlayerId +=1}]

 }});
}


handleRemovePlayer=(id) =>{
  
this.setState(prevState => { 

 return{players:prevState.players.filter(player =>player.id !==id)}
});
   
}
  render(){
    
return(
  
<div className="scoreboard"> 
  
  <Header  players={this.state.players}/>
 
  {this.state.players.map((player,index )=><Player 
  
  id={player.id} 

  key={player.id.toString()}  

  removePlayer={this.handleRemovePlayer}

   name={player.name}score={player.score} 

   changeScore={this.handleScoreChange} 

   index={index} />)}

   < AddPlayerForm addPlayer={this.handleAddPlayer} />
  
  </div>
);}

}


export default App;

import React,{Component} from 'react';



class AddPlayerForm extends Component{

   

    playerInput=React.createRef();

    

    handleSubmit= (e) =>{

        e.preventDefault();
        this.props.addPlayer(this.playerInput.current.value);
        e.currentTarget.reset();
    
    }


render (){
    
 

    return(

        <form onSubmit={this.handleSubmit}>

            <input

                type="text"

                ref={this.playerInput}

                placeholder="Enter players name"
 

         
            />

<input

type="submit"
 
/>
        </form>

    );
}


}

export default AddPlayerForm ;


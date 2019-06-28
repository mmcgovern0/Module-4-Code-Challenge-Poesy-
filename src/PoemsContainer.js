import React from 'react';
import Poem from './Poem';

class PoemsContainer extends React.Component {


 

  render(){

    const singlePoems = this.props.poems.map(poem => {
      return <Poem key={poem.id}  poemData={poem}/>
    })
    

    return (
      <div className="poems-container">
        {singlePoems}
      </div>
    ); 
  }
}

export default PoemsContainer;
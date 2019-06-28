import React from 'react';

class Poem extends React.Component {
  
  state = {
    clicked: false
  }


  handleClick = (event) => {
    // this.setState({clicked: !this.state.clicked)
    // if (this.state.clicked === true) {
      event.target.style.color = "red"
    // }
  }


  render(){

    return (
      <div style={{color: "black"}} onClick={this.handleClick}>
        <h3>{this.props.poemData.title}</h3>
        <p>{this.props.poemData.content}</p>
        <strong>-{this.props.poemData.author}</strong>
      </div>


    ); 
  }
}

export default Poem;

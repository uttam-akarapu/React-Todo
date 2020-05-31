import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Notes from "./components/Notes/Notes";
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state={
      noteText:"",
      notes:[],
      isTextAvail:false


    }

  }

  updateText = (e) => {
      this.setState({
        noteText:e.target.value
      })
   
  }
  

  handleKeyPress=(e)=>{
    if(e.key === "Enter"){
      this.addNote();
      
    }
  }

  deleteNoteHandler=(index)=>{
    let noteArray = this.state.notes;
    noteArray.splice(index,1);
    this.setState({
      notes:noteArray
    })
  }


  addNote=()=>{
    
    let notesArray = this.state.notes;
    console.log(this.state.noteText.length);
    if(this.state.noteText.length != 0){
      notesArray.push(this.state.noteText);
    }
   
    console.log("notes array "+notesArray);
    this.setState({
      noteText:''
    })
    this.textInput.focus();
    

  }


  render() {

    let notes = this.state.notes.map((note,index)=>{

      return (
        <Notes key={index} text={note} deleteNote={()=>this.deleteNoteHandler(index)}/>
      );
    })




    return (
      <div className="container">
        <header className="header">React todo app</header>
        
        {notes}
 

	<p> Application code </p>

	 <pre><code>
                {`
                import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Notes from "./components/Notes/Notes";
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state={
      noteText:"",
      notes:[],
      isTextAvail:false


    }

  }

  updateText = (e) => {
      this.setState({
        noteText:e.target.value
      })
   
  }
  

  handleKeyPress=(e)=>{
    if(e.key === "Enter"){
      this.addNote();
      
    }
  }

  deleteNoteHandler=(index)=>{
    let noteArray = this.state.notes;
    noteArray.splice(index,1);
    this.setState({
      notes:noteArray
    })
  }


  addNote=()=>{
    
    let notesArray = this.state.notes;
    console.log(this.state.noteText.length);
    if(this.state.noteText.length != 0){
      notesArray.push(this.state.noteText);
    }
   
    console.log("notes array "+notesArray);
    this.setState({
      noteText:''
    })
    this.textInput.focus();
    

  }


  render() {

    let notes = this.state.notes.map((note,index)=>{

      return (
        <Notes key={index} text={note} deleteNote={()=>this.deleteNoteHandler(index)}/>
      );
    })




    return (
      <div className="container">
        <header className="header">React todo app</header>
        
        {notes}
 

        <div className="btn" onClick={this.addNote}>+</div>
        <input type="text" 
        ref={(input)=>{this.textInput = input}} 
        value={this.state.noteText} 
        className="textInput"
        onChange={e=>this.updateText(e)}
        onKeyPress={this.handleKeyPress}
        />

      </div>
    );
  }
}

App.propTypes = {

};

export default App;
                
                `}

                </code></pre>





        


        <div className="btn" onClick={this.addNote}>+</div>
        <input type="text" 
        ref={(input)=>{this.textInput = input}} 
        value={this.state.noteText} 
        className="textInput"
        onChange={e=>this.updateText(e)}
        onKeyPress={this.handleKeyPress}
        />

      </div>
    );
  }
}

App.propTypes = {

};

export default App;
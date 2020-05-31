(this.webpackJsonpreact_todo=this.webpackJsonpreact_todo||[]).push([[0],{12:function(e,t,n){},13:function(e,t,n){},14:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),s=n(6),r=n.n(s),i=(n(12),n(1)),l=n(2),c=n(4),p=n(3),u=function(e){Object(c.a)(n,e);var t=Object(p.a)(n);function n(e){return Object(i.a)(this,n),t.call(this,e)}return Object(l.a)(n,[{key:"render",value:function(){return o.a.createElement("div",{className:"note",onClick:this.props.deleteNote},this.props.text," - ",o.a.createElement("span",null,o.a.createElement("i",null,"Click to delete this entry")))}}]),n}(a.Component),d=(n(13),function(e){Object(c.a)(n,e);var t=Object(p.a)(n);function n(e){var a;return Object(i.a)(this,n),(a=t.call(this,e)).updateText=function(e){a.setState({noteText:e.target.value})},a.handleKeyPress=function(e){"Enter"===e.key&&a.addNote()},a.deleteNoteHandler=function(e){var t=a.state.notes;t.splice(e,1),a.setState({notes:t})},a.addNote=function(){var e=a.state.notes;console.log(a.state.noteText.length),0!=a.state.noteText.length&&e.push(a.state.noteText),console.log("notes array "+e),a.setState({noteText:""}),a.textInput.focus()},a.state={noteText:"",notes:[],isTextAvail:!1},a}return Object(l.a)(n,[{key:"render",value:function(){var e=this,t=this.state.notes.map((function(t,n){return o.a.createElement(u,{key:n,text:t,deleteNote:function(){return e.deleteNoteHandler(n)}})}));return o.a.createElement("div",{className:"container"},o.a.createElement("header",{className:"header"},"React todo app"),t,o.a.createElement("div",{className:"btn",onClick:this.addNote},"+"),o.a.createElement("input",{type:"text",ref:function(t){e.textInput=t},value:this.state.noteText,className:"textInput",onChange:function(t){return e.updateText(t)},onKeyPress:this.handleKeyPress,placeholder:"Start Typing "}),o.a.createElement("hr",null),o.a.createElement("p",null," Application code "),o.a.createElement("pre",null,o.a.createElement("code",null,'\n                import React, { Component } from \'react\';\nimport PropTypes from \'prop-types\';\nimport Notes from "./components/Notes/Notes";\nimport \'./App.css\';\n\nclass App extends Component {\n  constructor(props) {\n    super(props);\n\n    this.state={\n      noteText:"",\n      notes:[],\n      isTextAvail:false\n\n\n    }\n\n  }\n\n  updateText = (e) => {\n      this.setState({\n        noteText:e.target.value\n      })\n   \n  }\n  \n\n  handleKeyPress=(e)=>{\n    if(e.key === "Enter"){\n      this.addNote();\n      \n    }\n  }\n\n  deleteNoteHandler=(index)=>{\n    let noteArray = this.state.notes;\n    noteArray.splice(index,1);\n    this.setState({\n      notes:noteArray\n    })\n  }\n\n\n  addNote=()=>{\n    \n    let notesArray = this.state.notes;\n    console.log(this.state.noteText.length);\n    if(this.state.noteText.length != 0){\n      notesArray.push(this.state.noteText);\n    }\n   \n    console.log("notes array "+notesArray);\n    this.setState({\n      noteText:\'\'\n    })\n    this.textInput.focus();\n    \n\n  }\n\n\n  render() {\n\n    let notes = this.state.notes.map((note,index)=>{\n\n      return (\n        <Notes key={index} text={note} deleteNote={()=>this.deleteNoteHandler(index)}/>\n      );\n    })\n\n\n\n\n    return (\n      <div className="container">\n        <header className="header">React todo app</header>\n        \n        {notes}\n \n\n        <div className="btn" onClick={this.addNote}>+</div>\n        <input type="text" \n        ref={(input)=>{this.textInput = input}} \n        value={this.state.noteText} \n        className="textInput"\n        onChange={e=>this.updateText(e)}\n        onKeyPress={this.handleKeyPress}\n        />\n\n      </div>\n    );\n  }\n}\n\nApp.propTypes = {\n\n};\n\nexport default App;\n                \n                ')))}}]),n}(a.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(d,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},7:function(e,t,n){e.exports=n(14)}},[[7,1,2]]]);
//# sourceMappingURL=main.f9769e83.chunk.js.map
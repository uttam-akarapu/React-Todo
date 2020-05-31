(this.webpackJsonpreact_todo=this.webpackJsonpreact_todo||[]).push([[0],{12:function(e,t,n){},13:function(e,t,n){},14:function(e,t,n){"use strict";n.r(t);var o=n(0),a=n.n(o),s=n(6),r=n.n(s),i=(n(12),n(1)),c=n(2),l=n(4),p=n(3),d=function(e){Object(l.a)(n,e);var t=Object(p.a)(n);function n(e){return Object(i.a)(this,n),t.call(this,e)}return Object(c.a)(n,[{key:"render",value:function(){return a.a.createElement("div",{className:"note",onClick:this.props.deleteNote},this.props.text)}}]),n}(o.Component),u=(n(13),function(e){Object(l.a)(n,e);var t=Object(p.a)(n);function n(e){var o;return Object(i.a)(this,n),(o=t.call(this,e)).updateText=function(e){o.setState({noteText:e.target.value})},o.handleKeyPress=function(e){"Enter"===e.key&&o.addNote()},o.deleteNoteHandler=function(e){var t=o.state.notes;t.splice(e,1),o.setState({notes:t})},o.addNote=function(){var e=o.state.notes;console.log(o.state.noteText.length),0!=o.state.noteText.length&&e.push(o.state.noteText),console.log("notes array "+e),o.setState({noteText:""}),o.textInput.focus()},o.state={noteText:"",notes:[],isTextAvail:!1},o}return Object(c.a)(n,[{key:"render",value:function(){var e=this,t=this.state.notes.map((function(t,n){return a.a.createElement(d,{key:n,text:t,deleteNote:function(){return e.deleteNoteHandler(n)}})}));return a.a.createElement("div",{className:"container"},a.a.createElement("header",{className:"header"},"React todo app"),t,a.a.createElement("p",null," Application code "),a.a.createElement("pre",null,a.a.createElement("code",null,'\n                import React, { Component } from \'react\';\nimport PropTypes from \'prop-types\';\nimport Notes from "./components/Notes/Notes";\nimport \'./App.css\';\n\nclass App extends Component {\n  constructor(props) {\n    super(props);\n\n    this.state={\n      noteText:"",\n      notes:[],\n      isTextAvail:false\n\n\n    }\n\n  }\n\n  updateText = (e) => {\n      this.setState({\n        noteText:e.target.value\n      })\n   \n  }\n  \n\n  handleKeyPress=(e)=>{\n    if(e.key === "Enter"){\n      this.addNote();\n      \n    }\n  }\n\n  deleteNoteHandler=(index)=>{\n    let noteArray = this.state.notes;\n    noteArray.splice(index,1);\n    this.setState({\n      notes:noteArray\n    })\n  }\n\n\n  addNote=()=>{\n    \n    let notesArray = this.state.notes;\n    console.log(this.state.noteText.length);\n    if(this.state.noteText.length != 0){\n      notesArray.push(this.state.noteText);\n    }\n   \n    console.log("notes array "+notesArray);\n    this.setState({\n      noteText:\'\'\n    })\n    this.textInput.focus();\n    \n\n  }\n\n\n  render() {\n\n    let notes = this.state.notes.map((note,index)=>{\n\n      return (\n        <Notes key={index} text={note} deleteNote={()=>this.deleteNoteHandler(index)}/>\n      );\n    })\n\n\n\n\n    return (\n      <div className="container">\n        <header className="header">React todo app</header>\n        \n        {notes}\n \n\n        <div className="btn" onClick={this.addNote}>+</div>\n        <input type="text" \n        ref={(input)=>{this.textInput = input}} \n        value={this.state.noteText} \n        className="textInput"\n        onChange={e=>this.updateText(e)}\n        onKeyPress={this.handleKeyPress}\n        />\n\n      </div>\n    );\n  }\n}\n\nApp.propTypes = {\n\n};\n\nexport default App;\n                \n                ')),a.a.createElement("div",{className:"btn",onClick:this.addNote},"+"),a.a.createElement("input",{type:"text",ref:function(t){e.textInput=t},value:this.state.noteText,className:"textInput",onChange:function(t){return e.updateText(t)},onKeyPress:this.handleKeyPress}))}}]),n}(o.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(a.a.createElement(a.a.StrictMode,null,a.a.createElement(u,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},7:function(e,t,n){e.exports=n(14)}},[[7,1,2]]]);
//# sourceMappingURL=main.dbb824ba.chunk.js.map
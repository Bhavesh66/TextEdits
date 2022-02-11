import React, {useState} from 'react'

export default function TextForm(props) {
    const handleUpClick = ()=>{
        console.log("Uppercase was clicked" + text);
        let newText=text.toUpperCase();
        setText(newText)
        props.showAlert("Converted to Uppercase !",'success')
    }
    const handleLoClick = ()=>{
        console.log("Lowercase was clicked" + text);
        let newText=text.toLowerCase();
        setText(newText)
        props.showAlert("Converted to Lowercase !",'success')
    }
    const handleclearClick = ()=>{
        console.log("clear was clicked" + text);
        let newText=' ';
        setText(newText)
    }
    const handleCopy = ()=>{
        console.log("I am Copy");
        var text=document.getElementById("myBox");
        text.select()
        navigator.clipboard.writeText(text.value);
        props.showAlert("Text has been Copied",'success')
    }
    const handleOnChange = (event)=>{
        console.log("On change");
        setText(event.target.value)
       
    }
    const handleExtraSpace = ()=>{
        let newText= text.split(/[ ]+/);
        setText(newText.join(" "))
        props.showAlert("Extra spaces has been removed",'success')
    }
    const [text, setText] = useState('');
  return (
    <>
  <div className="container" style={{color: props.mode==='dark'?'white':'#042743'}}>
      <h1>{props.heading}</h1>
      <div className="mb-3">
   
      <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode==='dark'?'grey':'white', color: props.mode==='dark'?'white':'#042743'}} id="myBox" rows="8"></textarea>
      </div>
      <button className="btn btn-primary mx-2" onClick={handleUpClick}> Convert to UpperCase</button>
      <button className="btn btn-primary mx-2" onClick={handleLoClick}> Convert to LowerCase</button>
      <button className="btn btn-primary mx-2" onClick={handleclearClick}> Clear</button>
      <button className="btn btn-primary mx-2" onClick={handleCopy}> Copy</button>
      <button className="btn btn-primary mx-2" onClick={handleExtraSpace}> Remove Extra Spaces</button>
       </div>
  <div className="container my-3" style={{color: props.mode==='dark'?'white':'#042743'}}>
      <h1>Your Text Summary</h1>
      <p>{text.split(" ").length} words and {text.length} characters</p>
      <p>{0.008 * text.split(" ").length} Minutes read</p>
      <h2>Preview</h2>
      <p>{text.length>0? text:'Enter something in the TextBox to Preview it'}</p>
  </div>
  </>
  )
}

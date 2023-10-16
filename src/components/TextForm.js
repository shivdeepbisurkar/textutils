import React, { useState } from "react";

export default function TextForm(props) {
  const handleUpClick = () => {
    //console.log("Uppercase was Clicked" );
    let newText = text.toUpperCase();
    setText(newText);
  };


  const handleClearClick = () => {
    //console.log("Uppercase was Clicked" );
    //let newText = text.toUpperCase();
    setText('');
  };
  const handleLoClick = () => {
    //console.log("Uppercase was Clicked" );
    let newText = text.toLowerCase();
    setText(newText);
  };
  const handleSortClick = () => {
    //console.log("Uppercase was Clicked" );
    const charArray = text.split(" ");

    // Sort the array of characters.
    const sortedCharArray = charArray.sort();

    // Join the sorted array back into a string.
    const sortedString = sortedCharArray.join(" ");

    setText(sortedString);
  };

  const handleOnChange = (event) => {
    //console.log("Uppercase was Clicked");
    setText(event.target.value);
  };
  const [text, setText] = useState("");
  //setText("new Text");
  return (
    <>
      <div className="container" style={{color:props.mode==='light'?'#040232':'white'}}>
        <div className="mb-3">
          <h1>{props.heading}</h1>

          <textarea
            className="form-control"
            value={text}
            id="myBox"
            onChange={handleOnChange}
            style={{backgroundColor:props.mode==='light'?'white':'#040232',color:props.mode==='light'?'black':'white'}}
            rows="8"
          ></textarea>
        </div>
        <button className="btn btn-primary mx-3" onClick={handleUpClick}>
          Convert to UPPERCASE
        </button>
        <button className="btn btn-primary mx-3" onClick={handleLoClick}>
          Convert to LowerCASE
        </button>
        <button className="btn btn-primary mx-3" onClick={handleSortClick}>
          Sorted
        </button>
        <button className="btn btn-primary mx-3" onClick={handleClearClick}>
          Clear
        </button>
      </div>
      <div className="container my-3" style={{color:props.mode==='light'?'#040232':'white'}}>
        <h2>Your text Summary</h2>
        <p>
          {text.split(" ").length} words and {text.length} characters
        </p>
        <h2>Preview</h2>
        <p>{0.008 * text.split(" ").length}Maxtime required</p>
      </div>
    </>
  );
}

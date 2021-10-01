import "./App.css";
import { useEffect, useState } from "react";

function App() {
  let [note, setNote] = useState('');

  const handleTextChange = (e) => setNote(e.target.value)
  const handleSave = () => localStorage.setItem("note", note);
  const handleReset = () => {
    localStorage.removeItem("note")
    setNote('') 
  }

  useEffect(()=>{
    const localStorageNote = localStorage.getItem("note");
    setNote(localStorageNote)
  }, [])

  return (
    <div className="App">
      <div className="box">
        <div className="field">
          <div className="control">
            <textarea 
              className="textarea is-large"
              placeholder="Notes..." 
              onChange = { handleTextChange }
              value = { note }
            />
          </div>
        </div>
        <button onClick={handleSave} className="button is-large is-primary is-active">Save</button>
        <button onClick={handleReset} className="button is-large">Clear</button>
      </div>
    </div>
  );
}

export default App;

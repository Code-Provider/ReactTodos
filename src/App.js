
import './App.css';

function App() {
  return (
    <div className="App Todo">
      <p id = "title">Add a Todo</p>
      <input type = "text"></input>
      <div className = "box">
        <div className = "boxheader">
          <button>Add</button><button>Clear Selected</button><button>Clear All</button>
          </div>


        <div><p><input type = "checkbox"></input>First to do</p></div>
        <div><p><input type = "checkbox"></input>Second to do </p></div>
        
      </div>
    </div>
  );
}

export default App;

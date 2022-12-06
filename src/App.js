import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">

        <h2 className='cookConstruction'
         style={{
          position: "fixed",
          top: "0px",
          left: "24px"
        }}>
        Cook Construction
        </h2>

        <div className='logoContainer'>
        <p className='logo'
         style={{
          fontSize: "8em"
        }}>🏗️</p>
        </div>

        <button className='contact'>
          <a style={{
            textDecoration: "none",
            color: "#fff"
          }} href="mailto:cdoubleokac@gmail.com">Contact</a>
        </button>

      </header>
    </div>
  );
}

export default App;

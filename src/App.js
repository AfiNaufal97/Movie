import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <input placeholder="cari judul film" className="Movie-search"/>
        <div className="Movie-container">
          <div className="Movie-wrapper">
            <div className="Movie-title">Title 1</div>
            <img className="Movie-image" />
            <div className="Movie-date">11-12-2022</div>
            <div className="Movie-rate">8.9</div>
          </div>
        </div>

      </header>
    </div>
  );
}

export default App;

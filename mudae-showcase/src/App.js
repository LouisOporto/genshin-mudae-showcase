import logo from './logo.svg';
import './App.css';
import Navbar from './components/navbar';
import Card from './components/card';
import characters from './components/data/genshinData.json'


function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="Content">
        <h1>Scott Dolphin's Character Showcase</h1>
        <div className="Shelf">
            {characters.characters.map((item, i) => (
                <Card characterName={item.key} level={item.level} constellation={item.constellation} ascension={item.ascension}/>
            ))}
        </div>
      </div>
    </div>
  );
}

export default App;
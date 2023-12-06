import './App.css';
import Navbar from './components/navbar';
import Card from './components/card';
import data from './components/data/genshinData.json';


function App() {
  let cw_map = new Map();
  data.weapons.map((item, i) => {
      if (item.location !== "") {
        cw_map.set(item.location, item.key);
      }
      return 0;
    })
    console.log(cw_map);

  return (
    <div className="App">
      <Navbar />
      <div className="Content">
        <h1>Mudae's Character Showcase</h1>
        <div className="Shelf">
          {data.characters.map((item, i) => (
            <Card characterName={item.key} weapon={cw_map.get(item.key)} level={item.level} constellation={item.constellation} ascension={item.ascension} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;

import './App.css';
import Card from './components/card';
import data from './components/data/genshinData.json';
import pb from './components/pocketbase';

function App() {
  let cw_map = new Map();
  data.weapons.map((item, i) => {
    if (item.location !== "") {
      cw_map.set(item.location, item.key);
    }
    return 0;
  })
  console.log(cw_map);
  if (pb.authStore.isValid) {
    return (
      <>
        <div className="Content">
          <h1>Mudae's Character Showcase</h1>
          <div className="Shelf">
            {data.characters.map((item, i) => (
              <Card characterName={item.key} weapon={cw_map.get(item.key)} level={item.level} constellation={item.constellation} ascension={item.ascension} />
            ))}
          </div>
        </div>
      </>
    );
  } else {
  return (<></>);
  }
}

export default App;

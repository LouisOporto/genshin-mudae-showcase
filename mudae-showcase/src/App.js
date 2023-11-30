import logo from './logo.svg';
import './App.css';
import Navbar from './components/navbar';
import ShelfRow from './components/card';


function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="Content">
        <h1>Scott Dolphin's Character Showcase</h1>
        <div className="Shelf">
          <ShelfRow character1="Hu tao" character2="Furina" character3="Jean" character4="Xin qiu" />
          <ShelfRow character1="Mona" character2="Yanfei" character3="Zhongli" character4="Xiangling" />
        </div>
      </div>
    </div>
  );
}

export default App;
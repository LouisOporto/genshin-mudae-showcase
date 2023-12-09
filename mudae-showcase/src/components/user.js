import '../App.css';
import Card from './card';
import data from './data/genshinData.json';
import pb from './pocketbase';
import Navbar from './navbar';
import { useState, useRef, useEffect } from 'react';

function User() {
  const [data, setData] = useState();
  const [popUpOpen, setPopUpOpen] = useState(false);
  const [cwMap, setCwMap] = useState();

  useEffect(() => {
    async function some() {
      const record = await pb.collection('users').getOne(pb.authStore.model.id,  { requestKey: null });
      const fileName = record.json;
      console.log(fileName);
      const url = pb.files.getUrl(record, fileName);
      const result = await fetch(url);
      const json = await result.json();
      console.log(json);
      setData(json);
      if (json && json.weapons) {
        let cw_map = new Map();
        json.weapons.map((item, i) => {
          if (item.location !== "") {
            cw_map.set(item.location, item.key);
          }
        })
        setCwMap(cw_map);
        console.log(cw_map);
      }
    }
    some();
  }, [popUpOpen])

// if (pb.authStore.isValid) {

function popUpTrue() {
  setPopUpOpen(true);
}

function popUpFalse() {
  setPopUpOpen(false);
}

async function handleUpload(file) {
  await pb.collection('users').update(pb.authStore.model.id, {
    json: file,
  });
}

return (
  <>
    <Navbar />
    <div id="userSec" className="App">
      <button onClick={popUpTrue}>Upload a JSON</button>
      <div className="Content">
        <h1>Mudae's Character Showcase</h1>
        <div className="Shelf">
          {data ? data?.characters?.map((item, i) => (
            <Card characterName={item.key} weapon={cwMap.get(item.key)} level={item.level} constellation={item.constellation} ascension={item.ascension} />
          )) : <></>}
        </div>
      </div>
    </div>
    {popUpOpen ? <PopUp popUpFalse={popUpFalse} handleUpload={handleUpload} /> : <></>}
  </>
);
}

const PopUp = (props) => {
  const [file, setFile] = useState();

  function handleOutsideClick(e) {
    if (e.target.classList.contains('popup-overlay')) {
      props.popUpFalse();
    }
  }

  function handleSubmit(e) {
    e.preventDefault();
    props.handleUpload(file);
    props.popUpFalse();
  }

  function handleChange(e) {
    setFile(e.target.files[0]);
  }

  return (
    <div className="fixed top-0 left-0 w-screen h-screen bg-[rgba(0, 0, 0, 0.5)] flex justify-center items-center z-40 backdrop-blur-sm popup-overlay" onClick={handleOutsideClick}>
      <div className='h-[35%] w-[30%] bg-white rounded-lg flex flex-col items-center z-50 justify-around p-2'>
        <h1 className="text-center text-3xl">Upload File</h1>
        <form onSubmit={handleSubmit} className='flex flex-col justify-around items-center h-1/2'>
          <input onChange={handleChange} type="file" accept='json'></input>
          <button type='submit'>Upload</button>
        </form>
      </div>
    </div>
  );
};

export default User;

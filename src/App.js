import './App.css';
import Table from './Components/Table';
import TopSection from './Components/TopSection';
import BottomSection from './Components/BottomSection';
import { useState } from 'react';

function App() {

  const [ID,setID] = useState([]);
  const [Data5,setData5] = useState([])

  return (
    <div className="App">
      <TopSection setID={setID} setData5={setData5} Data5={Data5}/>
      <Table ID={ID} setData5={setData5} />
      <BottomSection/>
    </div>
  );
}

export default App;

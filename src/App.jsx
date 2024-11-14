import './App.css'
import { useState } from 'react';
import Header from './components/Header';
import Gallery from './components/Gallery';
import Footer from './components/Footer';
import data from './components/data.json';
import SelectedBeast from './components/SelectedBeast';

function App() {
  const [displayModal, setDisplayModal] = useState(false);
  const [selectedBeast, setSelectedBeast] = useState({});

  function displayAsModal(name) {
    const beastWithName=data.find(beast=>beast.title===name);
    setSelectedBeast(beastWithName);
    setDisplayModal(true);
  }

  function handleClose(){
    setDisplayModal(false);
  }

  return (
    <div className="App">
      <Header/>
      <Gallery data={data} displayAsModal={displayAsModal}/>

      <SelectedBeast
      selectedBeast={selectedBeast}
      show={displayModal}
      handleClose={handleClose}
      />
      <Footer/>
    </div>
  );
}

export default App;

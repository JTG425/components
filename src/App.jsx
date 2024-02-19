import './App.css';
import React, {useState} from 'react';
import NavBar from './siteComponents/navbar';
import Buttons from './siteComponents/buttons';
import Home from './siteComponents/home';
import {motion, AnimatePresence} from 'framer-motion';


function App() {
  const [page, setPage] = useState('Home');

  const handlePageChange = (page) => {
    setPage(page);
    console.log(page);
  }



  return (
    <div className="App">
      <header className="App-header">
      </header>
      <NavBar page={page} setPage={handlePageChange} />
      <AnimatePresence>
        <motion.div
          className='page'
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          {page === 'Home' && <Home />}
          {page === 'Buttons' && <Buttons />}
        </motion.div>

      </AnimatePresence>
    </div>
  );
}

export default App;

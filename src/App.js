import './App.css';

import React, { useState} from 'react'
import Navbar from './components/Navbar';
import News from './components/News';
import { BrowserRouter as Router, Routes,Route,} from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'

const App = ()=> {
  const pageSize=15;
  // const apiKey= process.env.REACT_APP_NEWS_API

  const [progress, setProgress] = useState(0)

 

    return (
      <div>
        <Router>
          <Navbar/>
          <LoadingBar
          height={3}
        color='#f11946'
        progress={progress}
      />
          <Routes>
            <Route path='/general' element={<News setProgress={setProgress} key='general' pageSize={pageSize} country='in' category='general' />}></Route>
            <Route path='/business' element={<News setProgress={setProgress} key='business' pageSize={pageSize} country='in' category='business' />}></Route>
            <Route path='/entertainment' element={<News setProgress={setProgress} key='entertainment' pageSize={pageSize} country='in' category='entertainment' />}></Route>
            <Route path='/health' element={<News setProgress={setProgress}  key='health' pageSize={pageSize} country='in' category='health' />}></Route>
            <Route path='/science' element={<News setProgress={setProgress}  key='science' pageSize={pageSize} country='in' category='science' />}></Route>
            <Route path='/sports' element={<News setProgress={setProgress} key='sports' pageSize={pageSize} country='in' category='sports' />}></Route>
        
          </Routes>
        </Router>

      </div>
    )
  
}

export default App

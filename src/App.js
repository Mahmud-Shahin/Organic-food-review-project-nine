
import './App.css';
import Header from './components/Header/Header';
import { Route, Routes } from 'react-router-dom';

import Dashboard from './components/Dashboard/Dashboard';
import Blogs from './components/Blogs/Blogs';
import About from './components/About/About';
import Home from './components/Home/Home';
import NotFound from './components/NotFound/NotFound';
import AllReviews from './components/AllReviews/AllReviews';


function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/Home' element={<Home></Home>}></Route>
        <Route path='/Review' element={<AllReviews></AllReviews>}></Route>
        <Route path='/Dashboard' element={<Dashboard></Dashboard>} ></Route>
        <Route path='/Blogs' element={<Blogs></Blogs>} ></Route>
        <Route path='/About' element={<About></About>} ></Route>
        <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes>
    </div>
  );
}

export default App;

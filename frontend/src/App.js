import './App.css';
import React from 'react';
import Navbar from './components/Navbar';
import {Routes, Route} from "react-router-dom"
import Auth from './components/Auth';
import Blogs from './components/Blogs';
import UserBlogs from './components/UserBlogs';
import BlogInfo from './components/BlogInfo';
import AddBlog from './components/AddBlog';
// import {useSelector} from "react-redux";

function App() {
  // let isLoggedIn = useSelector( state => {
  //   return state.isLoggedIn;
  // });
  return (
    <div className="App">
      <React.Fragment>
        <Navbar></Navbar>

        <Routes>
          <Route path='/auth' element={<Auth/>}/>
          <Route path='/blogs' element={<Blogs/>}/>
          <Route path='/myBlogs' element={<UserBlogs/>}/>
          <Route path='/blogInfo' element={<BlogInfo/>}/>
          <Route path='/blogs/add' element={<AddBlog/>}/>

        </Routes>
      </React.Fragment>
    </div>
  );
}

export default App;

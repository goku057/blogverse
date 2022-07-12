import './App.css';
import React from 'react';
import Navbar from './components/Navbar';
import {Routes, Route} from "react-router-dom"
import Auth from './components/Auth';
import Blogs from './components/Blogs';
import UserBlogs from './components/UserBlogs';
import BlogInfo from './components/BlogInfo';
import AddBlog from './components/AddBlog';
import BlogCard from './components/BlogCard';
import EditBlog from './components/EditBlog';
// import {useSelector} from "react-redux";
import Search from './components/Search';
import Verify from './components/Verify';
import Dummy from "./components/Dummy";
import Land from "./components/Land";

function App() {
  // let isLoggedIn = useSelector( state => {
  //   return state.isLoggedIn;
  // });
  return (
    <div className="App">
      <React.Fragment>
        <Navbar></Navbar>

        <Routes>
        <Route path='/' element={<Land/>}/>
          <Route path='/auth' element={<Auth/>}/>
          <Route path='/blogs' element={<Blogs/>}/>
          <Route path='/myBlogs' element={<UserBlogs/>}/>
          <Route path='/blogInfo/:pid' element={<BlogInfo/>}/>
          <Route path='/blogs/add' element={<AddBlog />}/>
          <Route path='/blogs/edit/:pid' element={<EditBlog/>}/>
          <Route path='/dummy' element={<Dummy/>}/>
          <Route path='/search' element={<Search/>}/>
          <Route path='/verify' element={<Verify/>}/>
        </Routes>
      </React.Fragment>
    </div>
  );
}

export default App;

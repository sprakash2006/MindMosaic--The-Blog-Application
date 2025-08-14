import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "../src/Layout/Layout";

import Home from './Pages/Home';
import Explore from './Pages/Explore';
import AddBlog from './Pages/AddBlog';
import ReadBlog from './Pages/ReadBlog';
import Profile from './Pages/Profile';

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="/blogs/:title" element={<ReadBlog />} />
            <Route path="/Explore" element={<Explore />} />
            <Route path="/AddBlog" element={<AddBlog />} />
            <Route path="/Profile/:username" element={<Profile />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App

/* 
  1. npm i react-router-dom
  2. 필요한 페이지만큼 Component파일 생성 + NavBar 파일 생성
  3. App.js import
    - BrowserRouter, Routes, Route 모두 사용
    - <Routes path="경로" element={<컴포넌트/>}/>
*/

import './App.css';
import { BrowserRouter , Routes, Route } from "react-router-dom";
// import { BrowserRouter as Router , Routes, Route } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import Home from "./components/pages/Home";
import Contact from './components/pages/Contact';
import About from './components/pages/About';
import NotFound from './components/pages/NotFound';
import Orders from './components/pages/Orders';
import News from './components/pages/News';
import Products from './components/pages/Products';
import Featured from './components/pages/Featured';
import Admin from './components/pages/Admin';



function App() {
  return (
    <div className="App">
        <BrowserRouter>
          {/* 고정되어 있는 Nav 메뉴 */}
          <Navbar/>

          <Routes>
            <Route path="" element={<Home/>}/>
            <Route path="about" element={<About/>}/>
            <Route path="contact" element={<Contact/>}/>
            <Route path="orders" element={<Orders/>}/>
            <Route path="products" element={<Products/>}>
                <Route path="featured" element={<Featured/>}/>
                <Route path="news" element={<News/>}/>
            </Route>
            <Route path="admin" element={<Admin/>}></Route>
            <Route path="*" element={<NotFound/>}/>
          </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;

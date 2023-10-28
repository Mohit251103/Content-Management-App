import { Blog } from "./components/Blog";
import { Home } from "./components/Home";
import { Navbar } from "./components/Navbar";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <>
      <Navbar />
      <Router>
        <Routes>
          <Route path="/blog/:id" element={<Blog/>} />
          <Route path="/" element={<Home/>} />
        </Routes>
      </Router>
    </>
  );
}

export default App;

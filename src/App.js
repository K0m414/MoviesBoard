import './App.css';
import Home from './views/Home';
import NotFound from './views/NotFound';
import {BrowserRouter, Routes, Route, useParams} from "react-router-dom"
import Header from './components/Header';
import AddMovie from './views/AddMovie';
import MovieDetail from './views/MovieDetail';
import EditMovie from './views/EditMovie';
import Footer from './components/Footer';

function App() {
  return(
    <div>
    <BrowserRouter>
    <Header />
      <Routes >
        <Route path="/" element={<Home />} />
        <Route path="/MovieDetail" element={<MovieDetail />} />
        <Route path="/AddMovie" element={<AddMovie />} />
        <Route path="/EditMovie" elementt={<EditMovie />} />
        {/* <Route path="*" element={<NotFound />}/>  */}
      </Routes >
      <Footer />
    </BrowserRouter>
    </div>
  )
}

export default App;
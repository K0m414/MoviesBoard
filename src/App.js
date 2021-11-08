import './App.css';
import Home from './views/Home';
import NotFound from './views/NotFound';
import {BrowserRouter, Routes, Route} from "react-router-dom"
import Header from './components/Header';
import AddMovie from './views/AddMovie';
import MovieDetail from './views/MovieDetail';
import EditMovie from './views/EditMovie';

function App() {
  return(
    <div>
    <BrowserRouter>
    <Header />
      <Routes >
        <Route path="/" exact element={<Home />} />
        <Route path="/MovieDetail" exact element={<MovieDetail />} />
        <Route path="/AddMovie" exact element={<AddMovie />} />
        <Route path="/EditMovie" exact elementt={<EditMovie />} />
        {/* revoir la route pour not found */}
        <Route path="*" element={<NotFound />}/> 
      </Routes >
    </BrowserRouter>
    </div>
  )
}

export default App;
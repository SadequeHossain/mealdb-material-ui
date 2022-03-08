
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Restaurent from './components/Restaurant/Restaurent';
import About from './components/About/About';
import Home from './components/Home/Home';
import Header from './components/Header/Header';
import Mealdetails from './components/MealDetails/Mealdetails';
import Notfound from './components/notFound/Notfound';

function App() {
  return (
    <BrowserRouter>
      <Header></Header>
      <Routes>
        <Route path="/restaurant" element={<Restaurent />}></Route>
        <Route exact path="/about" element={<About />}></Route>
        <Route path="/home" element={<Home />}></Route>
        <Route exact path="/foodcard/:idMeal" element={<Mealdetails />}></Route>
        <Route exact path="*" element={<Notfound />}></Route>



      </Routes>

    </BrowserRouter>
  );
}

export default App;

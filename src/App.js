import { Route, Routes } from 'react-router-dom';
import './App.css';
import Allrestaurants from './components/Allrestaurants/Allrestaurants';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Viewrestaurant from './components/Singlerestaurant/Viewrestaurant';


function App() {
  return (


    <div className="app">
      <header>
        <Header></Header>
      </header>
      
      <section>
        <Routes>

          <Route path='/' element={<Allrestaurants />}/>
          <Route path='view/:id' element={<Viewrestaurant />}/>
        
        
        </Routes>
       
      </section>

      <footer>
        <Footer></Footer>
      </footer>

    </div>
  );
}

export default App;

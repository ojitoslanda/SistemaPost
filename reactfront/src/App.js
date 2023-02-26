import './App.css';
import logo from './logo.svg';
import Login from './components/Login'; //Importar Nuestros componentes
import ShowPosts from './components/ShowPosts'; //Importar Nuestros componentes
import CreatePosts from './components/CreatePosts'; //Importar Nuestros componentes
import EditPosts from './components/EditPosts'; //Importar Nuestros componentes
import { BrowserRouter, Routes, Route } from 'react-router-dom';
function App() {
  return (
    <div className="App">
        <header>
          <img src={logo} className='App-logo' alt="logo"/>
        </header>
        <BrowserRouter>
          <Routes>
              <Route path='/' element={  <Login/>  } />
              <Route path='/list' element={ <ShowPosts/>  } />
              <Route path='/create' element={ <CreatePosts/>  } />
              <Route path='/edit/:id' element={  <EditPosts/>  } />
          </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;

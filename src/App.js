import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Login } from './Pages/Login/Login';
import { Cadastro } from './Pages/Cadastro/Cadastro';
import { Home } from './Pages/Home/Home';
import { Navbar } from './components/Navbar/Navbar';
import { useState } from 'react';
import CadastroAlunos from './Pages/CadastroAlunos/CadastroAlunos';
import { Modal } from './components/Modal';



function App() {
  const [user, setUser] = useState();
  const [modalShowed, setModalShowed] = useState();
  const [livroItemModal, setLivroItemModal] = useState();

 
  return (
    <div className="App">
      <BrowserRouter>
        {user && <Navbar />}
        <Routes>
          <Route path='/' element={<Login />} />
          <Route path='/cadastro' element={<Cadastro />} />
          <Route path='/cadastro-alunos' element={<CadastroAlunos />} />
          <Route path='/home' element={<Home setUser={setUser} setModalShowed={setModalShowed} setLivroItemModal={setLivroItemModal} />} />


        </Routes>

      </BrowserRouter>

      <Modal
        modalShowed={modalShowed}
        setModalShowed={setModalShowed}
        livroItemModal={livroItemModal}
      >




      </Modal>
    </div>
  );
}

export default App;

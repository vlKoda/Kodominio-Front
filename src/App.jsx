import './App.css';
import Morador from './pages/morador/Morador';
import Index from './pages/home/Index';
import Porteiro from './pages/Porteiro/Porteiro';
import Sindico from './pages/sindico/Sindico';
import Adm from './pages/adm/Adm';
import Admc from './pages/adm/Admc'
import Cadastro from './pages/lc/Cadastro'
import Login from './pages/lc/Login'
import Owner from './pages/owner/Owner'
import Moradorp from './pages/morador/Moradorp';
import Porteirop from './pages/Porteiro/Porteirop';
import Admi from './pages/adm/Admi';
import Owneri from './pages/owner/OwnerI';
import Sindicoi from './pages/sindico/Sindicoi';
import Ownerc from './pages/owner/Ownerc';
import Sindicoo from './pages/sindico/Sincidoo';
import Moradoro from './pages/morador/Moradoro';
import Porteiroo from './pages/Porteiro/Porteiroo';
import CadastroM from './pages/lc/CadastroM';
import CadastroC from './pages/lc/CadastroC';
import CadastroA from './pages/lc/CadastroA';
import CadastroF from './pages/lc/CadastroF'
import { Home, Pages } from '@mui/icons-material';
import { BrowserRouter as Router, Route, Routes, useNavigate } from 'react-router-dom';
import Integrantes from './pages/adm/components/Integrantes';




function App() {
  return (
    
    
<Router>
      <Routes>
        <Route path="/" element={<Index/>} />
        <Route path="/login" element={<Login />} />
        <Route path="owner/cadastros/condominio" element={<CadastroC />} />
        <Route path="/owner" element={<Owner />} />
        <Route path="/adm" element={<Adm />} />
        <Route path="/morador" element={<Morador />} />
        <Route path="/adm/cadastros" element={<Admc />} />
        <Route path="/adm/cadastros/morador" element={<CadastroM />} />
        <Route path="/adm/cadastros/funcionario" element={<CadastroF />} />
        <Route path="/owner/cadastros" element={<Ownerc />} />
        <Route path="/owner/cadastros/adm" element={<CadastroA />} />
        <Route path="/owner/integrantes" element={<Integrantes />} />
      </Routes>
 </Router>

  );
}

export default App;
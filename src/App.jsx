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
import { Pages } from '@mui/icons-material';
import { BrowserRouter as Router, Route, Routes, useNavigate } from 'react-router-dom';




function App() {
  return (
    
    
<Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/inicio" element={<Index />} />
        <Route path="/cadastrocondominio" element={<CadastroC />} />
        <Route path="/owner" element={<Owner />} />
        <Route path="/owner/cadastros" element={<Ownerc />} />
        <Route path="/owner/cadastros/condominio" element={<CadastroC />} />
      </Routes>
 </Router>

  );
}

export default App;
import Header from "./components/Header";
import { Container } from '@mui/material';
import Main from "./components/Main";
import Footer from "./components/Footer";

function Index() {
  localStorage.removeItem('token');
  return (
    <div >


      <Container sx={{
        backgroundColor: '#d9d9d9',
      }}>
        <div className="home">

          <Header />
          <Main />
          <Footer />
        </div>

      </Container>
    </div>
  );
}
export default Index;
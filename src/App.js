import './App.css';
import Header from './components/Header';
import SecaoCapa from './components/SecaoCapa';
import Produtos from './components/Produtos';
import SecaoSobre from './components/sobre';
import Rodape from "./components/rodape"
function App() {
  return (
    <div className="App">
     <Header/>
     <SecaoCapa/>
     <Produtos />
     <SecaoSobre />
     <Rodape/>
    </div>
  );
}

export default App;


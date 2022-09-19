import './App.css';


import NavBar from './componentes/NavBar/NavBar';
import ItemListContainer from './componentes/ItemListContainer/ItemListContainer';

function App() {
  return (
    <div id="1" className="App">
      <NavBar />
      <ItemListContainer greeting={"Impresiones 3d"} />
      </div>
  );
}

export default App;

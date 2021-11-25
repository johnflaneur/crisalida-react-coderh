import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import NavbarComp from './containers/Navbar/NavbarComp'
import ItemListContainers from './containers/itemListContainer/ItemListContainers';
import CounterContainer from './containers/cards-products/cards-products';

function App() {
  return (
    <div className="App">
      <NavbarComp/>
      <ItemListContainers greeting="Terrícolas" />
      <CounterContainer />
    </div>
  );
}

export default App;

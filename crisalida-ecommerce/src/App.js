import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import NavbarComp from './containers/Navbar/NavbarComp'
import ItemListContainers from './containers/itemListContainer/ItemListContainers';
import CounterContainer from './containers/cards-products/CounterContainer';

function App() {
  return (
    <div className="App">
      <NavbarComp/>
      <ItemListContainers />
      <CounterContainer initial={1} stock={5} />
    </div>
  );
}

export default App;

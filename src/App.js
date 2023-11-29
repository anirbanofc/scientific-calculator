import logo from './logo.svg';
import './App.css';
import Buttons from "./Components/buttons"
import { isCompositeComponent } from 'react-dom/test-utils';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDivide } from '@fortawesome/free-solid-svg-icons'

import Nav from "./Components/nav"
function App() {
  return (
    <div className="App">
      <Nav />
      <Buttons />
    </div>
  );
}
export default App;

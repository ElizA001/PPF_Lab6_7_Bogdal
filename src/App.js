import './App.css';
import {CFooter} from './components/CFooter'
import CHeader from './components/CHeader'
import CContents from './components/CContents'

function App() {
  return (
    <div className="App">
      <CHeader aName="Jan" aFamily="Kowalski"/>
      
      <CContents/>
      <CFooter weather="słoneczna" temp="25">
        <p>Niebo jest bezchmurne, wiatr słaby.</p>
      </CFooter>
     
    </div>
  );
}


export default App;

import './App.css';

import Provider from './context-store/provider'
import SomeComponent from "./someComponent";
import SomeFunctionalComponent from "./someFunctionalComponent";

function App() {
  return (
    <div className="App">
      <Provider>
        <SomeComponent/>
        <SomeFunctionalComponent/>
      </Provider>
    </div>
  );
}

export default App;

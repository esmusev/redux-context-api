import './App.css';

import Provider from './context-store/provider'
import SomeComponent from "./someComponent";

function App() {
  return (
    <div className="App">
      <Provider>
        <SomeComponent/>
      </Provider>
    </div>
  );
}

export default App;

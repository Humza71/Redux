//import logo from './logo.svg';
import './App.css';
import Counter from './containers/Counter/Counter';
import {connect} from 'react-redux'

import Check from './check'
import Again from './Again';


function App() {
  return (
    <div className="App">
     {/* <Counter /> */}
     <Check />
     <Again />

    </div>
  );
}

export default App;

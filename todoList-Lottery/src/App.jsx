import './App.css';
import Lottery from './Lottery';
import LudoBoard from './LudoBoard';
import TodoList from './TodoList';
import { sum } from './helper';

import Form from './Form';


function App() {

  let winCondition = (ticket) => {
    return ticket[0] === 0;
  };

  return (
    <>
      {/* <Lottery n={3} winCondition={winCondition} /> */}
      <Form/>
    </>
  );
}

export default App;

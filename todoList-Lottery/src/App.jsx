import './App.css';
import Lottery from './Lottery';
import LudoBoard from './LudoBoard';
import TodoList from './TodoList';
import { sum } from './helper';
import CommentsForm from './CommentsForm';
import Comment from './Comment';

import Form from './Form';


function App() {

  // let winCondition = (ticket) => {
  //   return ticket[0] === 0;
  // };

  return (
    <>
      {/* <Lottery n={3} winCondition={winCondition} /> */}
      {/* <Form/> */}
      <Comment/>
      <CommentsForm/>
    </>
  );
}

export default App;

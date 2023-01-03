import  {Container} from './components/styles/Container.styled'
import Header from './components/header';
import Button from './components/Button';
import Modal from './components/Modal';
import { useState } from 'react';

function App() {
  const [show,setShow]=useState(false)
  return (
    <>
      <Header/>
      <Container>
        <h1> Discover your <span> Hogwarts House </span>  </h1>
         <Button toggleModel={()=>setShow(true)}/>

         {
          show && <Modal/>
         }
     </Container>
    </>
  );
}

export default App;

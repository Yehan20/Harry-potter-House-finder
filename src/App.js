import { Container } from './components/styles/Container.styled'
import Header from './components/header';
import Button from './components/Button';
import Modal from './components/Modal';
import { ThemeProvider } from 'styled-components'
import { useEffect, useState } from 'react';
import GlobalStyles from './components/styles/GloabStyle';

function App() {
  const theme = {
    headerClr: 'red',
    bodyClr: 'green',
    textClr: '#333'

  }
  const getData=async()=>{
    try{
      const response = await fetch('./questions/questions.json')
      console.log(response)
      const data = await response.text();
      console.log(data)
      
    }catch(error){
      console.log(error)
    }

    //  fetch('./questions/questions.json').then((data)=>data.json()).then(res=>console.log(res)).catch(err=>console.log(err))
  }
  useEffect(()=>{
    getData();
  },[])
  const [show, setShow] = useState(false)
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyles/>
        <Header bg="red" />
        <Container>
          <h1> Discover your <span> Hogwarts House </span>  </h1>
          <Button toggleModel={() => setShow(true)} />

          {
            show && <Modal closeModal={() => setShow(false)} />
          }
        </Container>
      </ThemeProvider>
    </>
  );
}

export default App;

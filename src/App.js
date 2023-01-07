import { Container,StyledDive } from './components/styles/Container.styled'
import Header from './components/header';
import Button from './components/Button';
import Modal from './components/Modal';
import { ThemeProvider } from 'styled-components'
import { useEffect, useState } from 'react';
import GlobalStyles from './components/styles/GloabStyle';
import house  from './images/houses.png';


function App() {
  const theme = {

    textClr: '#333'

  }
    const localHouse = localStorage.getItem('house');
    const [yourHouse,setYourHouse]=useState({color:'#222',name:'Not Sorted',src:house,info:'Find your House Now',finished:false,attempts:0});
    
    useEffect(()=>{
         if(localStorage.getItem('house')){
            setYourHouse(JSON.parse(localStorage.getItem('house')))
         }
    },[localHouse])

  const [show, setShow] = useState(false)
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyles/>
        <Header yourHouse={yourHouse} />
        <Container>
        <StyledDive bg={yourHouse.color}>
             <h3>Your Belong to: <span>{yourHouse.name}</span></h3>
             <p>{yourHouse.info}</p>
             <img src={yourHouse.src} alt={yourHouse.name} />
        </StyledDive>

          <h1> Discover your <span> Hogwarts House </span>  </h1>
          <Button  finished={yourHouse.finished} attempts={yourHouse.attempts} toggleModel={() => setShow(true)} />

          {
            show && <Modal attempts={yourHouse.attempts} closeModal={() => setShow(false)} />
          }
      
        </Container>
      </ThemeProvider>
    </>
  );
}

export default App;

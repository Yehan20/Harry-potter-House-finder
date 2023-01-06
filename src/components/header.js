import { Container } from './styles/Container.styled'
import { HeaderStyled } from './styles/Header.styled';

const Header = ({yourHouse}) => {
    // let color = localStorage.getItem('house') ? JSON.parse(localStorage.getItem('house')).color[0] : '#222';
    // let src = localStorage.getItem('house') ? JSON.parse(localStorage.getItem('house')).src : house;
  
   // console.log(color);
    return (<HeaderStyled bg={yourHouse.color}>
        <Container>
            <div>
               <img src={yourHouse.src} alt="House" />
            </div>
            <h2>Harry Potter House finder</h2>
        </Container>
    </HeaderStyled>);
}

export default Header;
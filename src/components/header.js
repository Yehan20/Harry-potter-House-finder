import { Container } from './styles/Container.styled'
import { HeaderStyled } from './styles/Header.styled';
import house  from '../images/houses.png';
const Header = () => {
    return (<HeaderStyled bg='red'>
        <Container>
            <div>
               <img src={house} alt="House" />
            </div>
            <h2>Harry Potter House finder</h2>
        </Container>
    </HeaderStyled>);
}

export default Header;
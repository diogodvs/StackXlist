import {Content, ImageLogo, Container} from './header-styles';

import logoSvg from '../../assets/icons/group1.svg'

export function Header(){

    return(
        <Container>
            <Content>
                <ImageLogo src={logoSvg} alt='StackX'/>
                <button className='btn btn-outline-primary'>
                    <img src='https://avatars.githubusercontent.com/u/88931507?v=4' width={46}></img>
                </button>
            </Content>
        </Container>

    )
}
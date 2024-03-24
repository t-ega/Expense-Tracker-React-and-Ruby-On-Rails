import styled, {keyframes} from "styled-components";

export const AppStyled = styled.div`
    height: 100vh;
    //background-image: ;
    position: relative;
    
`;

const moveOrb = (width, height) => keyframes`
    0% {
        transform: translate(0, 0);
    }
    50% {
        transform: translate(${width/1.2}px, ${height/2}px);
    }
    100% {
        transform: translate(0, 0);
    }
`;

export const OrbStyled = styled.div`
    width: 70vh;
    height: 70vh;
    position: absolute;
    border-radius: 50%;
    margin-left: -37vh;
    margin-right: -37vh;
    background: linear-gradient(180deg, #F56692 0%, #F2994A 100%);
    filter: blur(400px);
    animation: ${props => moveOrb(props.width, props.height)} 2s alternate linear infinite;
    
`;

export const NavStyled = styled.nav`
    
`
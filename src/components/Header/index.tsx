import HeaderWrapper from './styles';
import logo from '../../assets/icons/brand_logo.svg';


interface Props {
    
}

export const Header = (props: Props) => {
    return (
        <HeaderWrapper>
            <img src={logo} alt="origin" />
        </HeaderWrapper>
    )
}

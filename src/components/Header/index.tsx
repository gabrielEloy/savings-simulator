import HeaderWrapper from './styles';
import logo from '../../assets/icons/brand_logo.svg';


interface Props extends React.HTMLAttributes<HTMLElement>{}

export const Header = (props: Props) => {
    return (
        <HeaderWrapper {...props}>
            <img src={logo} alt="origin" />
        </HeaderWrapper>
    )
}

import HeaderWrapper from './styles';
import BrandLogo from 'assets/icons/BrandLogo';
import { useHistory } from 'react-router-dom';


interface Props extends React.HTMLAttributes<HTMLElement>{}

export const Header = (props: Props) => {

    const history = useHistory();

    const handleHomeNavigation = (event: React.MouseEvent<HTMLElement, MouseEvent>) => {
        if(props.onClick){
            props.onClick(event);
        }

        history.push('/');
    }
    return (
        <HeaderWrapper {...props} onClick={handleHomeNavigation}>
            <BrandLogo aria-label="origin logo"/>
        </HeaderWrapper>
    )
}

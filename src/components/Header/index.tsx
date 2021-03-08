import HeaderWrapper from './styles';
import BrandLogo from 'assets/icons/BrandLogo';


interface Props extends React.HTMLAttributes<HTMLElement>{}

export const Header = (props: Props) => {
    return (
        <HeaderWrapper {...props}>
            <BrandLogo aria-label="origin logo"/>
        </HeaderWrapper>
    )
}

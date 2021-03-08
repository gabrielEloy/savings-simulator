//https://kentcdodds.com/blog/how-to-test-custom-react-hooks/https://kentcdodds.com/blog/how-to-test-custom-react-hooks/
//usually I end up using @testing-library/react-hooks and renderHook to do this kind of test
//but this hook specifically need a document that i need to retrieve for testing purposes.
//so this approach end up being the best one (IMO) for this case

import useKeyPress from 'hooks/useKeyPress';
interface Props {
    triggerKey: string;
    callback: () => void;
}

export const UseKeypressExample = ({triggerKey, callback}: Props) => {
    useKeyPress(triggerKey, () => callback());
    return (
        <div>
            
        </div>
    )
}

import { Header } from "components/Header";
import Subtitle from "components/typography/Subtitle";
import Wrapper from "AppStyles";
import SimulatorContainer from './components/SimulatorContainer';


interface Props {}

const App = (props: Props) => {
  return (
      <Wrapper>
        <Header />
        <Subtitle className="subtitle" color="#1B31A8">
          Let's plan your <strong>saving goal.</strong>
        </Subtitle>
        <div className="content">
         <SimulatorContainer />
        </div>
      </Wrapper>
  );
};

export default App;

import SavingsSimulator from "./pages/SavingsSimulator";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Header } from "components/Header";
import SavingsList from "pages/SavingsList";

const App = () => {
  return (
    <Router>
      <Header />
      <Switch>
        <Route path="/goal/:id">
          <SavingsSimulator />
        </Route>
        <Route path="/">
          <SavingsList />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;

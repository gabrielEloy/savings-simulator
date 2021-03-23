import { BrowserRouter, Switch, Route } from "react-router-dom";
import SavingGoalsSimulator from "Router/Routes/SavingsSimulator";
import Dashboard from 'Router/Routes/Dashboard';
import { Header } from "components/Header";

interface Props {}

const Router = (props: Props) => {
  return (
    <>
      <Header />
      <BrowserRouter>
        <Switch>
          <Route path="/goals/:id">
            <SavingGoalsSimulator />
          </Route>
          <Route path="/">
            <Dashboard />
          </Route>
        </Switch>
      </BrowserRouter>
    </>
  );
};

export default Router;

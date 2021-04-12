import "./App.css";
import "semantic-ui-css/semantic.min.css";
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from "react-router-dom";
import PhoneListHome from "./phone-list/pages/PhoneListHome";
import PhoneDetailView from "./phone-detail/pages/PhoneDetailView/PhoneDetailView";
import "./scss/app.scss";
import Page404Error from "./shared/components/Page404Error";

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact>
          <PhoneListHome />
        </Route>
        <Route path="/phones/:phoneId" exact>
          <PhoneDetailView />
        </Route>

        <Route path="/404" exact>
          <Page404Error />
        </Route>
        <Redirect to="/" />
      </Switch>
    </Router>
  );
};

export default App;

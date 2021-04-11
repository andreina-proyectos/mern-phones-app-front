import './App.css';
import 'semantic-ui-css/semantic.min.css'
import { BrowserRouter as Router, Route, Redirect, Switch} from 'react-router-dom'
import PhoneListHome from './phone-list/pages/PhoneListHome'
import PhoneDetailView from './phone-detail/pages/PhoneDetailView'


const App = () => {
  return (
   <Router>
      <Route path="/" exact>
        <PhoneListHome />
      </Route>

      <Route path="/phones/mobile-phone">
        <PhoneDetailView />
      </Route>
      <Redirect to="/"/>
   </Router>
  );
}

export default App;

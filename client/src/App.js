
import './App.css';
import NavHeader from './components/navBar'
import {BrowserRouter as Router, Route} from 'react-router-dom'
import SearchPage from './pages/searchPage'
import SavedPage from './pages/savePage'


function App() {
  return (
  <div>
      <Router>
      <NavHeader />
        <Route  exact path="/" component={SearchPage}/>
        <Route  exact path="/saved" component={SavedPage}/>
      </Router>
  </div>
      
  );
}

export default App;

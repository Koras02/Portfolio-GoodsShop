import './App.css';
import {BrowserRouter as Router,Switch, Route} from 'react-router-dom'; 
import Main from './MainPage/Main';
import Pigure from './MainPage/Header/MainVisual/Description/Pigure';


function App() {
     return (
     <Router>
       <Switch> 
       <Route path="/"  component={Main}  exact/> 
       <Route path="/Pigure" component={Pigure} />
       </Switch>
      </Router>
     )
 }


 export default App;
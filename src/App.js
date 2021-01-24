import './App.css';
import {BrowserRouter as Router, Route} from 'react-router-dom'; 
import Main from './MainPage/Main';
 
 
 
function App() {
     return (
     <Router>
       <Route exact path="/"  component={Main} /> 
     </Router>
     )
 }


 export default App;
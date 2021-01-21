import './App.css';
import {BrowserRouter ,Switch, Route} from 'react-router-dom'; 
import Main from './MainPage/Main';
 
function App() {
     return (
     <BrowserRouter>
       <Switch> 
       <Route path="/"  component={Main} exact /> 
 
     </Switch>
      </BrowserRouter>
     )
 }


 export default App;
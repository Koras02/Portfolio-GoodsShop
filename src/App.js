import './App.css';
import {BrowserRouter,  Route} from 'react-router-dom'; 
import Main from './MainPage/Main';
import SubPageForm from './api/Form/SubPageForm';
// import Page1 from './api/Form/Layout/page/Page1';
import AMond from './api/Form/Layout/page/AMond';
 
 
function App() {
     return (
      <BrowserRouter>
       <Route exact path="/koras02.github.io"  component={Main} /> 
       <Route 
       path="/koras02.github.io/:id/" component={SubPageForm} 
       />
       <Route 
        path="/koras02.github.io/KI/" component={AMond}
       />
     </BrowserRouter>
     )
 }


 export default App;
import './App.css';
import {BrowserRouter,  Route} from 'react-router-dom'; 
import Main from './MainPage/Main';
import SubPageForm from './api/Form/SubPageForm';
// import Page1 from './api/Form/Layout/page/Page1';
import AMond from './api/Form/Layout/page/AMond';
 
 
function App() {
     return (
      <BrowserRouter>
       <Route exact path="/Portfolio3-GoodsShop"  component={Main} /> 
       <Route 
       path="/Portfolio3-GoodsShop/:id/" component={SubPageForm} 
       />
       <Route 
        path="//KI/" component={AMond}
       />
     </BrowserRouter>
     )
 }


 export default App;
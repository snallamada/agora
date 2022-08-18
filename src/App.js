import { BrowserRouter, Switch } from 'react-router-dom';
import './App.css';
import BasicExample from './components/BasicExample;';
// import SignIn from './components/Login';



function App() {
  return (
       <div>
{/* <SignIn/>
   */}
   <BrowserRouter>
   <Switch>
    
   <BasicExample/>
 
   </Switch>
   </BrowserRouter>
   
   
      </div>
  );
}


export default App;

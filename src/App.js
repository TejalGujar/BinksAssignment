import React from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import UserList from './components/UsersList';
import LoginPage  from './components/LoginPage';
import DetailsPage from './components/DetailsPage';
import routes from "./routes";
import { useRoutes } from 'react-router';

function App() {
  const routing = useRoutes(routes({name:"Tejal"}));
  return (
      // <Router>
      //   <div>
          
      //       <Route path="/userslist" component={UserList} />
      //       <Route path="/loginpage" component={LoginPage} />
      //       <Route path="/detailspage" component={DetailsPage} />
         
      //   </div>
      // </Router>
      <>
          {/* <UserList /> */}
          {routing}
      </>
  );
}

export default App;
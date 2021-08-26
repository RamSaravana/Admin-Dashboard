import TopBar from "./components/TopBar/TopBar";
import SideBar from "./components/SideBar/SideBar";
import Home from "./pages/HomePage/Home";
import './App.css';
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import TablePage from "./pages/TablePage/TablePage";
import ChartsPage from "./pages/ChartsPage/ChartsPage";

function App() {
  return ( 
    <Router>
      <TopBar />
      <div className="container">
        <SideBar/>
        <Switch>
          <Route exact path="/">
            <Home/>
          </Route>
          <Route path="/charts"  component={ChartsPage}>
            {/* <ChartsPage/> */}
          </Route>
          <Route path="/tables">
            <TablePage/>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;

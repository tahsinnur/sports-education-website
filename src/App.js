import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Home from './components/Home/Home';
import About from './components/About/About';
import NotFound from './components/NotFound/NotFound';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import SportsPrograms from './components/SportsPrograms/SportsPrograms';
import Coaches from './components/Coaches/Coaches';

function App() {
  return (
    <Router>
      <Header></Header>
      <Switch>
        <Route exact path="/">
          <Home></Home>
        </Route>
        <Route path="/home">
          <Home></Home>
        </Route>
        <Route path="/sportsprograms">
          <SportsPrograms></SportsPrograms>
        </Route>
        <Route path="/coaches">
          <Coaches></Coaches>
        </Route>
        <Route path="/about">
          <About></About>
        </Route>


        <Route path="*">
          <NotFound></NotFound>
        </Route>
      </Switch>
      <Footer></Footer>
    </Router>
  );
}

export default App;

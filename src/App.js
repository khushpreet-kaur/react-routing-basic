import { BrowserRouter, Route, Link } from "react-router-dom";

import './App.css';
import Home from './Home'
import About from './About'
import Contact from './Contact'
import Test from './Test'
import AddProject from './AddProject'
import ManageProjects from "./ManageProjects";
import EditProject from './EditProject'

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header/>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/contact" component={Contact} />
        <Route exact path="/projects/add" component={AddProject} />
        <Route exact path="/projects" component={ManageProjects} />
        <Route exact path="/projects/edit/:name" component={EditProject} />
      </div>
    </BrowserRouter>
  );
}

function Header() {
  return (
    <header className="App-header">
      <Link className="App-link" to="/"> Home </Link>
      <Link className="App-link" to="/about"> About </Link>
      <Link className="App-link" to="/contact"> Contact </Link>
    </header>
  )
}

export default App;

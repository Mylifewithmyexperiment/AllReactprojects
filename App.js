//here we write a code
import Loadable from "react-loadable";
import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Nav from "./components/Nav";
import "./nav.css";
import NotFound from "./Pages/NotFound";
import Loder from "./components/Loder";
const Personalpic = Loadable({
  loader: () => import("./Pages/Personalpic"),
  loading: () => (
    <div>
      
      <Loder />
    </div>
  ),
});

const Photographypic = Loadable({
  loader: () => import("./Pages/Photographypic"),
  loading: () => (
    <div>
      
      <Loder />
    </div>
  ),
});

const Artdrawing = Loadable({
  loader: () => import("./Pages/Artdrawing"),
  loading: () => (
    <div>
      
      <Loder />
    </div>
  ),
});

const MoreRead = Loadable({
  loader: () => import("./Pages/MoreRead"),
  loading: () => (
    <div>
      
      <Loder />
    </div>
  ),
});

const Skillspage = Loadable({
  loader: () => import("./Pages/Skillspage"),
  loading: () => (
    <div>
      
      <Loder />
    </div>
  ),
});

const Gallerypage = Loadable({
  loader: () => import("./Pages/Gallerypage"),
  loading: () => (
    <div>
      
      <Loder />
    </div>
  ),
});

const Contactpage = Loadable({
  loader: () => import("./Pages/Contactpage"),
  loading: () => (
    <div>
      
      <Loder />
    </div>
  ),
});

const Homepage = Loadable({
  loader: () => import("./Pages/Homepage"),
  loading: () => (
    <div>
      
      <Loder />
    </div>
  ),
});

function App() {
  return (
    <Router>
      <Nav />
      <Switch>
        <Route exact path="/gallery/personal">
          <Personalpic />
        </Route>

        <Route exact path="/gallery/photography">
          <Photographypic />
        </Route>

        <Route exact path="/gallery/arts-drawings">
          <Artdrawing />
        </Route>

        <Route exact path="/moreinfo">
          <MoreRead />
        </Route>

        <Route exact path="/skills">
          <Skillspage />
        </Route>

        <Route exact path="/gallery">
          <Gallerypage />
        </Route>

        <Route exact path="/contacts">
          <Contactpage />
        </Route>

        <Route  exact path="/moreread">
          <MoreRead />
        </Route>

        <Route exact path="/">
          <Homepage
            hello="hello everybody, i am "
            name="Rajeev khadka"
            tech="Engineering Student /  Tech personality"
            sec_para=" Beside this he is very intrested in reading Articles, Drawing and Literature. Also He is intrested in playing Battle-Grounds mobile  games like PUBG. "
            fir_para_bold="Rajeev Khadka"
            after_bold =' is the name of a tech personality
            of his generation.He is the IT student in one of the most popular
            collage of Nepal '
            sec_bold = 'Lumbini Engineering Collage (LEC).' 
            after_anchor = 'There he learnt the basic programming with C C++ and one of the most
            fastest growing Language called python .'
            
           />
        </Route>

        <Route exact path="">
          <NotFound />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
 // rajeev kheda workspace

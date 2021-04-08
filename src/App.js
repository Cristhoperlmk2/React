import React from 'react';
import './App.css';
import Paises from './componentes/Paises'
import NavBar from './componentes/Navbar'
import { Provider } from 'react-redux'
import { Route} from "react-router-dom";
import Detalle from './componentes/detalle'
import Region from "./componentes/Regiones"
import store from './store/index'


function App() {
  return (
    <Provider store={store}>
    <div className="App">
    <NavBar/>
    <Route exact path="/" component={Paises} />
    <Route  path="/detalle/:name" component={Detalle} />
    <Route path="/region/:region" component={Region} />
    </div>
    </Provider>
  );
}

export default App;

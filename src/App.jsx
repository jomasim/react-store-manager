import React,{Component} from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './components/Home/index.jsx';
import 'semantic-ui-css/semantic.min.css';
import Register from './components/Register/index.jsx';
import Navigation from './components/Navigation/index.jsx';
class App extends Component{
  render () {
    return(
      <BrowserRouter>
        <div>
          <Navigation/>
          <Switch>
            <Route path="/" component={Home} exact/>
            <Route path="/register" component={Register} exact/>
          </Switch>
        </div>
      </BrowserRouter>
    )
  }
}
export default App;
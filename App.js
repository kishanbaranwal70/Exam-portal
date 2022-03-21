import React from 'react';
import './App.css';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import DashBoardComponent from './components/Dashboard/dashboardComponent/DashBoardComponent';
import TestComponent from './components/Test/testComponent/TestComponent';
// import Feedback from './components/Test/Feedback/Feed';
import End from './components/Test/test/End'
import PrecautionComponent from './components/PrecautionComponent/PreComponent';
// import { EnhancedEncryption } from 'material-ui-icons';

function App() {
  return (
    <Router>

      <div className="App">
        <Switch>
          <Route exact path="/" component={DashBoardComponent} />
          <Route exact path="/Dashboard" component={DashBoardComponent} />
          <Route exact path="/Precaution" component={PrecautionComponent} />
          <Route exact path="/Test" component={TestComponent} />
          <Route exact path="/End" component={End} />



          <Route path="/*" component={() => {
            return (
              
              <div>404</div>

            )
          }} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;


// <Route
//   exact
//   path="/"
//   render={props => (
//     <React.Fragment>
//       <AddTodo addTodo={this.addTodo} />
//       <Todos
//         todos={this.state.todos}
//         markComplete={this.markComplete}
//         delTodo={this.delTodo}
//       />
//     </React.Fragment>
//   )}
// />
//   <Route path="/about" component={About} />
//   </div >
// </div >
// </Router >

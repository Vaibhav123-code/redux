import './App.css';
import Redux from './component';
import Display from './component/Display';


function App() {
  return (
    <div className="App">
       {/* <Redux /> */}
       <Display />
    </div>
  );
}

export default App;

// redux  - state management library for js application.
// it helps manage complex state and share nbetweeen multiple components without prop drilling

// action - payload of information sent to store
// useReducer -functions that specify how the apps state change in response to actions
// store - holds the application state 
// useSelctor - used to extract specific data from state
// dispatch - method of store used to dispatch action  

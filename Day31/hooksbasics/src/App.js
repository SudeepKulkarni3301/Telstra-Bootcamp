import logo from "./logo.svg";
import "./App.css";
import Classcounter from "./Classcounter";
import HookCounter from "./HookCounter";
import Hookdemo2 from "./Hookdemo2";
import AfterEffect from "./AfterEffect";
import ErrorBoundry from "./ErrorBoundry";
import BuggyCounter from "./BuggyCounter";

function App() {
  return (
    <div>
      {/* <Classcounter /> */}
      {/* <HookCounter></HookCounter> */}
      {/* <Hookdemo2 /> */}
      {/* <AfterEffect /> */}
      <ErrorBoundry>
        <BuggyCounter></BuggyCounter>
      </ErrorBoundry>
    </div>
  );
}

export default App;

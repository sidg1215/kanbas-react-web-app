import Destructing from "./Destructuring";
import FunctionDestructing from "./FunctionDestructuring";
import House from "./House";
import Spread from "./Spread";
import TemperalLiterals from "./TemperalLiterals";
import VariablesAndConstants from "./VariablesAndConstants";
import WorkingWithArrays from "./WorkingWithArrays";
import WorkingWithFunctions from "./WorkingWithFunctions";

function JavaScript() {
   console.log('Hello World!');
   return(
      <div>
         <h1>JavaScript</h1>
         <VariablesAndConstants/>
         <WorkingWithFunctions></WorkingWithFunctions>
         <WorkingWithArrays></WorkingWithArrays>
         <TemperalLiterals></TemperalLiterals>
         <House></House>
         <Spread></Spread>
         <Destructing></Destructing>
         <FunctionDestructing></FunctionDestructing>
      </div>
   );
}
export default JavaScript
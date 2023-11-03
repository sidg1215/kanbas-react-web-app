import TodoList from "../a3/todos/TodoList";
import Add from "./Add";
import ArrayStateVariable from "./ArrayStateVariables";
import BooleanStateVariables from "./BooleanStateVariables";
import ClickEvent from "./ClickEvent";
import Counter from "./Counter";
import DateStateVariable from "./DataStateVariable";
import EventObject from "./EventObject";
import ObjectStateVariable from "./ObjectStateVariable";
import ParentStateComponent from "./ParentStateComponent";
import PassingDataOnEvent from "./PassingDataOnEvent";
import PassingFunctions from "./PassingFunctions";
import ReduxExamples from "./ReduxExamples";
import StringStateVariables from "./StringStateVariables";

function Assignment4() {
    function sayHello() {
        alert("Hello");
    }

    return (
        <div>
            <h1>Assignment 4</h1>
            <Add a={1} b={2} />
            <ClickEvent></ClickEvent>
            <PassingDataOnEvent></PassingDataOnEvent>
            <PassingFunctions theFunction={sayHello} />
            <EventObject></EventObject>
            <Counter></Counter>
            <BooleanStateVariables></BooleanStateVariables>
            <StringStateVariables></StringStateVariables>
            <DateStateVariable></DateStateVariable>
            <ObjectStateVariable></ObjectStateVariable>
            <ArrayStateVariable></ArrayStateVariable>
            <ParentStateComponent></ParentStateComponent>
            <ReduxExamples/>
            <TodoList></TodoList>
        </div>
    );
}
export default Assignment4;
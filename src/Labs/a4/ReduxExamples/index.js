import React from "react";
import HelloRedux from "./HelloRedux";
import CounterRedux from "./CounterRedux";
import AddRedux from "./AddRedux";

const ReduxExamples = () => {
    return (
        <div>
            <h2>Redux Examples</h2>
            <HelloRedux></HelloRedux>
            <CounterRedux></CounterRedux>
            <AddRedux></AddRedux>
        </div>
    );
};

export default ReduxExamples;
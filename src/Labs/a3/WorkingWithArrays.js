import AddingAndRemovingDataFromArrays from "./AddingAndRemovingDataFromArrays";
import ArrayIndexAndLength from "./ArrayAndIndexLength";
import FilterFunction from "./FilterFunction";
import FindFunction from "./FindFunction";
import FindIndex from "./FindIndex";
import ForLoops from "./ForLoops";
import MapFunction from "./MapFunction";

function WorkingWithArrays() {
    var functionScoped = 2;
    let blockScoped = 5;
    const constant1 = functionScoped - blockScoped;
    let numberArray1 = [1, 2, 3, 4, 5];
    let stringArray1 = ['string1', 'string2'];

    let variableArray1 = [
        functionScoped, blockScoped,
        constant1, numberArray1, stringArray1
    ];

    return (
        <div>
            <h3>Working with Arrays</h3> <br></br>
            numberArray1 = {numberArray1}<br></br>
            stringArray1 = {stringArray1} <br></br>
            variableArray1 = {variableArray1}<br></br>
            <ArrayIndexAndLength></ArrayIndexAndLength>
            <AddingAndRemovingDataFromArrays></AddingAndRemovingDataFromArrays>
            <ForLoops></ForLoops>
            <MapFunction></MapFunction>
            <FindFunction></FindFunction>
            <FindIndex></FindIndex>
            <FilterFunction></FilterFunction>
        </div>

    )
}

export default WorkingWithArrays;
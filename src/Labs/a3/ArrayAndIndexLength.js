
function ArrayIndexAndLength() {
    let numberArray1 = [1, 2, 3, 4, 5];
    const length1 = numberArray1.length;
    const index1 = numberArray1.indexOf(3);

    return (
        <div>
            <h3>ArrayIndexAndLength</h3>
            numberArray1 = {numberArray1} <br></br>
            index1 = {index1} <br></br>
        </div>
    );
}

export default ArrayIndexAndLength;
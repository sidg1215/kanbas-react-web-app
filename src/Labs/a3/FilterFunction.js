function FilterFunction() {
    let numberArray1 = [1, 2, 4, 5, 6];

    const numbersGreaterThan2 = numberArray1.filter(a => a > 2);
    const evenNumbers = numberArray1.filter(a => a % 2 === 0);
    const oddNumbers = numberArray1.filter(a => a % 2 !== 0);

    return (
        <div>
            numbersGreaterThan2 = {numbersGreaterThan2} <br></br>
            evenNumbers = {evenNumbers} <br></br>
            oddNumbers = {oddNumbers}
        </div>
    )
}

export default FilterFunction;
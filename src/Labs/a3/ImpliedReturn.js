function ImpliedReturn() {
    const multiply = (a, b) => a * b;
    const fourTimesFive = multiply(4, 5);
    console.log(fourTimesFive);

    return (
        <div>
            <h3>Implied Return</h3>
            fourTimes = {fourTimesFive} <br></br>
            multiply(4, 5) = {multiply(4, 5)}
        </div>
    )
}

export default ImpliedReturn;
function MapFunction(){

    let numberArray1 = [1, 2, 3, 4, 5];
    const square = a => a * a;
    const cube = a => a * a * a;

    const squares = numberArray1.map(square);
    const cubes = numberArray1.map(cube);

    return(
        <div>
            <h2>Map</h2>
            squares = { squares.toString() }<br/>
            cubes = { cubes.toString() }<br/>
        </div>
    );
}
export default MapFunction
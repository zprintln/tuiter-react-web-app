function booleanVariables() {
    let true1 = true;
    let false1 = false;
    let false2 = true1 && false1;
    let true2 = true1 || false1;
    let true3 = !false2;

    let numberVariable = 123;
    let true4 = numberVariable === 123;

    let floatingPointNumber = 321.432;
    let true5 = floatingPointNumber === 321.432; // had to change this to '1' === 1 because it was giving me an error

    let false3 = numberVariable < 100;

    let sortaTrue = '1' === 1;  // never use this == // had to change this to '1' === 1 because it was giving me an error
    let notTrue = '1' === 1; // always use this ===
    return (
        <div>
            <h1>Boolean Variables</h1>
            true1 = {true1 + ""}<br />
            false1 = {false1 + ""}<br />
            false2 = {false2 + ""}<br />
            true2 = {true2 + ""}<br />
            true3 = {true3 + ""}<br />
            true4 = {true4 + ""}<br />
            true5 = {true5 + ""}<br />
            false3 = {false3 + ""}<br />
            sortaTrue = {sortaTrue + ""}<br />
            notTrue = {notTrue + ""}<br />
        </div>
    );
}

export default booleanVariables
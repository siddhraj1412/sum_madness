import React from 'react';

function Sumdemo3() {
    const [no1, setNo1] = React.useState(0);
    const [no2, setNo2] = React.useState(0);
    const [ans, setAns] = React.useState("");
    const [choice, setChoice] = React.useState("");

    const doProcess = () => {
        if (choice === 'add') {
            let c = parseInt(no1) + parseInt(no2);
            setAns("Sum is " + c);
        } else if (choice === 'sub') {
            let c = parseInt(no1) - parseInt(no2);
            setAns("Sub is " + c);
        } else {
            setAns("Select choice");
        }
    };

    return (
        <div>
            <h1>Sum using different method</h1>
            <input
                type="number"
                value={no1}
                onChange={(e) => setNo1(e.target.value)}
            />
            <input
                type="number"
                value={no2}
                onChange={(e) => setNo2(e.target.value)}
            />
            <br />

            <div>
                Choice:
                <input
                    type="radio"
                    onChange={() => setChoice("add")}
                    name="operation"
                    value="add"
                /> Add
                <input
                    type="radio"
                    onChange={() => setChoice("sub")}
                    name="operation"
                    value="sub"
                /> Sub
            </div>

            <div>
                Dropdown Choice:
                <select onChange={(e) => setChoice(e.target.value)}>
                    <option value="">--Select--</option>
                    <option value="add">Add</option>
                    <option value="sub">Sub</option>
                </select>
            </div>

            <input type="button" onClick={doProcess} value="Do It" />

            <h2>{ans}</h2>
        </div>
    );
}

export default Sumdemo3;

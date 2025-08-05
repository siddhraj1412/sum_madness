import React from "react";

class Sum extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            no1: '',
            no2: '',
            msg: ''
        };
    }

    dosum() {
        if (!this.state.no1) {
            alert("enter no1")
        }
        else if (!this.state.no2) {
            alert("enter no2")
        }
        else if (isNaN(parseInt(this.state.no1)) || isNaN(parseInt(this.state.no2))) {
            alert("Please enter valid integers in both fields");
        }
        else if (parseInt(this.state.no1) < 0 || parseInt(this.state.no1) > 10) {
            alert("please enter no.1 which is greater than 0 and less than 10")
        }
        else if (parseInt(this.state.no2) < 0 || parseInt(this.state.no2) > 10) {
            alert("please enter no.2 which is greater than 0 and less than 10")
        }
        else {
            var c = parseInt(this.state.no1) + parseInt(this.state.no2)
            this.setState({ msg: c })
        }
    }

    render() {
        return (
            <>
                <h1>sum demo</h1>
                No1:<input type='number' value={this.state.no1} onChange={(e) => this.setState({ no1: e.target.value })} />
                <br />
                No2:<input type='number' value={this.state.no2} onChange={(e) => this.setState({ no2: e.target.value })} />
                <br />
                <input type='button' value='+' onClick={this.dosum.bind(this)} />
                <br />
                Result: {this.state.msg}
            </>
        )
    }
}

export default Sum
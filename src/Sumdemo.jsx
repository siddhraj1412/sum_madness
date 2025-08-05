import React from 'react';

class Sumdemo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            txt1: '',
            txt2: '',
            ans: '',
            error: ''
        };
    }

    doSum() {
        const { txt1, txt2 } = this.state;

        // Check for empty values
        if (txt1 === '' || txt2 === '') {
            this.setState({ error: 'Both numbers are required', ans: '' });
            return;
        }

        // Check for valid numbers
        const no1 = parseFloat(txt1);
        const no2 = parseFloat(txt2);

        if (isNaN(no1) || isNaN(no2)) {
            this.setState({ error: 'Please enter valid numbers', ans: '' });
            return;
        }

        const c = no1 + no2;
        this.setState({
            ans: `Sum is ${c}`,
            error: ''
        });
    }

    render() {
        return (
            <>
                <h1>Sum Demo</h1>
                No1 :
                <input
                    type='text'
                    onChange={(e) => this.setState({ txt1: e.target.value })}
                />
                <br />
                No2 :
                <input
                    type='text'
                    onChange={(e) => this.setState({ txt2: e.target.value })}
                />
                <br />
                <input
                    type='button'
                    value="+"
                    onClick={this.doSum.bind(this)}
                />
                <br />
                {this.state.error && (
                    <p style={{ color: 'red', fontWeight: 'bold' }}>{this.state.error}</p>
                )}
                {this.state.ans && (
                    <p style={{ color: 'green', fontWeight: 'bold' }}>{this.state.ans}</p>
                )}
            </>
        );
    }
}

export default Sumdemo;

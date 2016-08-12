import React from "react";

export default class Counter extends React.Component {
    constructor() {
        super();
        this.state = {
            work: true,
            secondsRemaining: 0,
            minutesRemaining: 0,
            secondsCount: 60
        }
    }

    tick() {
        if (this.state.secondsCount <= 0) {
            this.setState({secondsCount: 60, minutesRemaining: this.state.minutesRemaining - 1})
        }
        this.setState({secondsRemaining: this.state.secondsRemaining - 1});
        this.setState({secondsCount: this.state.secondsCount - 1});
        if (this.state.secondsRemaining <= 0) {
            clearInterval(this.interval);
        }
        if (this.state.secondsRemaining % 60 === 0) {
            this.setState({minutesRemaining: this.state.minutesRemaining - 1});
            this.setState({secondsCount: 59});
        }
        if (this.state.minutesRemaining <= 0 && this.state.secondsRemaining <= 0) {
            clearInterval(this.interval);
            this.setUp();
            this.setState({minutesRemaining: 0})
            console.log(this.state)
        }
    }

    setUp() {
        var minutes = this.state.work ? 25 : 5;
        var seconds = minutes * 60;

        this.setState({secondsRemaining: seconds});
        this.setState({minutesRemaining: minutes});
        this.setState({secondsCount: 0});
    }

    componentDidMount() {
        this.setUp();
        this.interval = setInterval(this.tick.bind(this), 1000);
    }


    pauseTimer() {
        clearInterval(this.interval);
    }

    stopTimer() {
        clearInterval(this.interval);
        this.setUp();
    }

    startTimer() {
        clearInterval(this.interval);
        this.interval = setInterval(this.tick.bind(this), 1000);
    }

    modeToggle() {
        clearInterval(this.interval);

        if (this.state.work == true) {
            this.setState({work: false}, function () {
                this.setUp();
                this.interval = setInterval(this.tick.bind(this), 1000);
            })
        }
        else {
            this.setState({work: true}, function () {
                this.setUp();
                this.interval = setInterval(this.tick.bind(this), 1000);

            });
        }

    }

    render() {

        return (
            <div>
                <div className="Counter">
                    <span id="minutes">{this.state.minutesRemaining} </span>
                    <span id="delimitier"> : </span>
                    <span id="seconds">{this.state.secondsCount}</span>
                </div>
                <button onClick={this.startTimer.bind(this)}>start</button>
                <button onClick={this.pauseTimer.bind(this)}>Pause</button>
                <button onClick={this.stopTimer.bind(this)}>stop</button>
                <button onClick={this.modeToggle.bind(this)}>mode</button>
            </div>
        )
    }
}

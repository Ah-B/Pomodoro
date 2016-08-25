import React from "react";

export default class Counter extends React.Component {
    constructor() {
        super();
        this.state = {
            work: true,
            secondsRemaining: 0,
            minutesRemaining: 0,
            secondsCount: 59

        }
    }

    tick() {
        console.log(this.state.secondsCount + "*****" + this.state.secondsRemaining);
        this.setState({secondsRemaining: this.state.secondsRemaining - 1});
        this.setState({secondsCount: this.state.secondsCount - 1});

        if (this.state.secondsCount < 0) {
            this.setState({
                secondsCount: 59,
                secondsRemaining: this.state.secondsRemaining - 60,
                minutesRemaining: this.state.minutesRemaining - 1
            })
        }
        if (this.state.secondsRemaining <= 0) {
            clearInterval(this.interval);
            this.setState({minutesRemaining: 0, secondsCounter: 0})

        }

    }

    setUp() {
        var minutes = this.state.work ? 25 : 5;
        var seconds = minutes * 60;

        this.setState({secondsRemaining: seconds});
        this.setState({minutesRemaining: minutes - 1});
        this.setState({secondsCount: 59});
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

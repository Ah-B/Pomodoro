import React from "react";

export default class Counter extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            totalMinutes: this.props.minutes,
        }
    }


    timer() {
        var totalMinutes = this.state.totalMinutes;
        var totalSeconds = totalMinutes * 60;
        var counterSeconds = 60;
        setInterval(function () {
                counterSeconds--;
                totalSeconds--;
                //console.log("totalminutes" + totalMinutes + "||  Seconds" + counterSeconds + "  || totalSecs" + totalSeconds)
                document.getElementById('minutes').innerHTML = totalMinutes;
                document.getElementById('seconds').innerHTML = counterSeconds;
                if (counterSeconds == 0) {
                    totalMinutes--;
                    counterSeconds = 60;
                }
                if (totalSeconds == 0) {
                    clearInterval(counterSeconds)
                }
            }
            , 1000);
    }

    componentDidMount() {
        this.timer();
    }

    render() {


        return (
            <div className="Counter">
                <span id="minutes"></span> : <span id="seconds"></span>
            </div>
        )
    }
}
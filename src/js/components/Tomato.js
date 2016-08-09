import React from "react"
import Counter from "./Counter"

export default class Tomato extends React.Component {


    render() {
        return (
            <div>
                <img id="pomodoro" src="image/pomo.png"/>
                <Counter />
            </div>
        )
    }
}
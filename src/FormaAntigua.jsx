import React from "react";

class Timer extends React.Component {
  constructor(props) {
    super(props);
    this.state = { seconds: 0, minutes : 0 };
  }

  tick() {
    this.setState(state => ({
      seconds: state.seconds == 60 ? 0 : state.seconds + 1,
      minutes: state.seconds == 60 ? state.minutes + 1 : state.minutes

    }));
  }

  componentDidMount() {
    this.interval = setInterval(() => this.tick(), 1000);
  }
  
  componentDidUpdate(prevProps, prevState) {
    // console.log({secondsBefore: prevState.seconds, secondsNow: this.state.seconds});
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    return (
      <div>
        Segundos: {this.state.seconds}
        <p/>
        Minutoses: {this.state.minutes}
        <br/>
        Inverval: {this.interval}
      </div>
    );
  }
}

export default Timer
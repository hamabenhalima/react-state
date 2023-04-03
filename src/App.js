import React, { Component } from 'react';

class App extends Component {
  state = {
    person: {
      fullName: 'MOHAMED BEN HALIMA',
      bio: 'a student at GOMYCODE',
      imgSrc: 'https://via.placeholder.com/150',
      profession: 'Web Developer'
    },
    show: false,
    timeSinceMount: 0
  };

  componentDidMount() {
    this.intervalId = setInterval(() => {
      this.setState({ timeSinceMount: this.state.timeSinceMount + 1 });
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.intervalId);
  }

  toggleShow = () => {
    this.setState({ show: !this.state.show });
  };

  render() {
    const { fullName, bio, imgSrc, profession } = this.state.person;
    const { show, timeSinceMount } = this.state;

    return (
      <div>
        <button onClick={this.toggleShow}>Toggle Show</button>
        {show && (
          <div>
            <h2>{fullName}</h2>
            <img src={imgSrc} alt={fullName} />
            <p>{bio}</p>
            <p>{profession}</p>
          </div>
        )}
        <p>Time since mount: {timeSinceMount} seconds</p>
      </div>
    );
  }
}

export default App;




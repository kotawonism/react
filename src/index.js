import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import logo from './joyman.png';


class Toggle extends React.Component {
  constructor(props) {
    super(props);
    //this.state = {isToggleOn: true};

    // This binding is necessary to make `this` work in the callback
    //this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    const element = document.getElementById("img");
    const cloneElement = element.cloneNode(true);
    document.getElementById("hogehoge").appendChild(cloneElement);
  }

  render() {
    return (
      <div>
      <div Id="hogehoge">
      </div>
      <div Id="img">
      <img src={logo} />
      </div>
      <button onClick={this.handleClick}>
        影分身
      </button>
      </div>
    );
  }
}

ReactDOM.render(
  <Toggle />,
  document.getElementById('root')
);
'use client';
import React, { Component } from 'react';
//import { useHydration } from '@/app/hooks/useHydration';

class Text extends Component {
  constructor(props) {
    super(props);
    this.state = {
      headerText: '',
    };
  }

  async componentDidMount() {
    //let array = ['first text', 'second text', 'third text'],
    //const hydra = useHydration();
    let array = [new Date().toLocaleTimeString()],
      intervalDurationMs = 100,
      currentIndex = 0,
      maxNumTimes = -1,
      numTimesRan = 0;
    await new Promise((resolve) => setTimeout(resolve, 2000));

    let interval = setInterval(
      function () {
        if (maxNumTimes !== 0) {
          this.setState({
            //headerText: array[currentIndex],
            headerText: new Date()
              .toLocaleTimeString('cs-CZ', {
                hour12: false,
                hour: '2-digit',
                minute: '2-digit',
                second: '2-digit',
                fractionalSecondDigits: 3,
              })
              .substring(0, 8),
          });
          currentIndex++;
          if (currentIndex > array.length - 1) {
            if (maxNumTimes === -1) {
              currentIndex = 0;
            } else {
              numTimesRan++;
              if (numTimesRan === maxNumTimes) {
                clearInterval(interval);
              } else {
                currentIndex = 0;
              }
            }
          }
        } else {
          clearInterval(interval);
        }
      }.bind(this),
      intervalDurationMs,
    );
  }

  render() {
    return (
      <div className="min-w-24 flex  w-24 pl-0 text-left">
        {this.state.headerText}
      </div>
    );
  }
}

export default Text;

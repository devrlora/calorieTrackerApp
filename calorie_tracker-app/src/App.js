import logo from './logo.svg';
import './App.css';
import React, {Component } from 'react';

class App extends Component {
  state = {
    isLoading: true,
    calories: []
  };

  async componentDidMount() {
    const response = await fetch('/raf_api/v1/calories');
    const body = await response.json();
    this.setState({ calories: body, isLoading: false });
  }

  render() {
    const {calories, isLoading} = this.state;

    if (isLoading) {
      return <p>Loading...</p>;
    }

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <div className="App-intro">
            <h2>Calorie  Counter</h2>
            {calories.map(calorie =>
              <div key={calorie.id}>
                {calorie.calories}cal
                <br></br>
                {calorie.fats}g
                <br></br>
                {calorie.protein}g
              </div>
            )}
          </div>
        </header>
      </div>
    );
  }
}

export default App;
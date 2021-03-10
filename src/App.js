import { Component } from 'react';
import './App.css';

import Statistics from './components/Statistics';
import Notification from './components/Notification';
import FeedbackOptions from './components/FeedbackOptions';
import Section from './components/Section';

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  normalizedTitle = t => {
    return t[0].toUpperCase() + t.slice(1);
  };

  handleNewFeedback = e => {
    const { name } = e.currentTarget;
    this.setState({
      [name]: this.state[name] + 1,
    });
  };

  countTotalFeedback() {
    return Object.values(this.state).reduce((acc, value) => acc + value);
  }

  countPositiveFeedbackPercentage() {
    const totalReviewsAmount = this.countTotalFeedback();
    return (this.state.good * 100) / totalReviewsAmount;
  }

  render() {
    const { good, neutral, bad } = this.state;
    const options = Object.keys(this.state);
    const totalReviewsAmount = this.countTotalFeedback();
    const positiveReviewsShare = this.countPositiveFeedbackPercentage();

    return (
      <div className="App">
        <Section title="Please Leave Feedback">
          <FeedbackOptions
            options={options}
            onLeaveFeedback={this.handleNewFeedback}
          ></FeedbackOptions>
        </Section>

        <Section title="Statistics">
          {(good === 0) & (neutral === 0) & (bad === 0) ? (
            <Notification message="No feedback given"></Notification>
          ) : (
            <Statistics
              options={options}
              good={good}
              neutral={neutral}
              bad={bad}
              total={totalReviewsAmount}
              positivePercentage={positiveReviewsShare}
            ></Statistics>
          )}
          {/* <Notification message="No feedback given"></Notification>
          <Statistics
            options={options}
            good={good}
            neutral={neutral}
            bad={bad}
            total={totalReviewsAmount}
            positivePercentage={positiveReviewsShare}
          ></Statistics> */}
        </Section>
      </div>
    );
  }
}

export default App;

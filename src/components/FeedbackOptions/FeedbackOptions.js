import { Component } from 'react';
import s from './FeedbackOptions.module.css';

class FeedbackOptions extends Component {
  normalizedTitle = t => {
    return t[0].toUpperCase() + t.slice(1);
  };

  render() {
    const { options, onLeaveFeedback } = this.props;

    return (
      <div className={s.feedbackOptions}>
        {options.map(option => (
          <button
            className={`btn btn-info ${s.feedbackOption}`}
            key={option}
            name={option}
            onClick={onLeaveFeedback}
          >
            {this.normalizedTitle(option)}
          </button>
        ))}
      </div>
    );
  }
}

export default FeedbackOptions;

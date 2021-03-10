import { Component } from 'react';
import s from './Statistics.module.css';

class Statistics extends Component {
  normalizedTitle = t => {
    return t[0].toUpperCase() + t.slice(1);
  };

  render() {
    const { options, total, positivePercentage } = this.props;

    return (
      <div className={s.statistics}>
        <ul className={s.statisticItem}>
          {options.map(option => (
            <li key={option} name={option}>
              {this.normalizedTitle(option)}: {this.props[option]}
            </li>
          ))}
        </ul>
        <div className={s.total}>Total: {total}</div>
        <div className={s.total}>
          Positive Feedback:{' '}
          {positivePercentage
            ? positivePercentage.toFixed() + '%'
            : 'no feedback yet'}
        </div>
      </div>
    );
  }
}

export default Statistics;

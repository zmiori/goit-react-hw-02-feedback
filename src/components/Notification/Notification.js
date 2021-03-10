import { Component } from 'react';
import s from './Notification.module.css';

class Notification extends Component {
  render() {
    return <div className={s.text}>{this.props.message}</div>;
  }
}

export default Notification;

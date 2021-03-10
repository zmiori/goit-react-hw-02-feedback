import { Component } from 'react';
import s from './Section.module.css';

class Section extends Component {
  render() {
    return (
      <section className={`container ${s.section}`}>
        <h2 className={s.title}>{this.props.title}</h2>
        {this.props.children}
      </section>
    );
  }
}

export default Section;

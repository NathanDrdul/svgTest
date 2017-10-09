import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import * as d3 from 'd3';




class Axis extends Component {
    componentDidMount() { this.renderAxis() }
    componentDidUpdate() { this.renderAxis() }
  
    renderAxis() {
      const scale = d3.scaleLinear()
                      .domain([0, 1000])
                      .range([0, 500]);
      const axis = d3.axisBottom(scale);

  


      d3.select(this.refs.g)
        .call(axis);  
    }
  
    render() {
      return <g transform="translate(100, 100)" ref="g" />
    }
  }



ReactDOM.render(<Axis />, document.getElementById('svg'));


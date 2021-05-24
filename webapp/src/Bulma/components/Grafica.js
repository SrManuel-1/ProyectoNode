import React from 'react';


import {
  XYPlot,
  XAxis,
  YAxis,
  VerticalGridLines,
  HorizontalGridLines,
  VerticalBarSeries,
  VerticalBarSeriesCanvas,
  LineSeries,
  MarkSeries
} from 'react-vis';

const greenData = [{x: 'A', y: 10}, {x: 'B', y: 5}, {x: 'C', y: 15}];

const blueData = [{x: 'A', y: 12}, {x: 'B', y: 2}, {x: 'C', y: 11}];

const data = [
    {x: 0, y: 8},
    {x: 1, y: 5},
    {x: 2, y: 4},
    {x: 3, y: 9},
    {x: 4, y: 1},
    {x: 5, y: 7},
    {x: 6, y: 6},
    {x: 7, y: 3},
    {x: 8, y: 2},
    {x: 9, y: 0}
  ];
  const Neiva = [
    {x: 0, y: 8},
    {x: 8, y: 5},
    {x: 2, y: 2},
    {x: 3, y: 9},
    {x: 4, y: 1},
    {x: 5, y: 7},
    {x: 5, y: 8},
    {x: 2, y: 3},
    {x: 8, y: 2},
    {x: 9, y: 0}
  ];


export default class Grafica extends React.Component {
  state = {
    useCanvas: false
  };

  render() {
    const {useCanvas} = this.state;
    const content = useCanvas ? 'TOGGLE TO SVG' : 'TOGGLE TO CANVAS';
    const BarSeries = useCanvas ? VerticalBarSeriesCanvas : VerticalBarSeries;
    return (
      <div>
       
        <XYPlot xType="ordinal" width={400} height={1000} xDistance={100}>
          <VerticalGridLines />
          <HorizontalGridLines />
          <XAxis />
          <YAxis />
          <VerticalBarSeries className="vertical-bar-series-example" data={greenData} color = "Red" />
          <VerticalBarSeries data={blueData} color = "blue" />
          
        </XYPlot>

        <XYPlot height={300} width={300}>
          <LineSeries data={data} />
        </XYPlot>

        <XYPlot height={300} width={300} >
          <MarkSeries data={data} color = "red" />
          <MarkSeries data={Neiva} color = "blue"/>
        </XYPlot>

        <XYPlot height={500} width={1500} color="red">

                    <VerticalGridLines />
                    <HorizontalGridLines />
                    <XAxis />
                    <YAxis />
                    <VerticalBarSeries data={data} color="red" />
                    <VerticalBarSeries data={Neiva} color="blue" />

                </XYPlot>

      </div>
    );
  }
}

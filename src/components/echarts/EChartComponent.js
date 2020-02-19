import React, {useState, useEffect} from 'react';
import {StyleSheet, SafeAreaView} from 'react-native';
import {ECharts} from 'react-native-echarts-wrapper';

function getDefaultOption() {
  return {
    title: {
      text: 'Chart Title',
      textStyle: {
        color: '#fff',
      },
      left: 10,
    },
    grid: {
      left: 0,
      right: 0,
      bottom: 60,
      top: 70,
    },
    legend: {
      left: 10,
      top: 30,
      icon: 'circle',
      // data: ['legend1', 'legend2'],
      textStyle: {
        color: '#fff',
        fontSize: 16,
      },
    },
    xAxis: {
      data: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep'],
      axisTick: {
        show: false,
      },
      axisLine: {
        show: false,
      },
    },
    yAxis: {
      show: false,
      splitLine: {
        show: false,
      },
    },
    series: [],
    backgroundColor: 'rgba(57,57,57,0.9)',
    textStyle: {
      color: '#fff',
    },
  };
}
const serieOption = {
  // name: 'legend2',
  // data: [232, 423, 533, 633, 123, 754, 1432, 345, 657],
  type: 'bar',
  barMaxWidth: '20%',
};
// data: [[232, 423, 533, 633, 123, 754, 1432, 345, 657]],
const EChartComponent = ({
  lowerYLimit = 0,
  upperYLimit = 0,
  legendData = [],
  data = [],
  colors = [],
}) => {
  const [chartOption, setChartOption] = useState(getDefaultOption());
  useEffect(() => {
    const defaultOption = Object.assign({}, getDefaultOption());
    defaultOption.legend.data = legendData;
    defaultOption.series = data.map((item, index) => ({
      ...serieOption,
      data: item,
      name: legendData[index],
      itemStyle: {
        color: colors[index] || '#fff',
      },
    }));
    setChartOption(defaultOption);
  }, [legendData, data, colors]);

  return (
    <SafeAreaView style={styles.chartContainer}>
      <ECharts option={chartOption} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  chartContainer: {
    backgroundColor: '#ff00ff',
    height: 240,
    margin: 10,
    borderRadius: 4,
  },
});

export default EChartComponent;

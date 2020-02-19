import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import EChartComponent from './src/components/echarts/EChartComponent';
// import {ECharts} from 'native-echarts';

// import Chart from './src/screens/NativeChartKit';

const option = {
  title: {
    text: 'Chart Title',
  },
  legend: {
    icon: 'circle',
    data: ['legend1'],
  },
  xAxis: {
    data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
  },
  yAxis: {
    show: false,
    splitLine: {
      show: false,
    },
  },
  series: [
    {
      name: 'legend1',
      data: [820, 932, 901, 934, 1290, 1330, 1320],
      type: 'bar',
    },
  ],
};

const App = () => {
  return (
    <View style={styles.appView}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Custom Chart Wrapper</Text>
      </View>
      <View style={styles.dateController}>
        <Text>Date Control</Text>
      </View>
      <View style={styles.chartContainer}>
        <EChartComponent option={option} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  appView: {
    alignItems: 'center',
  },
  header: {
    marginTop: 100,
  },
  headerText: {
    fontSize: 24,
    textAlign: 'center',
  },
  dateController: {
    padding: 20,
  },
  chartContainer: {
    width: '100%',
  },
});

module.exports = App;

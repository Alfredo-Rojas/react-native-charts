import React from 'react';
import {ScrollView, StyleSheet, View, Text} from 'react-native';
import EChartComponent from './src/components/echarts/EChartComponent';
// import {ECharts} from 'native-echarts';

// import Chart from './src/screens/NativeChartKit';

const seriesData = [
  {
    legendData: ['1 - Series1', '1 - Series2'],
    colors: ['#ff0000', '#fff'],
    data: [
      [820, 932, 901, 934, 1290, 1330, 1320, 789, 998],
      [232, 423, 533, 633, 123, 754, 1432, 345, 657],
    ],
  },
  {
    lowerYLimit: 300,
    upperYLimit: 700,
    legendData: ['2 - Series1'],
    colors: ['#ff0000'],
    data: [[232, 423, 533, 633, 123, 754, 1432, 345, 657]],
  },
  {
    legendData: ['3 - Series1', '3 - Series2'],
    colors: ['#ff0000', '#fff'],
    data: [
      [820, 932, 901, 256, 234, 333, 234, 633, 998],
      [232, 423, 533, 863, 123, 754, 1432, 345, 657],
    ],
  },
  {
    legendData: ['4 - Series1', '4 - Series2'],
    colors: ['#ff0000', '#fff'],
    data: [
      [820, 932, 901, 934, 111, 444, 666, 789, 998],
      [232, 423, 533, 633, 123, 754, 789, 345, 657],
    ],
  },
];

const App = () => {
  return (
    <ScrollView>
      <View style={styles.appView}>
        <View style={styles.header}>
          <Text style={styles.headerText}>Custom Chart Wrapper</Text>
        </View>
        <View style={styles.dateController}>
          <Text>Date Control</Text>
        </View>
        <View style={styles.chartContainer}>
          {seriesData.map((serieData, index) => (
            <View key={`serie-${index}`}>
              <EChartComponent {...serieData} />
            </View>
          ))}
        </View>
      </View>
    </ScrollView>
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

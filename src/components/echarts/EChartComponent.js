import React from 'react';
import {StyleSheet, SafeAreaView} from 'react-native';
import {ECharts} from 'react-native-echarts-wrapper';

function EChartComponent({option}) {
  return (
    <SafeAreaView style={styles.chartContainer}>
      <ECharts option={option} width="100%" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  chartContainer: {
    backgroundColor: '#ff00ff',
    height: 300,
    margin: 10,
  },
});

export default EChartComponent;

import React, {useState, useEffect, useRef} from 'react';
import {StyleSheet, View, Text} from 'react-native';
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
function EChartComponent({
  lowerYLimit,
  upperYLimit,
  legendData = [],
  data = [],
  colors = [],
  selectedX,
}) {
  let chartRef = useRef(null);
  const [chartOption, setChartOption] = useState(getDefaultOption());
  useEffect(() => {
    const defaultOption = Object.assign({}, getDefaultOption());
    defaultOption.legend.data = legendData;
    defaultOption.xAxis.data = defaultOption.xAxis.data.map(item => {
      return item !== selectedX
        ? {
            value: item,
          }
        : {
            value: item,
            textStyle: {
              padding: [0, 5],
              fontWeight: 'bold',
              fontSize: 14,
              backgroundColor: 'rgba(0,0,0,0.5)',
              rich: {
                p: {color: '#fff'},
              },
            },
          };
    });
    defaultOption.series = data.map((item, index) => ({
      ...serieOption,
      data: item,
      name: legendData[index],
      itemStyle: {
        color: colors[index] || '#fff',
      },
    }));
    if (lowerYLimit && upperYLimit) {
      const markAreaSerie = {
        name: 'Lower & Upper Limit',
        type: 'line',
        itemStyle: {
          normal: {
            color: 'rgba(0, 255, 0, 0.12)',
          },
        },
        markArea: {
          silent: true,
          data: [
            [
              {
                yAxis: lowerYLimit,
              },
              {
                yAxis: upperYLimit,
              },
            ],
          ],
          itemStyle: {
            borderType: 'dashed',
          },
        },
      };
      defaultOption.series.push(markAreaSerie);
    }
    // if (chartRef) {
    //   chartRef.setOption(defaultOption);
    // }
    setChartOption(Object.assign({}, defaultOption));
  }, [legendData, data, colors, lowerYLimit, upperYLimit, selectedX]);

  useEffect(() => {
    if (chartRef) {
      chartRef.setOption(chartOption, {
        notMerge: true,
        lazyUpdate: true,
        silent: true,
      });
    }
  }, [chartOption]);

  const onRef = ref => {
    if (ref) {
      chartRef = ref;
    }
  };
  const onData = param => {};

  return (
    <View style={styles.chartContainer}>
      <ECharts option={chartOption} ref={onRef} onData={onData} />
    </View>
  );
}

const styles = StyleSheet.create({
  chartContainer: {
    backgroundColor: '#ff00ff',
    height: 240,
    margin: 10,
    borderRadius: 4,
  },
});

export default EChartComponent;

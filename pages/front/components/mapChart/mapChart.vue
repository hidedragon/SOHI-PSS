<template>
  <div id="map-chart" class="map-chart"></div>
</template>

<script>
  const chinaJson = require('./china.json')
  let chinaMap = {}

  export default {
    name: "mapChart",
    mounted () {
      chinaMap = echarts.init(document.getElementById('map-chart'))
      echarts.registerMap('chinaMap', chinaJson)
      let datas = require('./datas.json')
      datas = datas.map(function (serieData, idx) {
        var px = serieData[0] / 1000;
        var py = serieData[1] / 1000;
        var res = [[px, py]];

        for (var i = 2; i < serieData.length; i += 2) {
          var dx = serieData[i] / 1000;
          var dy = serieData[i + 1] / 1000;
          var x = px + dx;
          var y = py + dy;
          res.push([x.toFixed(2), y.toFixed(2), 1]);

          px = x;
          py = y;
        }
        return res;
      });
      chinaMap.setOption({
        title : {
          text: '社会活动热点图',
          subtext: 'ThinkGIS',
          sublink: 'http://www.dashuntech.com:8808',
          left: 'center',
          top: 'top',
          textStyle: {
            color: '#fff'
          }
        },
        tooltip: {},
        legend: {
          left: 'left',
          data: ['强', '中', '弱'],
          textStyle: {
            color: '#ccc'
          }
        },
        geo: {
          map: 'china',
          roam: true,
          label: {
            emphasis: {
              show: false
            }
          },
          itemStyle: {
            normal: {
              areaColor: '#323c48',
              borderColor: '#111'
            },
            emphasis: {
              areaColor: '#2a333d'
            }
          }
        },
        series: [{
          name: '弱',
          type: 'scatterGL',
          coordinateSystem: 'geo',
          symbolSize: 1,
          itemStyle: {
            shadowBlur: 2,
            shadowColor: 'rgba(37, 140, 249, 0.8)',
            color: 'rgba(37, 140, 249, 0.8)'
          },
          data: datas[0]
        }, {
          name: '中',
          type: 'scatterGL',
          coordinateSystem: 'geo',
          symbolSize: 1,
          itemStyle: {
            shadowBlur: 2,
            shadowColor: 'rgba(14, 241, 242, 0.8)',
            color: 'rgba(14, 241, 242, 0.8)'
          },
          data: datas[1]
        }, {
          name: '强',
          type: 'scatterGL',
          coordinateSystem: 'geo',
          symbolSize: 1,
          itemStyle: {
            shadowBlur: 2,
            shadowColor: 'rgba(255, 255, 255, 0.8)',
            color: 'rgba(255, 255, 255, 0.8)'
          },
          data: datas[2]
        }]
      });
    }
  }
</script>

<style scoped>
  .map-chart{
    width: 100%;
    height: 800px;
  }
</style>

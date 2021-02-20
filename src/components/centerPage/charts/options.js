import echarts from 'echarts/lib/echarts';
import 'echarts/map/js/china';
//  地图数据
const mapData = {
  citys: [
    {
      name: '上海',
      value: [121.473701, 31.230416, 20],
      symbolSize: 10,
      itemStyle: {
        normal: {
          color: '#58B3CC',
        },
      },
    },
    {
      name: '临江',
      value: [126.918087, 41.811979, 2],
      symbolSize: 2,
      itemStyle: {
        normal: {
          color: '#F58158',
        },
      },
    },
    {
      name: '嘉兴',
      value: [120.755486, 30.746129, 4],
      symbolSize: 2,
      itemStyle: {
        normal: {
          color: '#F58158',
        },
      },
    },
    {
      name: '四平',
      value: [124.350398, 43.16642, 1],
      symbolSize: 2,
      itemStyle: {
        normal: {
          color: '#F58158',
        },
      },
    },
    {
      name: '营口',
      value: [122.235418, 40.667012, 1],
      symbolSize: 2,
      itemStyle: {
        normal: {
          color: '#F58158',
        },
      },
    },
    {
      name: '密云',
      value: [116.801346, 40.35874, 1],
      symbolSize: 2,
      itemStyle: {
        normal: {
          color: '#F58158',
        },
      },
    },
    {
      name: '威海',
      value: [122.12042, 37.513068, 32],
      symbolSize: 3,
      itemStyle: {
        normal: {
          color: '#F58158',
        },
      },
    },
    {
      name: '杭州',
      value: [120.15507, 30.274085, 10],
      symbolSize: 2,
      itemStyle: {
        normal: {
          color: '#F58158',
        },
      },
    },
    {
      name: '集安',
      value: [126.194031, 41.125307, 1],
      symbolSize: 2,
      itemStyle: {
        normal: {
          color: '#F58158',
        },
      },
    },
    {
      name: '贵阳',
      value: [106.630154, 26.647661, 2],
      symbolSize: 2,
      itemStyle: {
        normal: {
          color: '#F58158',
        },
      },
    },
    {
      name: '抚顺',
      value: [123.957208, 41.880872, 3],
      symbolSize: 2,
      itemStyle: {
        normal: {
          color: '#F58158',
        },
      },
    },
    {
      name: '海门',
      value: [121.181615, 31.871173, 2],
      symbolSize: 2,
      itemStyle: {
        normal: {
          color: '#F58158',
        },
      },
    },
    {
      name: '珠海',
      value: [113.576726, 22.270715, 9],
      symbolSize: 2,
      itemStyle: {
        normal: {
          color: '#F58158',
        },
      },
    },
    {
      name: '河北',
      value: [114.475704, 38.584854, -19],
      symbolSize: 2,
      itemStyle: {
        normal: {
          color: '#58B3CC',
        },
      },
    },
    {
      name: '深圳',
      value: [114.057868, 22.543099, 14],
      symbolSize: 2,
      itemStyle: {
        normal: {
          color: '#F58158',
        },
      },
    },
    {
      name: '黄浦',
      value: [121.484443, 31.231763, 1],
      symbolSize: 2,
      itemStyle: {
        normal: {
          color: '#F58158',
        },
      },
    },
    {
      name: '蓬莱',
      value: [120.758848, 37.810661, 1],
      symbolSize: 2,
      itemStyle: {
        normal: {
          color: '#F58158',
        },
      },
    },
    {
      name: '吉林',
      value: [126.549572, 43.837883, -364],
      symbolSize: 7,
      itemStyle: {
        normal: {
          color: '#58B3CC',
        },
      },
    },
    {
      name: '甘肃',
      value: [103.826308, 36.059421, -2],
      symbolSize: 2,
      itemStyle: {
        normal: {
          color: '#58B3CC',
        },
      },
    },
    {
      name: '龙井',
      value: [129.427066, 42.766311, 1],
      symbolSize: 2,
      itemStyle: {
        normal: {
          color: '#F58158',
        },
      },
    },
    {
      name: '茂名',
      value: [110.925456, 21.662999, 1],
      symbolSize: 2,
      itemStyle: {
        normal: {
          color: '#F58158',
        },
      },
    },
    {
      name: '丹东',
      value: [124.354707, 40.0005, 2],
      symbolSize: 2,
      itemStyle: {
        normal: {
          color: '#F58158',
        },
      },
    },
    {
      name: '晋中',
      value: [112.752695, 37.687024, 1],
      symbolSize: 2,
      itemStyle: {
        normal: {
          color: '#F58158',
        },
      },
    },
    {
      name: '浙江',
      value: [120.152792, 30.267447, -2],
      symbolSize: 2,
      itemStyle: {
        normal: {
          color: '#58B3CC',
        },
      },
    },
    {
      name: '海城',
      value: [122.685217, 40.882377, 2],
      symbolSize: 2,
      itemStyle: {
        normal: {
          color: '#F58158',
        },
      },
    },
    {
      name: '溆浦',
      value: [110.594921, 27.908281, 1],
      symbolSize: 2,
      itemStyle: {
        normal: {
          color: '#F58158',
        },
      },
    },
    {
      name: '北京',
      value: [116.407526, 39.90403, -14],
      symbolSize: 2,
      itemStyle: {
        normal: {
          color: '#58B3CC',
        },
      },
    },
    {
      name: '铁岭',
      value: [123.726166, 42.223769, 2],
      symbolSize: 2,
      itemStyle: {
        normal: {
          color: '#F58158',
        },
      },
    },
    {
      name: '大同',
      value: [113.61244, 40.040295, 1],
      symbolSize: 2,
      itemStyle: {
        normal: {
          color: '#F58158',
        },
      },
    },
    {
      name: '金坛',
      value: [119.597897, 31.723247, 1],
      symbolSize: 2,
      itemStyle: {
        normal: {
          color: '#F58158',
        },
      },
    },
    {
      name: '宁波',
      value: [121.550357, 29.874557, 10],
      symbolSize: 2,
      itemStyle: {
        normal: {
          color: '#F58158',
        },
      },
    },
    {
      name: '滨海',
      value: [119.820831, 33.990334, 1],
      symbolSize: 2,
      itemStyle: {
        normal: {
          color: '#F58158',
        },
      },
    },
    {
      name: '太原',
      value: [112.548879, 37.87059, 2],
      symbolSize: 2,
      itemStyle: {
        normal: {
          color: '#F58158',
        },
      },
    },
    {
      name: '鸡西',
      value: [130.969333, 45.295075, 1],
      symbolSize: 2,
      itemStyle: {
        normal: {
          color: '#F58158',
        },
      },
    },
    {
      name: '兰山',
      value: [118.347707, 35.051729, 1],
      symbolSize: 2,
      itemStyle: {
        normal: {
          color: '#F58158',
        },
      },
    },
    {
      name: '阳泉',
      value: [113.580519, 37.856972, 1],
      symbolSize: 2,
      itemStyle: {
        normal: {
          color: '#F58158',
        },
      },
    },
    {
      name: '勃利',
      value: [130.592171, 45.755063, 1],
      symbolSize: 2,
      itemStyle: {
        normal: {
          color: '#F58158',
        },
      },
    },
    {
      name: '长春',
      value: [125.323544, 43.817072, 8],
      symbolSize: 2,
      itemStyle: {
        normal: {
          color: '#F58158',
        },
      },
    },
  ]
};

export const mapOptions = (params) => ({
  title: {
    show: false,
    text: '全国物流输送图',
    left: 'center',
    textStyle: {
      color: '#fff',
    },
  },
  legend: {
    show: false,
  },
  geo: {
    nameMap: {
      China: '中国',
    },
    map: 'china',
    label: {
      emphasis: {
        show: false,
      },
    },
    zoom: 1.2,
    itemStyle: {
      normal: {
        borderColor: 'rgba(255,209,163, .5)', //区域边框颜色
        areaColor: 'rgba(73,86,166,.1)', //区域颜色
        borderWidth: 0.5, //区域边框宽度
        shadowBlur: 5,
        shadowColor: 'rgba(107,91,237,.7)',
      },
      emphasis: {
        borderColor: '#FFD1A3',
        areaColor: 'rgba(102,105,240,.3)',
        borderWidth: 1,
        shadowBlur: 5,
        shadowColor: 'rgba(135,138,255,.5)',
      },
    },
  },
  series: [
    {
      name: '地点',
      type: 'effectScatter',
      coordinateSystem: 'geo',
      zlevel: 2,
      rippleEffect: {
        brushType: 'stroke',
      },
      label: {
        emphasis: {
          show: true,
          position: 'right',
          formatter: '{b}',
        },
      },
      symbolSize: 2,
      showEffectOn: 'render',
      itemStyle: {
        normal: {
          color: '#46bee9',
        },
      },
      data: mapData.citys,
    },
    {
      name: '线路',
      type: 'lines',
      coordinateSystem: 'geo',
      zlevel: 2,
      zoom: 1,
      large: true,
      effect: {
        show: true,
        constantSpeed: 30,
        symbol: 'pin',
        symbolSize: 3,
        trailLength: 0,
      },
      lineStyle: {
        normal: {
          color: new echarts.graphic.LinearGradient(
            0,
            0,
            0,
            1,
            [
              {
                offset: 0,
                color: '#58B3CC',
              },
              {
                offset: 1,
                color: '#F58158',
              },
            ],
            false
          ),
          width: 1,
          opacity: 0.2,
          curveness: 0.1,
        },
      },
      data: params.moveLines,
    },
  ],
});

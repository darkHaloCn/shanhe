//柱状图
(function () {
    //实例化
    var myChart = echarts.init(document.querySelector('.bar .chart'));
    let option = {
        color: ["#2f89cf"],
        tooltip: {
            trigger: "axis",
            axisPointer: {
                // 坐标轴指示器，坐标轴触发有效
                type: "shadow" // 默认为直线，可选为：'line' | 'shadow'
            }
        },
        grid: {
            left: "0%",
            top: "10px",
            right: "0%",
            bottom: "4%",
            containLabel: true
        },
        xAxis: [
            {
                type: "category",
                data: ["2016", "2017", "2018", "2019", "2020", "2021", "2022"],
                axisTick: {
                    alignWithLabel: true
                },
                axisLabel: {
                    color: "rgba(255,255,255,.6)",
                    fontSize: "12"
                },
                axisLine: {
                    show: false
                    // 如果想要设置单独的线条样式 
                    // lineStyle: {
                    //    color: "rgba(255,255,255,.1)",
                    //    width: 1,
                    //    type: "solid"
                }
            }
        ],
        yAxis: [
            {
                type: "value",
                axisLabel: {
                    color: "rgba(255,255,255,.6)",
                    fontSize: "12"
                },
                axisLine: {
                    lineStyle: {
                        color: "rgba(255,255,255,.1)",
                        width: 2
                    }
                }
            },

        ],
        series: [
            {
                name: "直接访问",
                type: "bar",
                barWidth: "35%",
                data: [7000, 8400, 12000, 15000, 18654, 20049, 22569],
                itemStyle: {
                    // 修改柱子圆角
                    barBorderRadius: 5
                }
            }
        ]
    };
    myChart.setOption(option);
    window.addEventListener("resize", function () {
        myChart.resize();
    });
})();

//柱状图2
(function () {
    var myChart = echarts.init(document.querySelector('.bar2 .chart'));
    var myColor = ["#1089E7", "#F57474", "#56D0E3", "#F8B448", "#8B78F6"];
    let option = {

        tooltip: {
            trigger: 'axis',
            axisPointer: {
                type: 'shadow'
            }
        },

        grid: {
            top: "10%",
            left: "22%",
            bottom: "10%"
        },
        xAxis: {
            show: false,
            axisLine: {
                show: false
            },
        },
        yAxis:[
            {
                type: 'category',
                axisLabel: {
                    color: "#fff"
                },
                axisTick: {
                    show: false
                },
                inverse:true,
                data: ["后端开发", "算法工程师", "前端开发", "大数据", "AI"],
            },
            {
                type: 'category',
                axisLine: {
                    show: false
                  },
                axisLabel: {
                    color: "#fff"
                },
                axisTick: {
                    show: false
                },
                inverse:true,
                data: [702, 350, 610, 793, 664],
            }
        ],
        series: [
            {
                //修改第一组柱子
                yAxisIndex: 0,
                name: '条',
                type: 'bar',
                data: [80, 25, 70, 30, 10],
                // 柱子之间的距离
                barCategoryGap: 50,
                //柱子的宽度
                barWidth: 10,
                itemStyle: {
                    normal: {
                        barBorderRadius: 20,
                        color:function (params){
                            return myColor[params.dataIndex];
                        }
                    },
                    
                },
                label: {
                    normal: {
                         show: true,
                         // 图形内显示
                         position: "inside",
                         // 文字的显示格式
                         formatter: "{c}%"
                     }
                },
            },
            {
                name: '框',
                yAxisIndex: 1,
                type: 'bar',
                barCategoryGap: 50,
                barWidth: 15,
                itemStyle: {
                    color: "none",
                    borderColor: "#00c1de",
                    borderWidth: 3,
                    barBorderRadius: 15
                },
                data: [100, 100, 100, 100, 100],
            }

        ]
    };
    myChart.setOption(option);
    window.addEventListener("resize", function () {
        myChart.resize();
    });
})();


//折线图1
(function () {
    var myChart = echarts.init(document.querySelector('.line .chart'));
    let option = {
        tooltip: {
          trigger: 'axis'
        },
        legend: {
          data: ['2023一区论文总', '2023二区论文总'],
          textStyle: {
            color: '#4c9bfd' // 图例文字颜色
          },
          right: '10%' // 距离右边10%
        },
        grid: {
          left: '3%',
          right: '4%',
          bottom: '3%',
          top: '20%',
          containLabel: true,
          borderColor: '#012f4a',
          show: true,
        },
        // toolbox: {
        //   feature: {
        //     saveAsImage: {}
        //   }
        // },
        xAxis: {
          type: 'category',
          data: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'],
          axisTick: {
             show: false // 去除刻度线
           },
           axisLabel: {
             color: '#4c9bfd' // 文本颜色
           },
           axisLine: {
             show: false // 去除轴线
           },
           boundaryGap: false  // 去除轴内间距
        },
        yAxis: {
          type: 'value',
          axisTick: {
            show: false  // 去除刻度
          },
          axisLabel: {
            color: '#4c9bfd' // 文字颜色
          },
          splitLine: {
            lineStyle: {
              color: '#012f4a' // 分割线颜色
            }
          }
        },
        color: ['#00f2f1', '#ed3f35'],
        series: [{
            name:'2023一区论文总',
            data:  [24, 40, 101, 134, 90, 230, 210, 230, 120, 230, 210, 120],
            type: 'line',
            smooth: true
          },{
            name:'2023二区论文总',
            data: [40, 64, 191, 324, 290, 330, 310, 213, 180, 200, 180, 79],     
            type: 'line',
            smooth: true
            }
          ]
      };
      myChart.setOption(option);
        window.addEventListener("resize", function () {
        myChart.resize();
    });
})();

//折线图2
(function () {
    var myChart = echarts.init(document.querySelector('.line2 .chart'));
    let option = {
        tooltip: {
          trigger: 'axis',
      
        },
        legend: {
          data: ['其他岗位', '计算机岗位'],
          top: "0%",
          textStyle: {
            color: "rgba(255,255,255,.5)",
            fontSize: "12"
          }
        },
        toolbox: {
        },
        grid: {
            left: "10",
            top: "30",
            right: "10",
            bottom: "10",
            containLabel: true
        },
        xAxis: [
          {
            type: 'category',
            boundaryGap: false,
            data: [ "01","02","03","04","05","06","07","08","09","10","11","12","13","14","15","16","17","18","19","20","21","22","23","24","25","26","26","28","29","30"],
            axisLabel: {
                textStyle: {
                  color: "rgba(255,255,255,.6)",
                  fontSize: 12
                }
              },
               // x轴线的颜色为   rgba(255,255,255,.2)
              axisLine: {
                lineStyle: {
                  color: "rgba(255,255,255,.2)"
                }
              },
          }
        ],
        yAxis: [
          {
            type: 'value',
            axisTick: { show: false },
        axisLine: {
          lineStyle: {
            color: "rgba(255,255,255,.1)"
          }
        },
        axisLabel: {
          textStyle: {
            color: "rgba(255,255,255,.6)",
            fontSize: 12
          }
        },
	   // 修改分割线的颜色
        splitLine: {
          lineStyle: {
            color: "rgba(255,255,255,.1)"
          }
        }
          }
        ],
        series: [
          {
            name: '其他岗位',
            type: 'line',
            smooth: true,
            areaStyle: {
                color: new echarts.graphic.LinearGradient(
                    0,
                    0,
                    0,
                    1,
                    [
                      {
                        offset: 0,
                        color: "rgba(1, 132, 213, 0.4)"   // 渐变色的起始颜色
                      },
                      {
                        offset: 0.8,
                        color: "rgba(1, 132, 213, 0.1)"   // 渐变线的结束颜色
                      }
                    ],
                    false
                  ),
                  shadowColor: "rgba(0, 0, 0, 0.1)"
            },
            symbol: "circle",
            symbolSize: 8,
            lineStyle: {
                color: "#0184d5",
                borderColor: "rgba(221, 220, 107, .1)",
                borderWidth: 12
            },
            showSymbol: false,
            data: [ 30, 40, 30, 40,30, 40, 30,60,20, 40, 30, 40, 30, 40,30, 40, 30,60,20, 40, 30, 40, 30, 40,30, 40, 20,60,50, 40],
          },
          {
            name: '计算机岗位',
            type: 'line',
            smooth: true,
            areaStyle: {
                normal: {
                  color: new echarts.graphic.LinearGradient(
                    0,
                    0,
                    0,
                    1,
                    [
                      {
                        offset: 0,
                        color: "rgba(0, 216, 135, 0.4)"
                      },
                      {
                        offset: 0.8,
                        color: "rgba(0, 216, 135, 0.1)"
                      }
                    ],
                    false
                  ),
                  shadowColor: "rgba(0, 0, 0, 0.1)"
                }
              },
              symbol: "circle",
            symbolSize: 5,
            lineStyle: {
                normal: {
                  color: "#00d887",
                  width: 2
                }
               },
               itemStyle: {
                color: "#00d887",
                borderColor: "rgba(221, 220, 107, .1)",
                borderWidth: 12
            },
            // 开始不显示拐点， 鼠标经过显示
            showSymbol: false,
            data: [ 130, 10, 20, 40,30, 40, 80,60,20, 40, 90, 40,20, 140,30, 40, 130,20,20, 40, 80, 70, 30, 40,30, 120, 20,99,50, 20],
          },
          
      
        ]
      };
        myChart.setOption(option);
        window.addEventListener("resize", function () {
        myChart.resize();
    });
})();

//饼状图2
(function(){
    var myChart = echarts.init(document.querySelector('.pie1 .chart'));
    let option = {
        legend: {
          top: "90%",
          itemWidth: 10,
          itemHeight: 10,
          textStyle: {
            color: "rgba(255,255,255,.5)",
            fontSize: "12"
          }
        },
        tooltip: {
          trigger: "item",
          formatter: "{a} <br/>{b} : {c} ({d}%)"
        },
        // 注意颜色写的位置
        color: [
          "#006cff",
          "#60cda0",
          "#ed8884",
          "#ff9f7f",
          "#0096ff",
          "#9fe6b8",
          "#32c5e9",
          "#1d9dff"
        ],
        series: [
          {
            name: "点位统计",
            type: "pie",
            // 如果radius是百分比则必须加引号
            radius: ["10%", "70%"],
            center: ["50%", "42%"],
            roseType: "radius",
            data: [
              { value: 20, name: "深圳" },
              { value: 26, name: "南京" },
              { value: 24, name: "武汉" },
              { value: 25, name: "湖南" },
              { value: 20, name: "四川" },
              { value: 25, name: "浙江" },
              { value: 30, name: "上海" },
              { value: 42, name: "北京" }
            ],
            // 修饰饼形图文字相关的样式 label对象
            label: {
              fontSize: 10
            },
            // 修饰引导线样式
            labelLine: {
              // 连接到图形的线长度
              length: 10,
              // 连接到文字的线长度
              length2: 10
            }
          }
        ]
      };
    
      // 3. 配置项和数据给我们的实例化对象
      myChart.setOption(option);
      // 4. 当我们浏览器缩放的时候，图表也等比例缩放
      window.addEventListener("resize", function() {
        // 让我们的图表调用 resize这个方法
        myChart.resize();
      });
})();

//饼状图1
(function(){
  var myChart = echarts.init(document.querySelector('.pie .chart'));
  let option = {
    tooltip: {
      trigger: 'item'
    },
    legend: {
      // 距离底部为0%
      bottom: "0%",
      // 小图标的宽度和高度
      itemWidth: 10,
      itemHeight: 10,
      left: 'center',
      textStyle: {
        color: "rgba(255,255,255,.5)",
        fontSize: "12"
      }
    },
    series: [
      {
        name: '科研重点',
        type: 'pie',
        radius: ['40%', '60%'],
        avoidLabelOverlap: false,
        label: {
          show: false,
          position: 'center'
        },
        emphasis: {
          label: {
            show: true,
            fontSize: '40',
            fontWeight: 'bold'
          }
        },
        labelLine: {
          show: false
        },
        data: [
          { value: 1048, name: '智能算法' },
          { value: 735, name: '大数据分析与应用' },
          { value: 580, name: '智能物联' },
          { value: 484, name: 'AI与人类' },
          { value: 300, name: '智能驾驶' }
        ],
        
      }
    ]
  };
  myChart.setOption(option);
      // 4. 当我们浏览器缩放的时候，图表也等比例缩放
      window.addEventListener("resize", function() {
        // 让我们的图表调用 resize这个方法
        myChart.resize();
      });
})()
function doughnutchart() {
  var options = {
    cutoutPercentage: 80,
    responsive:false,
    plugins: {
        tooltip: {
          enabled: false
       },
        datalabels: {
           font: {
               size: 13,
           },
           color: 'white',
           formatter: (value) => value.toString() + '%'
        },
        legend: {
          position: "bottom", 
              align: 'start',
              labels: {
                boxWidth: 20,
                font: {
                  size: 20,
                },
                padding: 20,
              }
        }
      }
  };
  var ctx = document.getElementById("doughnutchart").getContext('2d');
  var myChart = new Chart(ctx, {
      type: "doughnut", // グラフの種類 pie 円グラフ, doughnut ドーナツチャート, polarArea 鶏頭図
      data: {
          labels:  ["HTML", "CSS", "JavaScript", "PHP", "Laravel", "SQL", "SHELL", "その他"],  // 軸のラベル
          datasets: [
              {
                  label: "質問Ａ",                                     // 不要 無視される
                  data: [30, 20, 10, 5, 5, 20, 20, 10],                           // 100%になるよう自動調整される
                  backgroundColor: ["rgb(8,69,236)", "rgb(15,113,189)", "rgb(32,189,222)", "rgb(178,158,243)", "rgb(109,70,236)", "rgb(109,70,236)", "rgb(74,23,240)", "rgb(49,5,192)"], // 円弧の塗りつぶし色
                //   borderColor: "black",                                // 境界線の色
                  borderWidth: 0    ,                                   // 境界線の幅
                  }
                ]
              },
          
      options: options,
      plugins: [
          ChartDataLabels,
      ],
  })}


doughnutchart()



function doughnutchart2() {
  var options = {
    cutoutPercentage: 80,
    responsive:false,
    plugins: {
        tooltip: {
          enabled: false
       },
        datalabels: {
           font: {
               size: 13,
           },
           color: 'white',
           formatter: (value) => value.toString() + '%'
        },
        legend: {
          position: "bottom", 
              align: 'start',
              labels: {
                boxWidth: 20,
                font: {
                  size: 20,
                },
                padding: 20,
              }
        }
      }
  };
    var ctx = document.getElementById("doughnutchart2").getContext('2d');
    var myChart = new Chart(ctx, {
        type: "doughnut", // グラフの種類 pie 円グラフ, doughnut ドーナツチャート, polarArea 鶏頭図
        data: {
            labels:  ["N予備校", "ドットインストール", "課題"],  // 軸のラベル
            datasets: [
                {
                    label: "質問Ａ",                                     // 不要 無視される
                    data: [40, 20, 40],                           // 100%になるよう自動調整される
                    backgroundColor: ["rgb(8,69,236)", "rgb(15,113,189)", "rgb(32,189,222)"], // 円弧の塗りつぶし色
                  //   borderColor: "black",                                // 境界線の色
                    borderWidth: 0                                       // 境界線の幅
                }
            ]
        },
        options:options,
        plugins: [
          ChartDataLabels,
        ], 
    });
  }
  
  doughnutchart2()
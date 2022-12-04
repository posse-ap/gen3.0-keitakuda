


function simplebarchart() {
    var ctx = document.getElementById("barchart").getContext('2d');
    let gradient = ctx.createLinearGradient(0, 300, 0, 0);
    gradient.addColorStop(0, 'blue');
    gradient.addColorStop(0.5, 'lightblue');
    gradient.addColorStop(1, 'skyblue');
    var myChart = new Chart(ctx, {
        type: "bar",    // ★必須　グラフの種類
        data: {
            labels:  [,"2", "", "4", "", "6", "", "8", "","10","", "12", "", "14", "", "16", "","18","", "20", "", "22", "", "24", "","26", "", "28","", "30"],  // Ｘ軸のラベル
            datasets: [
                {
                    label: "系列Ａ",                            // 系列名
                    data: [3, 4, 5, 3, 0, 0, 4, 2, 2, 8, 8, 2, 2, 1, 7, 4, 4, 3, 3, 3, 2, 2, 6, 2, 2, 1, 1, 1, 7, 8],                   // ★必須　系列Ａのデータ
                    backgroundColor: gradient,
                    borderRadius: 10,
                    barThickness: 10,
                }

            ]
        },
        options: {
            responsive: false,  // canvasサイズ自動設定機能を使わない。HTMLで指定したサイズに固定
            scales: {
              y:{grid:{display:false},ticks:{stepSize: 2
            ,callback: function(tick) {return tick. toString() + 'h';}}},
            x:{grid:{display:false}},
            },
            plugins:{legend:false}
        }
    });
}

simplebarchart()
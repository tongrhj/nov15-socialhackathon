// var hoursChart = c3.generate({
//   bindto: '#hoursChart',
//   data: {
//       // iris data from R
//     columns: [
//         ['data1', 30],
//         ['data2', 120]
//     ],
//     names: {
//       data1: 'The Hidden Good',
//       data2: 'Food from the Heart',
//     },
//     type : 'pie',
//     colors: {
//         data1: 'mediumspringgreen',
//         data2: 'salmon'
//     },
//     onclick: function (d, i) { console.log("onclick", d, i); },
//     onmouseover: function (d, i) { console.log("onmouseover", d, i); },
//     onmouseout: function (d, i) { console.log("onmouseout", d, i); }
//   }
// });
//
// function configChart(data) {
//   if (data === 'total') {
//     console.log('totalHours pressed')
//     hoursChart.unload(['data3', 'data4', 'data5'])
//     hoursChart.transform('pie')
//     hoursChart.load({
//       columns: [
//         ['data1', 30],
//         ['data2', 120]
//       ]
//     })
//   } else if (data === 'monthly') {
//     console.log('monthlyHours pressed')
//     hoursChart.unload(['data1', 'data2'])
//     hoursChart.transform('bar')
//     hoursChart.load({
//       columns: [
//         ['data3', 46, 0, 20],
//         ['data4', 100, 10, 0],
//         ['data5', 77, 60, 0]
//       ]
//     })
//   } else return
// }
//
// var btnTotalHours = document.getElementById('totalHours')
// btnTotalHours.addEventListener("click", function() { configChart('total') }, false);
//
// var btnMonthlyHours = document.getElementById('monthlyHours')
// btnMonthlyHours.addEventListener("click", function() { configChart('monthly') }, false);

// Gauge Chart for Volunteer Percentile


var rankChart = c3.generate({
    bindto: '#rankChart',
    data: {
        columns: [
            ['data', 0]
        ],
        type: 'gauge',
        onclick: function (d, i) { console.log("onclick", d, i); },
        onmouseover: function (d, i) { console.log("onmouseover", d, i); },
        onmouseout: function (d, i) { console.log("onmouseout", d, i); }
    },
    gauge: {
        label: {
            format: function(value, ratio) {
                return ratio;
            },
            show: false // to turn off the min/max labels.
        },
//    min: 0, // 0 is default, //can handle negative min e.g. vacuum / voltage / current flow / rate of change
//    max: 100, // 100 is default
//    units: ' %',
//    width: 39 // for adjusting arc thickness
    },
    color: {
        pattern: ['#FF0000', '#F97600', '#F6C600', '#60B044'], // the three color levels for the percentage values.
        threshold: {
//            unit: 'value', // percentage is default
//            max: 200, // 100 is default
            values: [30, 60, 90, 100]
        }
    },
    size: {
        height: 180
    }
});

setTimeout(function () {
    rankChart.load({
        columns: [['data', 70]]
    });
}, 3000);

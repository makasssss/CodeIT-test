	$(function () {
    Highcharts.chart('container', {
        chart: {
            plotBackgroundColor: null,
            plotBorderWidth: null,
            plotShadow: false,
            type: 'pie'
        },
        title: {
            text: ''
        },
        tooltip: {
            pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
        },
        plotOptions: {
            pie: {
                allowPointSelect: true,
                cursor: 'pointer',
                dataLabels: {
                    enabled: true,
                    format: '<b>{point.name}</b>: {point.percentage:.1f} %',
                    style: {
                        color: (Highcharts.theme && Highcharts.theme.contrastTextColor) || 'black'
                    }
                }
            }
        },
        series: [{
            name: 'Percentage',
            colorByPoint: true,
            data: [{
                name: 'Ukraine',
                y: 18
            }, {
                name: 'Poland',
                y: 34,
                sliced: true,
                selected: true
            }, {
                name: 'Germany',
                y: 3
            }, {
                name: 'Norway',
                y: 4
            }, {
                name: 'US',
                y: 23
            }, {
                name: 'Sweden',
                y: 18
            }]
        }]
    });
});


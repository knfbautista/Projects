window.onload = function () {

    var chart = new CanvasJS.Chart("chartContainer", {
        exportEnabled: true,
        animationEnabled: true,
        title:{
            text: "Faceblook Account Overview"
        },
        subtitles: [{
            text: ""
        }], 
        axisX: {
            title: ""
        },
        axisY: {
            title: "",
            titleFontColor: "#4F81BC",
            lineColor: "#4F81BC",
            labelFontColor: "#4F81BC",
            tickColor: "#4F81BC",
            includeZero: true
        },
        axisY2: {
            title: "",
            titleFontColor: "#C0504E",
            lineColor: "#C0504E",
            labelFontColor: "#C0504E",
            tickColor: "#C0504E",
            includeZero: true
        },
        toolTip: {
            shared: true
        },
        legend: {
            cursor: "pointer",
            itemclick: toggleDataSeries
        },
        data: [{
            type: "column",
            name: "New",
            showInLegend: true,      
            yValueFormatString: "#,##0.# Units",
            dataPoints: [
                { label: "Profile Impressions",  y: 930 },
                { label: "Friend Request", y: 413 },
                { label: "Followers", y: 4917 },
                { label: "Likes",  y: 3079 },
            ]
        },
        {
            type: "column",
            name: "Old",
            axisYType: "secondary",
            showInLegend: true,
            yValueFormatString: "#,##0.# Units",
            dataPoints: [
                { label: "Profile Impressions", y: 562 },
                { label: "Friend Request", y: 135 },
                { label: "Followers", y: 3458 },
                { label: "Likes", y: 2587 },
            ]
        }]
    });
    chart.render();
    
    function toggleDataSeries(e) {
        if (typeof (e.dataSeries.visible) === "undefined" || e.dataSeries.visible) {
            e.dataSeries.visible = false;
        } else {
            e.dataSeries.visible = true;
        }
        e.chart.render();
    }
    
    }
var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "100",
        "ok": "0",
        "ko": "100"
    },
    "minResponseTime": {
        "total": "1003",
        "ok": "-",
        "ko": "1003"
    },
    "maxResponseTime": {
        "total": "1201",
        "ok": "-",
        "ko": "1201"
    },
    "meanResponseTime": {
        "total": "1161",
        "ok": "-",
        "ko": "1161"
    },
    "standardDeviation": {
        "total": "21",
        "ok": "-",
        "ko": "21"
    },
    "percentiles1": {
        "total": "1161",
        "ok": "-",
        "ko": "1161"
    },
    "percentiles2": {
        "total": "1172",
        "ok": "-",
        "ko": "1172"
    },
    "percentiles3": {
        "total": "1189",
        "ok": "-",
        "ko": "1189"
    },
    "percentiles4": {
        "total": "1199",
        "ok": "-",
        "ko": "1199"
    },
    "group1": {
        "name": "t < 800 ms",
        "count": 0,
        "percentage": 0
    },
    "group2": {
        "name": "800 ms < t < 1200 ms",
        "count": 0,
        "percentage": 0
    },
    "group3": {
        "name": "t > 1200 ms",
        "count": 0,
        "percentage": 0
    },
    "group4": {
        "name": "failed",
        "count": 100,
        "percentage": 100
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "15.8",
        "ok": "-",
        "ko": "15.8"
    }
},
contents: {
"req_myrequest1-f9178": {
        type: "REQUEST",
        name: "myRequest1",
path: "myRequest1",
pathFormatted: "req_myrequest1-f9178",
stats: {
    "name": "myRequest1",
    "numberOfRequests": {
        "total": "100",
        "ok": "0",
        "ko": "100"
    },
    "minResponseTime": {
        "total": "1003",
        "ok": "-",
        "ko": "1003"
    },
    "maxResponseTime": {
        "total": "1201",
        "ok": "-",
        "ko": "1201"
    },
    "meanResponseTime": {
        "total": "1161",
        "ok": "-",
        "ko": "1161"
    },
    "standardDeviation": {
        "total": "21",
        "ok": "-",
        "ko": "21"
    },
    "percentiles1": {
        "total": "1161",
        "ok": "-",
        "ko": "1161"
    },
    "percentiles2": {
        "total": "1172",
        "ok": "-",
        "ko": "1172"
    },
    "percentiles3": {
        "total": "1189",
        "ok": "-",
        "ko": "1189"
    },
    "percentiles4": {
        "total": "1199",
        "ok": "-",
        "ko": "1199"
    },
    "group1": {
        "name": "t < 800 ms",
        "count": 0,
        "percentage": 0
    },
    "group2": {
        "name": "800 ms < t < 1200 ms",
        "count": 0,
        "percentage": 0
    },
    "group3": {
        "name": "t > 1200 ms",
        "count": 0,
        "percentage": 0
    },
    "group4": {
        "name": "failed",
        "count": 100,
        "percentage": 100
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "15.8",
        "ok": "-",
        "ko": "15.8"
    }
}
    }
}

}

function fillStats(stat){
    $("#numberOfRequests").append(stat.numberOfRequests.total);
    $("#numberOfRequestsOK").append(stat.numberOfRequests.ok);
    $("#numberOfRequestsKO").append(stat.numberOfRequests.ko);

    $("#minResponseTime").append(stat.minResponseTime.total);
    $("#minResponseTimeOK").append(stat.minResponseTime.ok);
    $("#minResponseTimeKO").append(stat.minResponseTime.ko);

    $("#maxResponseTime").append(stat.maxResponseTime.total);
    $("#maxResponseTimeOK").append(stat.maxResponseTime.ok);
    $("#maxResponseTimeKO").append(stat.maxResponseTime.ko);

    $("#meanResponseTime").append(stat.meanResponseTime.total);
    $("#meanResponseTimeOK").append(stat.meanResponseTime.ok);
    $("#meanResponseTimeKO").append(stat.meanResponseTime.ko);

    $("#standardDeviation").append(stat.standardDeviation.total);
    $("#standardDeviationOK").append(stat.standardDeviation.ok);
    $("#standardDeviationKO").append(stat.standardDeviation.ko);

    $("#percentiles1").append(stat.percentiles1.total);
    $("#percentiles1OK").append(stat.percentiles1.ok);
    $("#percentiles1KO").append(stat.percentiles1.ko);

    $("#percentiles2").append(stat.percentiles2.total);
    $("#percentiles2OK").append(stat.percentiles2.ok);
    $("#percentiles2KO").append(stat.percentiles2.ko);

    $("#percentiles3").append(stat.percentiles3.total);
    $("#percentiles3OK").append(stat.percentiles3.ok);
    $("#percentiles3KO").append(stat.percentiles3.ko);

    $("#percentiles4").append(stat.percentiles4.total);
    $("#percentiles4OK").append(stat.percentiles4.ok);
    $("#percentiles4KO").append(stat.percentiles4.ko);

    $("#meanNumberOfRequestsPerSecond").append(stat.meanNumberOfRequestsPerSecond.total);
    $("#meanNumberOfRequestsPerSecondOK").append(stat.meanNumberOfRequestsPerSecond.ok);
    $("#meanNumberOfRequestsPerSecondKO").append(stat.meanNumberOfRequestsPerSecond.ko);
}

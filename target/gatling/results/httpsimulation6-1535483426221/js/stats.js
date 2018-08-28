var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "40",
        "ok": "40",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "21",
        "ok": "21",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "70",
        "ok": "70",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "35",
        "ok": "35",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "10",
        "ok": "10",
        "ko": "-"
    },
    "percentiles1": {
        "total": "36",
        "ok": "36",
        "ko": "-"
    },
    "percentiles2": {
        "total": "41",
        "ok": "41",
        "ko": "-"
    },
    "percentiles3": {
        "total": "47",
        "ok": "47",
        "ko": "-"
    },
    "percentiles4": {
        "total": "61",
        "ok": "61",
        "ko": "-"
    },
    "group1": {
        "name": "t < 800 ms",
        "count": 40,
        "percentage": 100
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
        "count": 0,
        "percentage": 0
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "8.282",
        "ok": "8.282",
        "ko": "-"
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
        "total": "20",
        "ok": "20",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "38",
        "ok": "38",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "70",
        "ok": "70",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "43",
        "ok": "43",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "6",
        "ok": "6",
        "ko": "-"
    },
    "percentiles1": {
        "total": "41",
        "ok": "41",
        "ko": "-"
    },
    "percentiles2": {
        "total": "45",
        "ok": "45",
        "ko": "-"
    },
    "percentiles3": {
        "total": "50",
        "ok": "50",
        "ko": "-"
    },
    "percentiles4": {
        "total": "66",
        "ok": "66",
        "ko": "-"
    },
    "group1": {
        "name": "t < 800 ms",
        "count": 20,
        "percentage": 100
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
        "count": 0,
        "percentage": 0
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "4.141",
        "ok": "4.141",
        "ko": "-"
    }
}
    },"req_myrequest1-redi-c5ea6": {
        type: "REQUEST",
        name: "myRequest1 Redirect 1",
path: "myRequest1 Redirect 1",
pathFormatted: "req_myrequest1-redi-c5ea6",
stats: {
    "name": "myRequest1 Redirect 1",
    "numberOfRequests": {
        "total": "20",
        "ok": "20",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "21",
        "ok": "21",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "34",
        "ok": "34",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "26",
        "ok": "26",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "3",
        "ok": "3",
        "ko": "-"
    },
    "percentiles1": {
        "total": "25",
        "ok": "25",
        "ko": "-"
    },
    "percentiles2": {
        "total": "28",
        "ok": "28",
        "ko": "-"
    },
    "percentiles3": {
        "total": "34",
        "ok": "34",
        "ko": "-"
    },
    "percentiles4": {
        "total": "34",
        "ok": "34",
        "ko": "-"
    },
    "group1": {
        "name": "t < 800 ms",
        "count": 20,
        "percentage": 100
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
        "count": 0,
        "percentage": 0
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "4.141",
        "ok": "4.141",
        "ko": "-"
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

var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "2",
        "ok": "0",
        "ko": "2"
    },
    "minResponseTime": {
        "total": "21002",
        "ok": "-",
        "ko": "21002"
    },
    "maxResponseTime": {
        "total": "21050",
        "ok": "-",
        "ko": "21050"
    },
    "meanResponseTime": {
        "total": "21026",
        "ok": "-",
        "ko": "21026"
    },
    "standardDeviation": {
        "total": "24",
        "ok": "-",
        "ko": "24"
    },
    "percentiles1": {
        "total": "21026",
        "ok": "-",
        "ko": "21026"
    },
    "percentiles2": {
        "total": "21038",
        "ok": "-",
        "ko": "21038"
    },
    "percentiles3": {
        "total": "21047",
        "ok": "-",
        "ko": "21047"
    },
    "percentiles4": {
        "total": "21049",
        "ok": "-",
        "ko": "21049"
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
        "count": 2,
        "percentage": 100
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "0.043",
        "ok": "-",
        "ko": "0.043"
    }
},
contents: {
"req_get-to-base-url-05d30": {
        type: "REQUEST",
        name: "GET to base URL",
path: "GET to base URL",
pathFormatted: "req_get-to-base-url-05d30",
stats: {
    "name": "GET to base URL",
    "numberOfRequests": {
        "total": "1",
        "ok": "0",
        "ko": "1"
    },
    "minResponseTime": {
        "total": "21050",
        "ok": "-",
        "ko": "21050"
    },
    "maxResponseTime": {
        "total": "21050",
        "ok": "-",
        "ko": "21050"
    },
    "meanResponseTime": {
        "total": "21050",
        "ok": "-",
        "ko": "21050"
    },
    "standardDeviation": {
        "total": "0",
        "ok": "-",
        "ko": "0"
    },
    "percentiles1": {
        "total": "21050",
        "ok": "-",
        "ko": "21050"
    },
    "percentiles2": {
        "total": "21050",
        "ok": "-",
        "ko": "21050"
    },
    "percentiles3": {
        "total": "21050",
        "ok": "-",
        "ko": "21050"
    },
    "percentiles4": {
        "total": "21050",
        "ok": "-",
        "ko": "21050"
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
        "count": 1,
        "percentage": 100
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "0.021",
        "ok": "-",
        "ko": "0.021"
    }
}
    },"req_get-to--compute-9a66b": {
        type: "REQUEST",
        name: "GET to /computers",
path: "GET to /computers",
pathFormatted: "req_get-to--compute-9a66b",
stats: {
    "name": "GET to /computers",
    "numberOfRequests": {
        "total": "1",
        "ok": "0",
        "ko": "1"
    },
    "minResponseTime": {
        "total": "21002",
        "ok": "-",
        "ko": "21002"
    },
    "maxResponseTime": {
        "total": "21002",
        "ok": "-",
        "ko": "21002"
    },
    "meanResponseTime": {
        "total": "21002",
        "ok": "-",
        "ko": "21002"
    },
    "standardDeviation": {
        "total": "0",
        "ok": "-",
        "ko": "0"
    },
    "percentiles1": {
        "total": "21002",
        "ok": "-",
        "ko": "21002"
    },
    "percentiles2": {
        "total": "21002",
        "ok": "-",
        "ko": "21002"
    },
    "percentiles3": {
        "total": "21002",
        "ok": "-",
        "ko": "21002"
    },
    "percentiles4": {
        "total": "21002",
        "ok": "-",
        "ko": "21002"
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
        "count": 1,
        "percentage": 100
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "0.021",
        "ok": "-",
        "ko": "0.021"
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

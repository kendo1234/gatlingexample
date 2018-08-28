################################
# Gatling Example Requirements #
################################


influxdb config and dockerfile example:

***********************************************************************************************************
[meta]
  dir = "/var/lib/influxdb/meta"
[data]
  dir = "/var/lib/influxdb/data"
  engine = "tsm1"
  wal-dir = "/var/lib/influxdb/wal"
[[graphite]]
        enabled = true
        database = "gatlingdb"
        templates = [
                "gatling.*.*.*.* measurement.simulation.request.status.field",
                "gatling.*.users.*.* measurement.simulation.measurement.request.field"
        ]
**********************************************************************************************************

FROM influxdb
ADD influxdb.conf /etc/influxdb/influxdb.conf

**********************************************************************************************************

Example simulation run - mvn gatling:execute -Dgatling.simulationClass=gatlingsimulations.HttpSimulation1

Grafana Setup:

docker build -t influxdb-example .
docker run -d -p 8086:8086 -p 2003:2003 influxdb-example -config /etc/influxdb/influxdb.conf
docker run -d --name=grafana -p 3000:3000 grafana/grafana


Inspect influxdb:

- Attach terminal to container - docker exec -i -t *CONTAINER ID* /bin/bash
- type 'influx' in terminal
- type 'show databases' in influx shell

package gatlingsimulations

import io.gatling.core.Predef._
import io.gatling.http.Predef._
import io.gatling.http.request.builder.HttpRequestBuilder.toActionBuilder

/**
  * Example Gatling load test simulating ten users that each sends one single HTTP GET request.
  * All the users will start sending requests immediately when the simulation is started.
  * Run this simulation with:
  * mvn -Dgatling.simulation.name=HttpSimulation3 gatling:execute
  *
  * @author Ivan Krizsan
  */
class HttpSimulation3 extends Simulation {

  val theHttpProtocolBuilder = http
    .baseURL("https://computer-database.gatling.io")

  val theScenarioBuilder = scenario("Scenario1")
    .exec(
      http("myRequest1")
        .get("/computers"))

  setUp(
    /*
     * Here we specify that ten simulated users shall start sending requests immediately
     * in the Scenario1 scenario.
     */
    theScenarioBuilder.inject(atOnceUsers(10))
  ).protocols(theHttpProtocolBuilder)
}
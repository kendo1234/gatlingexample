package gatlingsimulations

import io.gatling.core.Predef._
import io.gatling.http.Predef._
import io.gatling.http.request.builder.HttpRequestBuilder.toActionBuilder
import scala.concurrent.duration._

/**
  * Example Gatling load test simulating a number of users that rises up to 10 users over
  * a period of 20 seconds.
  * Run this simulation with:
  * mvn -Dgatling.simulation.name=HttpSimulation4 gatling:execute
  *
  * @author Ivan Krizsan
  */


class HttpSimulation4 extends Simulation {

  before {
    println("***** Simulation 4 Begins *****")

    val theHttpProtocolBuilder = http
      .baseURL("https://google.com")

    val theScenarioBuilder = scenario("Scenario1")
      .exec(
        http("myRequest1")
          .get("/"))

    setUp(
      /*
     * Increase the number of users that sends requests in the scenario Scenario1 to
     * ten users over a period of 20 seconds.
     */
      theScenarioBuilder.inject(rampUsers(100).over(120 seconds))
    ).protocols(theHttpProtocolBuilder)
  }
}
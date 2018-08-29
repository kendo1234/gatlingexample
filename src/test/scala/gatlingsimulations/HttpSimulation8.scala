package gatlingsimulations

import io.gatling.core.Predef._
import io.gatling.http.Predef._
import io.gatling.http.request.builder.HttpRequestBuilder.toActionBuilder

/**
  * Example Gatling load test that sends one HTTP GET requests to a URL.
  * The resulting HTTP status code should be one of the status codes in a list of expected status codes.
  * The response body is examined and the request is considered to have failed if the specified regular
  * expression is not matched.
  * Run this simulation with:
  * mvn -Dgatling.simulation.name=HttpSimulation7 gatling:execute
  *
  * @author Ivan Krizsan
  */
class HttpSimulation8 extends Simulation {
  val theHttpProtocolBuilder = http
    .baseURL("http://computer-database.gatling.io")

  val theScenarioBuilder = scenario("Scenario1")
    .exec(
      http("Request Computers List")
        .get("/computers")
        /* Several checks on the response can be specified. */
        .check(
        /* Check that the HTTP status returned is 200 or 201. */
        status.find.in(200, 202),
        /* Check that there is at least one match of the supplied regular expression in the response body. */
        regex("Computer database").count.greaterThanOrEqual(1)
      )
    )

  setUp(
    theScenarioBuilder.inject(atOnceUsers(1))
  ).protocols(theHttpProtocolBuilder)
}
package gatlingsimulations

import io.gatling.core.Predef._
import io.gatling.http.Predef._
import io.gatling.http.request.builder.HttpRequestBuilder.toActionBuilder

import scala.concurrent.duration._

/**
  * Example Gatling load test that sends two HTTP GET requests with a short pause between.
  * The first request will be redirected, again making it look like there were two requests sent.
  * The second request will not be redirected.
  * Run this simulation with:
  * mvn -Dgatling.simulation.name=HttpSimulation2 gatling:execute
  *
  * @author Ivan Krizsan
  */
class HttpSimulation2 extends Simulation {

  val theHttpProtocolBuilder = http
    .baseURL("https://computer-database.gatling.io")

  /*
  * This scenario consists of two GET requests; one to the base URL and one to /computers relative
  * to the base URL.
  * Between the requests there will be a pause for five seconds.
  * Note that in order to get access to different durations, we must add the following import:
  * import scala.concurrent.duration._
  */
  val theScenarioBuilder = scenario("Scenario1")
    .exec(
      http("GET to base URL")
        .get("/"))
    .pause(1, 5 seconds)
    .exec(
      http("GET to /computers")
        .get("/computers"))

  setUp(
    theScenarioBuilder.inject(atOnceUsers(1))
  ).protocols(theHttpProtocolBuilder)

}
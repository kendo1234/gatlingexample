package gatlingsimulations

import io.gatling.core.Predef._
import io.gatling.core.body.Body
import io.gatling.http.Predef._
import io.gatling.http.request.Body

/**
  * Example Gatling load test that sends one HTTP POST requests to a URL.
  * The body of the POST request contains the string "Farty Towels!".
  * Two ways of passing HTTP headers are shown.
  * Two URL parameters, "login" and "password", are passed in the URL of the request.
  * Note that this simulation should fail, since a non-expected HTTP status code should be returned.
  * Run this simulation with:
  * mvn -Dgatling.simulation.name=HttpSimulation5 gatling:execute
  *
  * @author Ivan Krizsan
  */
class HttpSimulation7 extends Simulation {

  val theHttpProtocolBuilder = http
    .baseURL("http://computer-database.gatling.io")
    .acceptHeader("application/xml, text/html, text/plain, application/json, */*")
    .acceptCharsetHeader("UTF-8")
    .acceptEncodingHeader("gzip, deflate")

  val theCommonHeaders = Map(
    "Accept" -> "application/xml, text/html, text/plain, application/json, */*",
    "Accept-Encoding" -> "gzip, deflate")

  val theBody : Body = StringBody("Farty Towels!")

  val theScenarioBuilder = scenario("Scenario1")
    .exec(
      http("Login and Post Data")
        .post("/computers")
        .body(theBody)
        .headers(theCommonHeaders)
        .queryParam("login", "admin")
        .queryParam("password", "secret")
    )

  setUp(
    theScenarioBuilder.inject(atOnceUsers(1))
  ).protocols(theHttpProtocolBuilder)
}
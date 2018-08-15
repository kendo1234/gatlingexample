package gatlingsimulations

import io.gatling.core.Predef._
import io.gatling.http.Predef._
import io.gatling.http.config.HttpProtocolBuilder.toHttpProtocol
import io.gatling.http.request.builder.HttpRequestBuilder.toActionBuilder

/**
  * Example Gatling load test that sends two HTTP requests to the same URL.
  */
class HttpSimulation1 extends Simulation {

  before {
    println("***** Simulation 1 Begins *****")

    /*
     * A HTTP protocol builder is used to specify common properties of request(s) to be sent,
     * for instance the base URL, HTTP headers that are to be enclosed with all requests etc.
     */
    val theHttpProtocolBuilder = http
      .baseURL("https://computer-database.gatling.io")

    /*
 * A scenario consists of one or more requests. For instance logging into a e-commerce
 * website, placing an order and then logging out.
 * One simulation can contain many scenarios.
 */
    /* Scenario1 is a name that describes the scenario. */
    val theScenarioBuilder = scenario("Scenario1")
      .exec(
        /* myRequest1 is a name that describes the request. */
        http("myRequest1")
          .get("/")
      )

    /*
 * Define the load simulation.
 * Here we can specify how many users we want to simulate, if the number of users is to increase
 * gradually or if all the simulated users are to start sending requests at once etc.
 * We also specify the HTTP protocol builder to be used by the load simulation.
 */
    setUp(
      theScenarioBuilder.inject(atOnceUsers(1))
    ).protocols(theHttpProtocolBuilder)
  }
}
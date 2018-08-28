package gatlingsimulations

import io.gatling.core.Predef._
import io.gatling.http.Predef._
import io.gatling.http.request.builder.HttpRequestBuilder.toActionBuilder

class ObjectPatternSimulation extends Simulation
{


  //define set values in objects, to then pass into scenarios
  object Search {

    val search = exec(http("Home") // let's give proper names, as they are displayed in the reports
      .get("/"))
      .pause(7)
      .exec(http("Search")
        .get("/computers?f=macbook"))
      .pause(2)
      .exec(http("Select")
        .get("/computers/6"))
      .pause(3)
  }

  object Browse {

    val browse = ???
  }

  object Edit {

    val edit = ???
  }

  //starting building scenarios

  val httpConf = http // 4
    .baseURL("http://computer-database.gatling.io") // 5
    .acceptHeader("text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8") // 6
    .doNotTrackHeader("1")
    .acceptLanguageHeader("en-US,en;q=0.5")
    .acceptEncodingHeader("gzip, deflate")
    .userAgentHeader("Mozilla/5.0 (Windows NT 5.1; rv:31.0) Gecko/20100101 Firefox/31.0")

  val scenario1 = scenario("BasicSimulation") // 7
    .exec(http("request_1") // 8
    .get("/")) // 9
    .pause(5) // 10

//these scenarios use the object pattern
  val scn = scenario("Scenario Name").exec(Search.search, Browse.browse, Edit.edit)

  val users = scenario("Users").exec(Search.search, Browse.browse)

  val admins = scenario("Admins").exec(Search.search, Browse.browse, Edit.edit)



  setUp( // 11
    scn.inject(atOnceUsers(1)) // 12
  ).protocols(httpConf) // 13
}


var axios = require("axios");
var cheerio = require("cheerio");


var scrape = function() {
  // Scrape the NYTimes website
  return axios.get("http://www.nytimes.com").then(function(res) {
    var $ = cheerio.load(res.data);
    // empty array 
    var articles = [];

    // loop through the themes of each article
    $(".theme-summary").each(function(i, element) {
    //grabbing the child and the text in each one
      var head = $(this)
        .children(".story-heading")
        .text()
        .trim();

      // Grab the URL of the article
      var url = $(this)
        .children(".story-heading")
        .children("a")
        .attr("href");

      //article summary 
      var sum = $(this)
        .children(".summary")
        .text()
        .trim();

        // Initialize an object we will push to the articles array

        var dataToAdd = {
          headline: headNeat,
          summary: sumNeat,
          url: url
        };

        articles.push(dataToAdd);
    });
    return articles;
  });
};

// Export the function, so other files in our backend can use it
module.exports = scrape;

module.exports = function (eleventyConfig) {
  // Copy static assets straight through to the output
  eleventyConfig.addPassthroughCopy("src/assets");
  eleventyConfig.addPassthroughCopy({ "src/CNAME": "CNAME" });

  // Collection: all books, sorted by series then order
  eleventyConfig.addCollection("books", function (collectionApi) {
    return collectionApi
      .getFilteredByTag("book")
      .sort((a, b) => (a.data.order || 0) - (b.data.order || 0));
  });

  // Filter: group a book list by series slug
  eleventyConfig.addFilter("whereSeries", function (books, seriesSlug) {
    return (books || []).filter((b) => b.data.series === seriesSlug);
  });

  // Filter: readable date
  eleventyConfig.addFilter("year", () => new Date().getFullYear());

  return {
    dir: {
      input: "src",
      output: "_site",
      includes: "_includes",
      data: "_data",
    },
    markdownTemplateEngine: "njk",
    htmlTemplateEngine: "njk",
    templateFormats: ["njk", "md", "html"],
    pathPrefix: "/",
  };
};

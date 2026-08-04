module.exports = function(eleventyConfig) {
  // Return configuration options
  return {
    dir: {
      input: "src",       // Tells Eleventy to read templates out of your src folder
      output: "_site",    // Tells Eleventy to build the static pages into _site
      includes: "_includes" // Tells Eleventy to look inside src/_includes for partials/layouts
    }
  };
};

Template.github.helpers({
getCommitsMethod: function() {
  var commitResults = ReactiveMethod.call("githubRepoCommits");
  console.log(commitResults);
    return commitResults;
},
getRepoMethod: function() {
  var repoResults = ReactiveMethod.call("githubRepo");
  console.log(repoResults);
    return repoResults;
},
githubLatest: function() {
  var latestResults = ReactiveMethod.call("githubLatest");
  console.log(latestResults);
    return latestResults;
},
githubReadme: function() {
  var readmeResults = ReactiveMethod.call("githubReadme");
  console.log(readmeResults);
    return readmeResults;
},
githubReleases: function() {
  var releasesResults = ReactiveMethod.call("githubReleases");
  console.log(releasesResults);
    return releasesResults;
},

});

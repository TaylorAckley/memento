Template.github.helpers({
    getCommits: function() {
        return HTTP.call("GET", "https://api.github.com/repos/TaylorAckley/memento/commits", function(error, result){
          if (error) {
            console.log(error);
            return error;
          }
          else {
            Session.set("getCommits", result.data);
            return JSON.parse(result.data);

          }
        });
},

showGetCommits: function() {
  return Session.get("getCommits");
}
});

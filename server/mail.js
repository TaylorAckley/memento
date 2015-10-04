Meteor.startup(function () {
  smtp = {
    username: 'taylorackley@gmail.com',
    password: Meteor.settings.private.mandrillKey,
    server:   'smtp.mandrillapp.com',
    port: 587
 };

  process.env.MAIL_URL = 'smtp://' + encodeURIComponent(smtp.username) + ':' + encodeURIComponent(smtp.password) + '@' + encodeURIComponent(smtp.server) + ':' + smtp.port;
});

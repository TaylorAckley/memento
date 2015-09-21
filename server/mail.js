Meteor.startup(function () {
  smtp = {
    username: 'taylorackley@gmail.com',
    password: 'TWhSJsop9O87zla-hFDmLg',
    server:   'smtp.mandrillapp.com',
    port: 587
 };

  process.env.MAIL_URL = 'smtp://' + encodeURIComponent(smtp.username) + ':' + encodeURIComponent(smtp.password) + '@' + encodeURIComponent(smtp.server) + ':' + smtp.port;
});


Router.plugin('seo', {
  defaults: {
    title: 'Memento',                 // Will apply to <title>, Twitter and OpenGraph.
    suffix: 'Open Source Note Taking App',
    separator: '-',

    description: 'Open Source Note Taker for creating Todos',        // Will apply to meta, Twitter and OpenGraph.
    image: 'http://lorempixel.com/200/200/',   // Will apply to Twitter and OpenGraph.

    meta: {
      keywords: ['memento', 'todo']
    },

    twitter: {
      card: 'Reminder',
      creator: '@taylorackley'
      // etc.
    },

    og: {
      site_name: 'Memento',
      image: 'http://lorempixel.com/200/200/'
      // etc.
    }
  }
});

Router.onBeforeAction(function() {

  if (! Meteor.userId()) {
    this.redirect('/#auth');
  }
  else {
    this.next();
  }
},

{
  only: ['profile', 'home']
});

Router.onBeforeAction(function() {
  if (Meteor.userId()) {
    this.redirect('home');
  }
  else {
    this.next();
  }
},

{
  only: ['/']
});

Router.route('app',  {
  path: '/home',
  seo: {
      title: {
        text: 'Memento',
        suffix: 'Home',
        separator: '-'
      }
    }
});

Router.route('register', {
    path: '/register',
    seo: {
        title: {
          text: 'Memento',
          suffix: 'Register',
          separator: '-'
        }
      }
});

Router.route('login', {
  path: '/',
  seo: {
      title: {
        text: 'Memento',
        suffix: 'Login',
        separator: '-'
      }
    }
  }
);

Router.route('profile', {
    path: '/profile',
    seo: {
        title: {
          text: 'Memento',
          suffix: 'Profile',
          separator: '-'
        }
      }

});

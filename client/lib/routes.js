Router.configure({
  loadingTemplate: 'loading'
});


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
  only: ['profile', 'app', 'details']
});

Router.onBeforeAction(function() {
  if (Meteor.userId()) {
    this.redirect('app');
  }
  else {
    this.next();
  }
},

{
  only: ['login']
});

Router.route('app',  {
  path: '/home',
  seo: {
      title: {
        text: 'Memento',
        suffix: 'Home',
        separator: '-'
      }
    },
    waitOn: function() {
      return theNotes;
    },
    action: function(){

 if ( this.ready() ){
  this.render();
}
else {
  this.render('loading');
}
}
});

Router.route('details',  {
  path: '/details/:_id/:title',
  data: function() { return Notes.findOne(this.params._id); },
  waitOn: function() {
    return IRLibLoader.load('https://maps.googleapis.com/maps/api/js?libraries=places');
  },
  seo: {
      title: {
        text: 'Memento',
        suffix: 'Details',
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

Router.route('verifyEmailToken', {
    path: '/verifyEmailToken/:userToken',
    data: function() {
      return this.params.userToken; },
    seo: {
        title: {
          text: 'Memento',
          suffix: 'Veryify Your Email',
          separator: '-'
        }
      }

});

Router.route('resetPassword', {
    path: '/resetPassword/:userToken',
    data: function() {
      return this.params.userToken; },
    seo: {
        title: {
          text: 'Memento',
          suffix: 'Reset Password',
          separator: '-'
        }
      }

});



Router.route('verifyEmail', {
    path: '/verifyEmail',
    seo: {
        title: {
          text: 'Memento',
          suffix: 'Veryify Your Email',
          separator: '-'
        }
      }

});

Router.route('github', {
    path: '/github',
    seo: {
        title: {
          text: 'Memento',
          suffix: 'Github',
          separator: '-'
        }
      }

});

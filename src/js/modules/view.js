import View from '../classes/view-class';

export default {
  name: 'view',
  params: {
    viewClass: 'view',
    viewMainClass: 'view-main',
    viewsClass: 'views',
    // Swipe Back
    swipeBackPage: true,
    swipeBackPageAnimateShadow: true,
    swipeBackPageAnimateOpacity: true,
    swipeBackPageActiveArea: 30,
    swipeBackPageThreshold: 0,
  },
  class: {
    View,
  },
  instance: {
    views: [],
    addView(el, params) {
      const app = this;
      return new View(app, el, params);
    },
  },
};

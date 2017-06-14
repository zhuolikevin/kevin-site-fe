// For Debug Mode
Vue.config.devtools = true;

// eslint-disable-next-line no-unused-vars
var app = new Vue({
  el: '#app',
  data: function() {
    return {
      photoList: []
    };
  },
  ready: function() {
    this.getPhotoList();
  },
  methods: {
    getPhotoList: function() {
      var _this = this;
      $.ajax({
        method: 'GET',
        url: '/api/photos/get_all_photos/',
        success: function(resp) {
          if (!resp || resp.status !== 'success') {
            Materialize.toast(resp.err, 3000);
            return;
          }
          _this.photoList = resp.data;
          Vue.nextTick(function() {
            var $grid = $('.masonry-grid').imagesLoaded(function() {
              $grid.masonry({
                itemSelector: '.grid-item',
                columnWidth: '.grid-sizer',
                percentPosition: true
              });
            });
            $('.materialboxed').materialbox();
          });
        }
      });
    }
  }
});

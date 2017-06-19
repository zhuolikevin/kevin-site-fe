// For Debug Mode
Vue.config.devtools = true;

// eslint-disable-next-line no-unused-vars
var app = new Vue({
  el: '#app',
  data: function() {
    return {
      firstName: '',
      lastName: '',
      email: '',
      message: ''
    };
  },
  methods: {
    onSubmitFormClick: function() {
      var errorPart = [];
      if (!this.firstName) {
        errorPart.push('first name');
      }
      if (!this.lastName) {
        errorPart.push('last name');
      }
      if (!this.email) {
        errorPart.push('email');
      }
      if (!this.message) {
        errorPart.push('message');
      }
      if (errorPart.length > 0) {
        var errorMsg = 'Please fill out your ' + errorPart.join(', ') + '.';
        Materialize.toast(errorMsg, 3000);
        return;
      }
      var _this = this;
      $.ajax({
        method: 'POST',
        url: '/api/contact_form/',
        data: {
          first_name: this.firstName,
          last_name: this.lastName,
          email: this.email,
          message: this.message
        },
        success: function(resp) {
          if (!resp || resp.status !== 'success') {
            Materialize.toast(resp.err, 3000);
            return;
          }
          _this.firstName = '';
          _this.lastName = '';
          _this.email = '';
          _this.message = '';
          Materialize.toast('Successfully sent your message to Kevin!');
        }
      });
    }
  }
});

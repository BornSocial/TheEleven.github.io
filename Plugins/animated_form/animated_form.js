$(document).on('ready ajaxComplete', function() {

  //Using default simple_form classes
  var fields = $('.form-control'),
  form_group = $('.form-group');


  //Check all fields on load
  fields.each(function() {
    if(this.value.length) {
      $(this).parents('.form-group').addClass('filled');
    }
  });

  //Check if form is filled on keyup
  //Check if form is field on change (for autocomplete etc)
  fields.on("keyup change", function() {
    if(this.value.length) {
      $(this).parents('.form-group').addClass('filled');
    } else {
      $(this).parents('.form-group').removeClass('filled');
    }
  });

  //Animate field when it's selected
  fields.on('focus', function() {
    form_group.removeClass('selected');
    $(this).parents('.form-group').addClass('selected');
  });
  //Animate field when it's deselected
  //Check length incase of datepicker / js change
  fields.on('focusout', function() {
    if(this.value.length) {
      form_group.removeClass('selected');
      $(this).parents('.form-group').addClass('filled');
    } else {
      form_group.removeClass('selected');
      $(this).parents('.form-group').removeClass('filled');
    }
  });

}); //END document ready ajaxCompelete
$(function() {
    $('.php-email-form').submit(function(e) {
      e.preventDefault();
  
      var form = $(this);
      var post_url = form.attr('action');
      var form_data = form.serialize();
  
      if (!form.valid()) {
        return; 
      }
  
      var hasEmptyFields = false;
      form.find('input, textarea').each(function() {
        if ($(this).val().trim() === '') {
          hasEmptyFields = true;
          return false; 
        }
      });
  
      if (hasEmptyFields) {
        form.find('.loading').hide();
        form.find('.sent-message').hide();
        form.find('.error-message').text('Veuillez remplir tous les champs du formulaire.').show();
        return;
      }
  
      form.find('.loading').show();
      form.find('.error-message').hide();
      form.find('.sent-message').hide();
  
      $.ajax({
        type: 'POST',
        url: post_url,
        data: form_data,
        success: function(response) {
          if (response.includes('envoyé')) {
            form.find('.loading').hide();
            form.find('.sent-message').show().text(response);
            form[0].reset();
          } else {
            form.find('.loading').hide();
            form.find('.error-message').show().text(response);
          }
        },
        error: function() {
          form.find('.loading').hide();
          form.find('.error-message').show().text('Une erreur s\'est produite lors de l\'envoi du message. Veuillez réessayer.');
        }
      });
    });
  });
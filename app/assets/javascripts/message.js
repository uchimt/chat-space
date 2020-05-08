$(function() {
  function buildHTML(message){
    if (message.image) {
      var html = `<div class="message">
                    <div class="message__info">
                      <div class="message__info--user-name">
                        ${message.user_name} 
                      </div>
                      <div class="message__info--date">
                        ${message.created_at} 
                      </div>
                    </div>
                    <p class="message__text">
                      ${message.text}
                    </p>
                    <img class="message__image" src = ${message.image} >
                  </div>`
    } else { 
      var html = `<div class="message">
                    <div class="message__info">
                      <div class="message__info--user-name">
                        ${message.user_name} 
                      </div>
                      <div class="message__info--date">
                        ${message.created_at} 
                      </div>
                    </div>
                    <p class="message__text">
                      ${message.text} 
                    </p>
                  </div>`
    }; 
    return html;
  }
  $('#new_message').on('submit',function(e){ 
    e.preventDefault();
    var formData = new FormData(this)
    var url = $(this).attr('action')
    $.ajax({ 
      url: url,
      type: 'POST',
      data: formData,
      dataType: 'json',
      processData: false,
      contentType: false
    })
    .done(function(data){
      var html = buildHTML(data);
      $('.message-list').append(html);
      $('.message-list').animate({ scrollTop: $('.message-list')[0].scrollHeight});
      $('form')[0].reset();
      $('.input__submit').prop('disabled', false);
    })
    .fail(function(){
      alert('メッセージ送信に失敗しました');
    });
  });
});
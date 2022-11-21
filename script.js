today = new Date();

let copyright_year = document.getElementById('year');

copyright_year.textContent=today.getFullYear();

$(function () {
    var includes = $('[include]')
    $.each(includes, function () {
      var file = 'views/' + $(this).data('include') + '.html'
      $(this).load(file)
    })
  })
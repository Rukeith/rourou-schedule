$(document).ready(function () {

  $("#cal").click(function() {
    const fromTime = $('#from-time').val();
    const toTime = $('#to-time').val();
    const fromMoment = moment(`2017-12-31 ${fromTime}`)
    const toMoment = moment(`2017-12-31 ${toTime}`)
    const result = toMoment.diff(fromMoment, 'hours', true)
    $('#result').text(result);
  });
});
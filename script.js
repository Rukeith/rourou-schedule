$("#cal").click(function() {
  const from = $('#from-date').val();
  const fromTime = $('#from-time').val();
  const to = $('#to-date').val();
  const toTime = $('#to-time').val();
  const fromMoment = moment(`${from} ${fromTime}`)
  const toMoment = moment(`${to} ${toTime}`)
  const kk = toMoment.diff(fromMoment, 'hours')
  $('#result').text(kk);
});
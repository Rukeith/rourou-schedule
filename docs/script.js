$(document).ready(function () {

  $(".cal-btn").click(function() {
    const dayChecked = $("#cal-day").prop("checked");
    const nightChecked = $("#cal-night").prop("checked");

    let dayResult = 0;
    if (dayChecked) {
      const dayStartHour = $('.day .start .hour').val();
      const dayStartMin = $('.day .start .min').val();
      const dayEndHour = $('.day .end .hour').val();
      const dayEndMin = $('.day .end .min').val();
      const dayStartMoment = moment(`2017-12-31 ${dayStartHour}:${dayStartMin}`);
      const dayEndMoment = moment(`2017-12-31 ${dayEndHour}:${dayEndMin}`);
      dayResult = dayEndMoment.diff(dayStartMoment, 'hours', true);
    }

    let nightResult = 0;
    if (nightChecked) {
      const nightStartHour = $('.night .start .hour').val();
      const nightStartMin = $('.night .start .min').val();
      const nightEndHour = $('.night .end .hour').val();
      const nightEndMin = $('.night .end .min').val();
      const nightStartMoment = moment(`2017-12-31 ${nightStartHour}:${nightStartMin}`);
      const nightEndMoment = moment(`2017-12-31 ${nightEndHour}:${nightEndMin}`);
      nightResult = nightEndMoment.diff(nightStartMoment, 'hours', true);
    }

    const result = Math.abs(nightResult) + Math.abs(dayResult);
    $('#result').text(result);
  });
});
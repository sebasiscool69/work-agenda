$('#currentDay').text(moment().format('dddd, MMMM Do'));

function timedSchedule() {
    var currentTime = moment().hours();

    $('.time-block').each(function() {
      var timeSlot = parseInt(
        $(this)
          .attr('id')
          .split('-')[1]
      );

      if (timeSlot < currentTime) {
        $(this).addClass('past');
      } else if (timeSlot === currentTime) {
        $(this).removeClass('past');
        $(this).addClass('present');
      } else {
        $(this).removeClass('past');
        $(this).removeClass('present');
        $(this).addClass('future');
      }
    });
  }

  timedSchedule();
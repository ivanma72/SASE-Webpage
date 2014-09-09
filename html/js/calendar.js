$(document).ready(function() {

    // page is now ready, initialize the calendar...

    $('#calendar').fullCalendar({
        // put your options and callbacks here
        header: {
        	left: 'title',
        	center: '',
        	right: 'prev, month, agendaWeek, next'
      	},

      	fixedWeekCount: false,
      	aspectRatio: 1.5
    })

});
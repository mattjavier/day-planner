let timeBlocks = [
  {
    time: 9,
    meridies: 'am',
    isDone: false
  },
  {
    time: 10,
    meridies: 'am',
    isDone: false
  },
  {
    time: 11,
    meridies: 'am',
    isDone: false
  }, 
  {
    time: 12,
    meridies: 'pm',
    isDone: false
  },
  {
    time: 13,
    meridies: 'pm',
    isDone: false
  },
  {
    time: 14,
    meridies: 'pm',
    isDone: false
  },
  {
    time: 15,
    meridies: 'pm',
    isDone: false
  },
  {
    time: 16,
    meridies: 'pm',
    isDone: false
  },
  {
    time: 17,
    meridies: 'pm',
    isDone: false
  }
]

$('#currentDay').text(moment().format('dddd, MMMM Do'))

for (let i = 0; i < timeBlocks.length; i++) {
  // if hour has already past
  if (moment().hour() > timeBlocks[i].time) {
    $(`#text${i+1}`).addClass('past')
  } else if (moment().hour() < timeBlocks[i].time) {
    // if hour has yet to come
    $(`#text${i+1}`).addClass('future')
  } else {
    // if it is the current hour
    $(`#text${i+1}`).addClass('present')
  }
}

function showSchedule() {
  let schedule = JSON.parse(localStorage.getItem('schedule')) || []

  
}

showSchedule()


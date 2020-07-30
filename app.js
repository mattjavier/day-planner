let timeBlocks = [
  {
    time: 9,
    textVal: '',
    formatted: 'nineAM'
  },
  {
    time: 10,
    textVal: '',
    formatted: 'tenAM'
  },
  {
    time: 11,
    textVal: '',
    formatted: 'elevenAM'
  }, 
  {
    time: 12,
    textVal: '',
    formatted: 'twelvePM'
  },
  {
    time: 13,
    textVal: '',
    formatted: 'onePM'
  },
  {
    time: 14,
    textVal: '',
    formatted: 'twoPM'
  },
  {
    time: 15,
    textVal: '',
    formatted: 'threePM'
  },
  {
    time: 16,
    textVal: '',
    formatted: 'fourPM'
  },
  {
    time: 17,
    textVal: '',
    formatted: 'fivePM'
  }
]

function fillTimeBlocks() {

  // set current day
  $('#currentDay').text(moment().format('dddd, MMMM Do'))

  // fill colored time blocks
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
}

function showSchedule() {
  fillTimeBlocks()

  let schedule = JSON.parse(localStorage.getItem('schedule')) || []
  // render saved data onto time blocks
  for (let i = 0; i < schedule.length; i++) {
    $(`#${schedule[i].timeBlock}`).find('textarea').val(schedule[i].text)
  }
}

function saveBlock(text, block) {
  // save schedule back to local storage
  let schedule = JSON.parse(localStorage.getItem('schedule')) || []
  schedule.push({text: text, timeBlock: block})
  
  localStorage.setItem('schedule', JSON.stringify(schedule))
}

$(document).ready(function () {

  showSchedule()

  $('.saveBtn').click(function () {
    let tblock = $(this).parent().attr('id')
    let newEvent = $(this).siblings('.description').val()
    saveBlock(newEvent, tblock)
  })
})



import EventSource from 'eventsource'
global.EventSource = window.EventSource = EventSource
global.location = window.location = { protocol: 'https:' }

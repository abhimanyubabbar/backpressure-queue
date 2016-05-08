// BackPressure: function in which the main application
// creates a backpressure on the reader of a stream
// to let them know to slow down. In mean time the application
// handles the task and informs the stream to resume the loading
// of data.
function BackPressure(){
}

module.exports = BackPressure;

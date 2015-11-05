// Interactiveness now
(function() {
    var clock = document.querySelector('digiclock');
    var pad = function(x) {
        return x < 10 ? '0' + x : x;
    };

    var ticktock = function() {
        var d = new Date();

        var h = pad(d.getHours());
        var m = pad(d.getMinutes());
        var s = pad(d.getSeconds());
        var current_date = d.toDateString();

        var current_time = [h, m, s].join(':');

        var clock_date = [current_time, current_date].join("<br>");

        clock.innerHTML = clock_date;

    };

    ticktock();
    // Calling ticktock() every 1 second
    setInterval(ticktock, 1000);
}());

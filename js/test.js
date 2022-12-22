function readTextFile(file, callback) {
    var rawFile = new XMLHttpRequest();
    rawFile.overrideMimeType("application/json");
    rawFile.open("GET", file, true);
    rawFile.onreadystatechange = function () {
        if (rawFile.readyState === 4 && rawFile.status == "200") {
            callback(rawFile.responseText);
        }
    }
    rawFile.send(null);
}

//usage:
readTextFile("/course.json", function (text) {
    var data = JSON.parse(text);
    if (data !== null) {
        var foundation = data[0];
        var major = data[1];
        var core = major['sub'][0];
        var coreCourses = core['courses'];
        var optional = major['sub'][1];
        var optionalCourses = optional['courses'];
        console.log(data);
    } else {
        console.log('empty');
    }


});




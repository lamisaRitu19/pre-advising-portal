const viewCapacity = (foundationCourses, coreCourses, optionalCourses) => {
    const capacityID = document.getElementById('capacityID').value.toUpperCase();
    const capacityExisting = document.getElementById('capacityExisting');
    const capacityRequired = document.getElementById('capacityRequired');

    let capExist = '';
    let capReq = '';

    foundationCourses.forEach(sub => {
        sub.courses.forEach(sC => {
            if (sC.courseId === capacityID) {
                console.log(sC)
                capExist = sC.seatCapacityGiven;
                capReq = sC.seatCapacityRequired;

            }
        })
    });

    coreCourses.forEach(course => {
        if (capacityID === course.courseId) {
            capExist = course.seatCapacityGiven;
            capReq = course.seatCapacityRequired;
        }
    });

    optionalCourses.forEach(course => {
        if (capacityID === course.courseId) {
            capExist = course.seatCapacityGiven;
            capReq = course.seatCapacityRequired;
        }
    });


    capacityExisting.innerText = capExist;
    capacityRequired.innerText = capReq;
}

const viewCapacityBtn = () => {
    // const capacityID = document.getElementById('capacityID').value;

    readTextFile("/course.json", function (text) {
        var data = JSON.parse(text);
        if (data !== null) {
            var foundation = data[0];
            var sub = foundation['sub']; //number of subtype objects
            var sub_type = sub[0]; //0th sub type object
            var sub_type_courses = sub_type['courses'];// 0th subtype object courses
            var sub_type_course = sub_type_courses[2];
            var major = data[1];
            var core = major['sub'][0];
            var coreCourses = core['courses'];
            var optional = major['sub'][1];
            var optionalCourses = optional['courses'];
            viewCapacity(sub, coreCourses, optionalCourses);
        } else {
            console.log('empty');
        }
    });

}


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
const showCourses = (foundationCourses, coreCourses, optionalCourses) => {
    const foundation = document.getElementById('foundation');
    const core = document.getElementById('core');
    const optional = document.getElementById('optional');

    foundationCourses.forEach(course => {
        const header = document.createElement('h4');
        header.innerText = course.sub_type;
        foundation.appendChild(header);

        const div = document.createElement('div');
        div.classList.add("courses");
        course['courses'].forEach(sCourses => {
            const divAddCourses = document.createElement('div');
            divAddCourses.innerHTML = `
            <div class="add-course">
                <input type="checkbox" name="" id="" />
                <div class="course">
                    <span class="course-code" id="courseCode">${sCourses.courseId}</span>
                    <span id="courseTitle">${sCourses.courseTitle}</span>
                    <span id="courseCredit">${sCourses.credit}</span>
                </div>
            </div>                
        `
            div.appendChild(divAddCourses);
            if (sCourses.prerequisite.length > 0) {
                sCourses['prerequisite'].forEach(pre => {
                    const preDiv = document.createElement('div');
                    // console.log(sCourses.courseTitle + " " + pre.pre_courseId);
                    preDiv.innerHTML =
                        `<div class="prerequisite">
                        <span class="course-code">${pre['pre_courseId']}</span>
                        <span>${pre['pre_courseTitle']}</span>
                    </div>`
                    div.appendChild(preDiv);
                })
            }


        });
        foundation.appendChild(div);
    });

    coreCourses.forEach(course => {
        const div = document.createElement('div');
        div.classList.add("courses");

        const divAddCourses = document.createElement('div');
        divAddCourses.innerHTML = `
            <div class="add-course">
                <div class="course">
                    <span class="course-code" id="courseCode">${course.courseId}</span>
                    <span id="courseTitle">${course.courseTitle}</span>
                    <span id="courseCredit">${course.credit}</span>
                </div>
            </div>                
        `
        div.appendChild(divAddCourses);

        course['prerequisite'].forEach(pre => {
            const preDiv = document.createElement('div');

            preDiv.innerHTML =
                `<div class="prerequisite">
                        <span class="course-code">${pre['pre_courseId']}</span>
                        <span>${pre['pre_courseTitle']}</span>
                    </div>`
            div.appendChild(preDiv);
        })

        core.appendChild(div);
    });

    optionalCourses.forEach(course => {
        const div = document.createElement('div');
        div.classList.add("courses");

        const divAddCourses = document.createElement('div');
        divAddCourses.innerHTML = `
            <div class="add-course">
                <input type="checkbox" name="" id="" />
                <div class="course">
                    <span class="course-code" id="courseCode">${course.courseId}</span>
                    <span id="courseTitle">${course.courseTitle}</span>
                    <span id="courseCredit">${course.credit}</span>
                </div>
            </div>                
        `
        div.appendChild(divAddCourses);

        course['prerequisite'].forEach(pre => {
            const preDiv = document.createElement('div');

            preDiv.innerHTML =
                `<div class="prerequisite">
                        <span class="course-code">${pre['pre_courseId']}</span>
                        <span>${pre['pre_courseTitle']}</span>
                    </div>`
            div.appendChild(preDiv);
        })

        optional.appendChild(div);
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

//usage:
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
        console.log(data);

        showCourses(sub, coreCourses, optionalCourses);
    } else {
        console.log('empty');
    }
});


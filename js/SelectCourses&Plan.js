const editSelectedCourses = () => {
    const selectedCourseButtons = document.getElementById('selectedCourseButtons');
    selectedCourseButtons.style.display = 'flex';

    const crossImg = document.getElementsByClassName('crossImg');
    console.log("crossImage " + crossImg);

    for (const cI of crossImg) {
        cI.style.display = 'inline';
    }


    let checkboxes = document.getElementsByClassName('checkbox');
    for (const checkbox of checkboxes) {
        console.log(checkbox);
        checkbox.style.display = 'inline';
    }
}

const cancel = () => {
    const selectedCourseButtons = document.getElementById('selectedCourseButtons');
    selectedCourseButtons.style.display = 'none';

    const crossImg = document.getElementsByClassName('crossImg');
    for (const cI of crossImg) {
        cI.style.display = 'none';
    }
}
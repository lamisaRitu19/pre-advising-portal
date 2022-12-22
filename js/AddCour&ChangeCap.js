const saveAddCourse = () => {
    document.getElementById('notify').style.display = 'block';
    console.log('hi')
}

document.getElementById('crossBtn').addEventListener('click', () => {
    document.getElementById('notify').style.display = 'none';
})
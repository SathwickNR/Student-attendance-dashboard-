function saveAttendance() {
    const checkboxes = document.querySelectorAll('.attendance-checkbox');
    let presentCount = 0;
    let absentCount = 0;

    checkboxes.forEach((checkbox) => {
        if (checkbox.checked) {
            presentCount++;
        } else {
            absentCount++;
        }
    });

    // Display attendance summary
    const summaryDiv = document.getElementById('attendance-summary');
    summaryDiv.innerHTML = '<h2>Attendance Summary</h2>';
    summaryDiv.innerHTML += `<p>Present: ${presentCount}</p>`;
    summaryDiv.innerHTML += `<p>Absent: ${absentCount}</p>`;
}

const logoutBtn = document.querySelector(".logout-btn")

logoutBtn.addEventListener("click",()=>{
    window.location.replace("logout.html")
})

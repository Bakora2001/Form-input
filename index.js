document.getElementById("formInput").addEventListener("submit", function(event) {
    event.preventDefault();
    const score = parseInt(document.getElementById("score").value);
    let gradeMarksclear
     = '';
    if (score >= 70) {
      gradeMarks = 'A';
    } else if (score >= 60) {
      gradeMarks = 'B';
    } else if (score >= 50) {
      gradeMarks = 'C';
    } else if (score >= 40) {
      gradeMarks = 'D';
    } else {
      gradeMarks = 'E';
    }
    document.getElementById("output").textContent = `My output grade is: ${gradeMarks}`;
  });
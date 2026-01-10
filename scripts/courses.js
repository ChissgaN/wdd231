const courses = [
  { name: "WDD131", credits: 3, completed: true },
  { name: "WDD132", credits: 3, completed: false },
  { name: "CSE110", credits: 4, completed: true }
];

function displayCourses(filter = "all") {
  const container = document.getElementById("courses-container");
  container.innerHTML = "";

  const filtered = courses.filter(c => 
    filter === "all" || c.name.includes(filter)
  );

  let totalCredits = 0;

  filtered.forEach(course => {
    totalCredits += course.credits;
    const div = document.createElement("div");
    div.textContent = `${course.name} - ${course.credits} créditos`;
    if(course.completed) div.style.fontWeight = "bold";
    container.appendChild(div);
  });

  const total = document.createElement("p");
  total.textContent = `Total de créditos: ${totalCredits}`;
  container.appendChild(total);
}

displayCourses();
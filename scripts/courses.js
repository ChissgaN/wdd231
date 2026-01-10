const courses = [
  { name: "WDD131", credits: 3, completed: true },
  { name: "WDD132", credits: 3, completed: false },
  { name: "CSE110", credits: 4, completed: true }
];

function displayCourses(filter = "all") {
  const container = document.getElementById("courses-container");
  container.innerHTML = "";

  const filtered = courses.filter(course =>
    filter === "all" || course.name.includes(filter)
  );

  let totalCredits = 0;

  filtered.forEach(course => {
    totalCredits += course.credits;

    const div = document.createElement("div");
    div.classList.add("course-card");
    if (course.completed) div.classList.add("completed");
    div.textContent = `${course.name} - ${course.credits} credits`;

    container.appendChild(div);
  });

  const total = document.createElement("p");
  total.classList.add("total-credits");
  total.textContent = `Total credits: ${totalCredits}`;
  container.appendChild(total);
}

document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("btn-all").addEventListener("click", () => displayCourses("all"));
  document.getElementById("btn-wdd").addEventListener("click", () => displayCourses("WDD"));
  document.getElementById("btn-cse").addEventListener("click", () => displayCourses("CSE"));

  displayCourses();
});
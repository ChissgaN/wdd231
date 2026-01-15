const courses = [
  { name: "WDD131", credits: 3, completed: true },
  { name: "WDD132", credits: 3, completed: false },
  { name: "CSE110", credits: 4, completed: true }
];

const container = document.getElementById("courses-container");
const totalCreditsEl = document.getElementById("total-credits");

function displayCourses(filter = "all") {
  container.innerHTML = "";

  const filteredCourses = courses.filter(course => {
    if (filter === "all") return true;
    return course.name.startsWith(filter);
  });

  filteredCourses.forEach(course => {
    const div = document.createElement("div");
    div.classList.add("course-card");

    if (course.completed) {
      div.classList.add("completed");
    }

    div.textContent = `${course.name} - ${course.credits} credits`;
    container.appendChild(div);
  });

  const totalCredits = filteredCourses.reduce(
    (total, course) => total + course.credits,
    0
  );

  totalCreditsEl.textContent = `Total Credits: ${totalCredits}`;
}

document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("btn-all").addEventListener("click", () => {
    displayCourses("all");
  });

  document.getElementById("btn-wdd").addEventListener("click", () => {
    displayCourses("WDD");
  });

  document.getElementById("btn-cse").addEventListener("click", () => {
    displayCourses("CSE");
  });

  displayCourses();
});

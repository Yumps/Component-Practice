const createStudentComponent = students =>
  `<div class="student">
            ${Element("h1", students.name, "xx-large passing")}
            ${Element("section", subject, "bordered dashed section--padded")}
            ${Element("aside", info, "pushRight")}
        </div>`;

// Then store a reference to an existing HTML element
const studentContainer = document.querySelector("#container");

const score = (grade, student) => {
  studentComponent = `<div class="student">
        <h1 class="xx-large ${grade}">${student.name}</h1>
        <section class="bordered dashed section--padded">${
          student.subject
        }</section>
        <aside class="pushRight">${student.info}</aside>
      </div>`;
  studentContainer.innerHTML += studentComponent;
};

// Update its contents with the return value of the function
students.forEach(student => {
  let studentComponent = "";
  if (student.score >= 60) {
    score("passing", student);
  } else {
    score("failing", student);
  }
});

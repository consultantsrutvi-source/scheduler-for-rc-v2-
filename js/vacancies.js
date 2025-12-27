const vacancies = [
  {
    id: "VAC201",
    college: "ABC PU College",
    city: "Bengaluru",
    subject: "Physics",
    level: "NEET",
    salary: "₹90,000",
    urgency: "Immediate",
    faculty: 2,
    status: "Open"
  }
];

const table = document.getElementById("vacancyTable");

function renderTable() {
  table.innerHTML = "";

  vacancies.forEach(v => {
    table.innerHTML += `
      <tr>
        <td>${v.id}</td>
        <td>${v.college}</td>
        <td>${v.city}</td>
        <td>${v.subject}</td>
        <td>${v.level}</td>
        <td>${v.salary}</td>
        <td>${v.urgency}</td>
        <td>${v.faculty}</td>
        <td><span class="status ${v.status.toLowerCase()}">${v.status}</span></td>
        <td>
          <span class="action-btn">✏️</span>
          <span class="action-btn">🗑</span>
        </td>
      </tr>
    `;
  });
}

document.addEventListener("DOMContentLoaded", () => {
  renderTable();

  // load places
  const list = document.getElementById("placesList");
  PLACES.forEach(p => {
    const o = document.createElement("option");
    o.value = p;
    list.appendChild(o);
  });
});
google.script.run.withSuccessHandler(renderVacancies).getVacancies();

function renderVacancies(data) {
  const tbody = document.getElementById("vacancyTable");
  tbody.innerHTML = "";

  data.forEach(v => {
    const tr = document.createElement("tr");
    tr.innerHTML = `
      <td>${v.VacancyID}</td>
      <td>${v.CollegeName}</td>
      <td>${v.City}</td>
      <td>${v.Subject}</td>
      <td>${v.Level}</td>
      <td>${v.Salary}</td>
      <td>${v.Urgency}</td>
      <td>${v.FacultyRequired}</td>
      <td>${v.Status}</td>
    `;
    tbody.appendChild(tr);
  });
}
function applySalaryFilter() {
  const min = Number(document.getElementById("salaryFromFilter").value);
  const max = Number(document.getElementById("salaryToFilter").value);

  document.querySelectorAll("#vacanciesBody tr").forEach(row => {
    const salaryText = row.children[5].innerText;
    const numbers = salaryText.match(/\d+/g).map(Number);

    const from = numbers[0];
    const to = numbers[1];

    if (
      (min && from < min) ||
      (max && to > max)
    ) {
      row.style.display = "none";
    } else {
      row.style.display = "";
    }
  });
}

document.getElementById("salaryFromFilter").onchange = applySalaryFilter;
document.getElementById("salaryToFilter").onchange = applySalaryFilter;
async function deleteVacancy(id) {
  if (!confirm("Delete vacancy " + id + "?")) return;

  const res = await fetch(`${SCRIPT_URL}?id=${id}`, {
    method: "DELETE"
  });

  const result = await res.json();

  if (result.success) {
    alert("Vacancy deleted");
    loadVacancies();
  } else {
    alert("Delete failed: " + result.error);
  }
}

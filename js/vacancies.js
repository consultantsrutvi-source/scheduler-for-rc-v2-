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

function logout() {
  localStorage.clear();
  location.href = "index.html";
}

/* ===== KARNATAKA PLACES ===== */
const places = [
  "Bengaluru","Mysuru","Mangaluru","Hubballi","Dharwad","Belagavi",
  "Ballari","Kalaburagi","Bidar","Raichur","Koppal","Vijayapura",
  "Bagalkot","Chikkamagaluru","Shivamogga","Udupi","Karwar",
  "Hassan","Mandya","Tumakuru","Kolar","Chitradurga","Davangere"
];

const placeList = document.getElementById("placesList");
places.forEach(p => {
  const o = document.createElement("option");
  o.value = p;
  placeList.appendChild(o);
});

/* ===== SAMPLE DATA (REMOVE LATER) ===== */
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

function loadVacancies() {
  const tbody = document.getElementById("vacancyTable");
  tbody.innerHTML = "";

  vacancies.forEach(v => {
    tbody.innerHTML += `
      <tr>
        <td>${v.id}</td>
        <td>${v.college}</td>
        <td>${v.city}</td>
        <td>${v.subject}</td>
        <td>${v.level}</td>
        <td>${v.salary}</td>
        <td><span class="badge urgency-immediate">${v.urgency}</span></td>
        <td>${v.faculty}</td>
        <td><span class="badge status-open">${v.status}</span></td>
        <td class="no-print">✏️ 🗑</td>
      </tr>
    `;
  });
}

document.addEventListener("DOMContentLoaded", loadVacancies);

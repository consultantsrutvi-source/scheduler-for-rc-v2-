const cities = [
  // Karnataka
  "Bengaluru","Mysuru","Mangaluru","Udupi","Shivamogga","Davanagere",
  "Ballari","Belagavi","Hubballi","Dharwad","Tumakuru","Chitradurga",
  "Hassan","Mandya","Kolar","Chikkaballapur","Chikmagalur","Kodagu",
  "Raichur","Yadgir","Kalaburagi","Bidar","Vijayapura","Bagalkot",
  "Gadag","Haveri","Koppal","Ramanagara","Chamarajanagar",

  // Andhra Pradesh
  "Visakhapatnam","Vijayawada","Guntur","Nellore","Tirupati",
  "Kurnool","Anantapur","Kadapa","Rajahmundry","Eluru","Ongole",

  // Telangana
  "Hyderabad","Warangal","Karimnagar","Nizamabad","Khammam",
  "Mahabubnagar","Adilabad","Nalgonda","Siddipet",

  // Tamil Nadu
  "Chennai","Coimbatore","Madurai","Salem","Erode","Tiruppur",
  "Vellore","Trichy","Thanjavur","Tirunelveli","Thoothukudi",
  "Kanchipuram","Chengalpattu",

  // Maharashtra
  "Mumbai","Pune","Nagpur","Nashik","Aurangabad","Jalgaon",
  "Kolhapur","Satara","Sangli","Solapur","Amravati","Akola",
  "Latur","Beed","Parbhani","Nanded"
];

document.addEventListener("DOMContentLoaded", () => {
  const list = document.getElementById("citiesList");
  if (!list) return;

  cities.forEach(city => {
    const option = document.createElement("option");
    option.value = city;
    list.appendChild(option);
  });
});

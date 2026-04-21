const updatedDateElement = document.getElementById("updated-date");
if (updatedDateElement) {
  const today = new Date();
  updatedDateElement.textContent = new Intl.DateTimeFormat("nb-NO", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
  }).format(today);
}

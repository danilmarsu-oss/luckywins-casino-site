const faqButtons = document.querySelectorAll(".faq-question");

faqButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const expanded = button.getAttribute("aria-expanded") === "true";
    const answer = button.nextElementSibling;

    button.setAttribute("aria-expanded", String(!expanded));
    answer.style.maxHeight = expanded ? "0px" : `${answer.scrollHeight}px`;
  });
});

const updatedDateElement = document.getElementById("updated-date");
if (updatedDateElement) {
  const today = new Date();
  updatedDateElement.textContent = new Intl.DateTimeFormat("nb-NO", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
  }).format(today);
}

function loadPart(id, file) {
  fetch(file)
    .then(response => {
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.text();
    })
    .then(data => {
      document.getElementById(id).innerHTML = data;
    })
    .catch(error => {
      console.error(
        "There has been a problem with your fetch operation:",
        error
      );
    });
}

// Load header and footer
document.addEventListener("DOMContentLoaded", () => {
  loadPart("header", "plant-header.html");
  loadPart("footer", "plant-footer.html");
});

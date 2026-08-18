// Projekte
function loadProjects() {
  return JSON.parse(localStorage.getItem("dev_projects") || "[]");
}

function saveProjects(list) {
  localStorage.setItem("dev_projects", JSON.stringify(list));
}

// Notizen
function loadNotes() {
  return JSON.parse(localStorage.getItem("dev_notes") || "[]");
}

function saveNotes(list) {
  localStorage.setItem("dev_notes", JSON.stringify(list));
}

window.DevStorage = { loadProjects, saveProjects, loadNotes, saveNotes };

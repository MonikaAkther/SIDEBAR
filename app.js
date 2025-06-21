// alert("")

const toggleBtn = document.getElementById("toggleBtn");
const closeBtn = document.getElementById("closeBtn");
const sidebar = document.getElementById("sidebar");

// Open Sidebar
toggleBtn.addEventListener("click", function () {
    sidebar.style.width = "500px";
});

// Close Sidebar
closeBtn.addEventListener("click", function () {
    sidebar.style.width = "0px";
});






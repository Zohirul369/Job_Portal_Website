document.addEventListener("DOMContentLoaded", function () {
    const searchButton = document.querySelector(".s-btn");

    searchButton.addEventListener("click", function (e) {
        e.preventDefault();

        const keyword = document.getElementById("search").value.trim();
        const location = document.getElementById("location").value.trim(); // Corrected ID
        const category = document.getElementById("category").value;

        // Simple validation (optional)
        if (!keyword && !location && !category) {
            alert("Please enter at least one search criteria.");
            return;
        }

        // Log values to console
        console.log("Keyword:", keyword);
        console.log("Location:", location);
        console.log("Category:", category);

        // Example redirect with search query
        const searchParams = new URLSearchParams({
            keyword,
            location,
            category
        });

        window.location.href = `find-jobs.html?${searchParams.toString()}`;
    });
});

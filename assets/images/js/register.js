document.addEventListener("DOMContentLoaded", function () {
    const roleInputs = document.querySelectorAll('input[name="role"]');

    roleInputs.forEach(input => {
        input.addEventListener("change", function () {
            if (this.value === "employer") {
                console.log("Employer selected");

            } else if (this.value === "job_seeker") {
                console.log("Job Seeker selected");
                
            }
        });
    });
});
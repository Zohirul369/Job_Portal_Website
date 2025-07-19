document.addEventListener("DOMContentLoaded", function () {
  showProfile(); // Default view
});

function showChangeProfilePicture() {
  document.getElementById("contentArea").innerHTML = `
    <div class="card border-0 shadow mb-4">
      <div class="card-body p-4">
        <h3 class="fs-4 mb-3">Change Profile Picture</h3>
        <form id="profilePicForm">
          <div class="mb-3">
            <label for="profilePic" class="form-label">Choose Profile Picture (JPG/PNG)</label>
            <input class="form-control" type="file" id="profilePic" accept="image/*" required>
          </div>
          <div id="previewContainer" class="mb-3"></div>
          <button type="submit" class="btn btn-success">Upload Picture</button>
          <div id="profilePicStatus" class="mt-3"></div>
        </form>
      </div>
    </div>
  `;

  setTimeout(() => {
    const input = document.getElementById("profilePic");
    const preview = document.getElementById("previewContainer");

    input.addEventListener("change", function () {
      const file = this.files[0];
      if (file && file.type.startsWith("image/")) {
        const reader = new FileReader();
        reader.onload = function (e) {
          preview.innerHTML = `<img src="${e.target.result}" class="rounded img-thumbnail" style="max-width: 150px;">`;
        };
        reader.readAsDataURL(file);
      } else {
        preview.innerHTML = `<div class="text-danger">Please select a valid image file.</div>`;
      }
    });

    document.getElementById("profilePicForm").addEventListener("submit", function (e) {
      e.preventDefault();
      const file = input.files[0];
      if (file) {
        document.getElementById("profilePicStatus").innerHTML = `
          <div class="alert alert-success"> Profile picture "<strong>${file.name}</strong>" uploaded successfully!</div>
        `;
      } else {
        document.getElementById("profilePicStatus").innerHTML = `
          <div class="alert alert-danger"> Please select a profile picture first.</div>
        `;
      }
    });
  }, 100);
}
document.addEventListener("DOMContentLoaded", function () {
  showProfile(); // Default view
});

// Show Profile Info
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

// Show Profile Info
function showProfile() {
  document.getElementById("contentArea").innerHTML = `
    <div class="card border-0 shadow mb-4">
      <div class="card-body p-4">
        <h3 class="fs-4 mb-3">My Profile</h3>
        <form>
          <div class="mb-3">
            <label class="form-label">Name</label>
            <input type="text" class="form-control" placeholder="Enter Name">
          </div>
          <div class="mb-3">
            <label class="form-label">Email</label>
            <input type="email" class="form-control" placeholder="Enter Email">
          </div>
          <div class="mb-3">
            <label class="form-label">Designation</label>
            <input type="text" class="form-control" placeholder="Your Designation">
          </div>
          <div class="mb-3">
            <label class="form-label">Mobile</label>
            <input type="text" class="form-control" placeholder="Your Mobile">
          </div>
          <button type="submit" class="btn btn-primary">Update</button>
        </form>
      </div>
    </div>
  `;
}

// Show Upload CV
function showUploadCV() {
  document.getElementById("contentArea").innerHTML = `
    <div class="card border-0 shadow mb-4">
      <div class="card-body p-4">
        <h3 class="fs-4 mb-3">Upload Your CV</h3>
        <form id="cvForm">
          <div class="mb-3">
            <label for="cvFile" class="form-label">Choose CV (PDF/DOC)</label>
            <input class="form-control" type="file" id="cvFile" accept=".pdf,.doc,.docx" required>
          </div>
          <button type="submit" class="btn btn-success">Upload CV</button>
          <div id="uploadStatus" class="mt-3"></div>
        </form>
      </div>
    </div>
  `;

  setTimeout(() => {
    document.getElementById("cvForm").addEventListener("submit", function (e) {
      e.preventDefault();
      const fileInput = document.getElementById("cvFile");
      const file = fileInput.files[0];

      if (file) {
        document.getElementById("uploadStatus").innerHTML = `
          <div class="alert alert-success"> CV "<strong>${file.name}</strong>" Uploaded successfully!</div>
        `;
      } else {
        document.getElementById("uploadStatus").innerHTML = `
          <div class="alert alert-danger"> Please select a file first.</div>
        `;
      }
    });
  }, 100);
}

// Show Change Password Form
function showChangePassword() {
  document.getElementById("contentArea").innerHTML = `
    <div class="card border-0 shadow mb-4">
      <div class="card-body p-4">
        <h3 class="fs-4 mb-3">Change Password</h3>
        <form>
          <div class="mb-3">
            <label class="form-label">Old Password*</label>
            <input type="password" class="form-control" placeholder="Old Password">
          </div>
          <div class="mb-3">
            <label class="form-label">New Password*</label>
            <input type="password" class="form-control" placeholder="New Password">
          </div>
          <div class="mb-3">
            <label class="form-label">Confirm Password*</label>
            <input type="password" class="form-control" placeholder="Confirm New Password">
          </div>
          <button type="submit" class="btn btn-primary">Update</button>
        </form>
      </div>
    </div>
  `;
}

// Show Applied Jobs
function showAppliedJobs() {
  document.getElementById("contentArea").innerHTML = `
     <div class="col-lg-12">
        <div class="card border-0 shadow mb-4 p-3 w-100">
            <div class="card-body card-form">
                <h3 class="fs-4 mb-1">Jobs Applied</h3>
                <div class="table-responsive">
                    <table class="table w-100">
                        <thead class="bg-light">
                            <tr>
                                <th scope="col">Title</th>
                                <th scope="col">Location</th>
                                <th scope="col">Deadline</th>
                                <th scope="col">Applicants</th>
                                <th scope="col">Status</th>
                            </tr>
                        </thead>
                        <tbody class="border-0">
                            <tr class="active">
                                <td><div class="job-name fw-500">Web Developer</div></td>
                                <td>Gazipur</td>
                                <td>30 July 2025</td>
                                <td>130</td>
                                <td>Active</td>
                            </tr>
                            <tr class="active">
                                <td><div class="job-name fw-500">Web Developer</div></td>
                                <td>Gazipur</td>
                                <td>30 July 2025</td>
                                <td>130</td>
                                <td>Active</td>
                            </tr>
                            <tr class="active">
                                <td><div class="job-name fw-500">Web Developer</div></td>
                                <td>Gazipur</td>
                                <td>30 July 2025</td>
                                <td>130</td>
                                <td>Active</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>
  `;
}



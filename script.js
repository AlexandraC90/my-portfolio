/* UPLOAD PROFILE */
function uploadProfile(){
  let input = document.createElement("input");
  input.type = "file";
  input.accept = "image/*";

  input.onchange = e => {
    let reader = new FileReader();
    reader.onload = () => {
      localStorage.setItem("profile", reader.result);
      document.getElementById("profileImg").src = reader.result;
    };
    reader.readAsDataURL(e.target.files[0]);
  };

  input.click();
}

/* UPLOAD COVER */
function uploadCover(){
  let input = document.createElement("input");
  input.type = "file";
  input.accept = "image/*";

  input.onchange = e => {
    let file = e.target.files[0];
    if(!file) return;

    let reader = new FileReader();

    reader.onload = () => {
      localStorage.setItem("cover", reader.result);
      document.getElementById("bgImage").src = reader.result;
    };

    reader.readAsDataURL(file);
  };

  input.click();
}

/* LOAD SAVED */
function loadData(){
  let p = localStorage.getItem("profile");
  if(p) document.getElementById("profileImg").src = p;

  let c = localStorage.getItem("cover");
  if(c) document.getElementById("bgImage").src = c;
}

loadData();
function addProject(){
  let title = prompt("Project title:");
  let desc = prompt("Project description:");

  let input = document.createElement("input");
  input.type = "file";
  input.accept = "video/*";

  input.onchange = e => {
    let file = e.target.files[0];
    let url = URL.createObjectURL(file);

    let card = document.createElement("div");
    card.className = "card";

    card.innerHTML = `
      <video class="project-video" controls>
        <source src="${url}" type="video/mp4">
      </video>
      <h3>${title}</h3>
      <p>${desc}</p>
    `;

    document.getElementById("projectsGrid").appendChild(card);
  };

  input.click();
}

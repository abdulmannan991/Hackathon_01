document
  .getElementById("Form")
  ?.addEventListener("submit", function (event: Event) {
    event.preventDefault();

    let Profilepictureinput = document.getElementById('profilepicture') as HTMLInputElement;

    let userName = document.getElementById("name") as HTMLInputElement;
    let userEmail = document.getElementById("email") as HTMLInputElement;
    let userPhone = document.getElementById("phone") as HTMLInputElement;
    let userEducation = document.getElementById(
      "education"
    ) as HTMLInputElement;
    let userExperience = document.getElementById(
      "experience"
    ) as HTMLInputElement;
    let userSkills = document.getElementById("skills") as HTMLInputElement;


let usernameElement = document.getElementById("username") as HTMLInputElement


    if (
      userName &&
      Profilepictureinput&&
      userEmail &&
      userPhone &&
      userEducation &&
      userExperience &&
      userSkills&&
      usernameElement
    ) {
      const namee = userName.value;
      const email = userEmail.value;
      const phone = userPhone.value;
      const education = userEducation.value;
      const experience = userExperience.value;
      const skills = userSkills.value;
      const username = usernameElement.value;
      const uniquepath = `resume/${username.replace(/\s+/g, '_')}_cv.html`
      const Profilepicture = Profilepictureinput.files?.[0];

const profilepictureurl = Profilepicture ? URL.createObjectURL(Profilepicture) : "";
      const output = `
 <h1>Resume</h1>
                ${profilepictureurl ? `<img src="${profilepictureurl}" alt="Profile Picture" class="profilepicture">` : ''}
    <p><strong>Name:</strong> ${namee}</p>
                <p><strong>Email:</strong> <span id="edit-email" class "editable">  ${email}</p>
                <p><strong>Phone:</strong> <span id="edit-phone" class "editable">  ${phone}</p>
                <h3>Education</h3>
                <p> <span id="edit-education" class "editable"> ${education}  </p>
                <h3>Experience</h3>
                <p> <span id="edit-experience" class "editable">${experience}  </p>
                <h3>Skills</h3>
                <p> <span id="edit-skills" class "editable">${skills}  </p>

`;

 const downloadLink =  document.createElement('a');
 downloadLink.href = 'data:text/html;charset=utf-8,' + encodeURIComponent(output)
 downloadLink.download = uniquepath;
 downloadLink.textContent = 'Download your Resume';


      const resumeoutputelement = document.getElementById("resume");

      if (resumeoutputelement) {

        resumeoutputelement.innerHTML = output;
        resumeoutputelement.classList.remove("hidden");
        const buttoncontainer = document.createElement("div");
        buttoncontainer.id = "buttoncontainer";
        resumeoutputelement.appendChild(buttoncontainer);

        const downloadbutton = document.createElement("button");
        downloadbutton.textContent = "Download as PDF";
        downloadbutton.addEventListener("click",()=>{
          window.print();
        });

        buttoncontainer.appendChild(downloadbutton);

        const SharelinkButton = document.createElement("button");
        SharelinkButton.textContent = "Copy and share link";
        SharelinkButton.addEventListener("click",async()=>{
          try{
            const ShareAbleLink = `https://yourdomain.com/resumes/${namee.replace(
              /\s+/g, "_"
            )}_cv.html`;
          await navigator.clipboard.writeText(ShareAbleLink);
          alert("Shareable link copied")
          }catch(err){
console.error("Failed to copy link :-",err);
alert("Failed to copy link")
          }
        });

        buttoncontainer.appendChild(SharelinkButton);

        resumeoutputelement.innerHTML = output;

        resumeoutputelement.appendChild(downloadLink);

      }

      makeEditable();
    } else {
      console.error("One or more output element missing");
    }
  });

function makeEditable() {
  let editable = document.querySelectorAll(".editable");
  editable.forEach((element) => {
    element.addEventListener("click", function () {
      let currentElement = element as HTMLElement;
      let currentValue = currentElement.textContent || "";

      if (currentElement.tagName === "p" || currentElement.tagName === "SPAN") {
        let input = document.createElement("input");
        input.type = "text";
        input.value = currentValue;
        input.classList.add("editing-input");

        input.addEventListener("blur", function () {
          currentElement.textContent = input.value;
          currentElement.style.display = "inline";
          input.remove();
        });

        currentElement.style.display = "none";
        currentElement.parentNode?.insertBefore(input, currentElement);
      }
    });
  });
}

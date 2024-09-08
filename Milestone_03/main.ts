const resumeForm = document.getElementById("resumeForm") as HTMLFormElement;
const resumeOutput = document.getElementById("resumeOutput") as HTMLDivElement;
const generateButton = document.getElementById("generateButton") as HTMLButtonElement;
const toggleFormButton = document.getElementById("toggleFormButton") as HTMLButtonElement;
const toggleOutputButton = document.getElementById("toggleOutputButton") as HTMLButtonElement;

let resumeData = {
    name: "",
    email: "",
    phone: "",
    summary: "",
    skills: "",
    experience: ""
};

resumeForm.addEventListener("submit", (event) => {
    event.preventDefault();

    resumeData = {
        name: (document.getElementById("name") as HTMLInputElement).value,
        email: (document.getElementById("email") as HTMLInputElement).value,
        phone: (document.getElementById("phone") as HTMLInputElement).value,
        summary: (document.getElementById("summary") as HTMLTextAreaElement).value,
        skills: (document.getElementById("skills") as HTMLInputElement).value,
        experience: (document.getElementById("experience") as HTMLTextAreaElement).value
    };

    const resumeHTML = `
        <h2>${resumeData.name}</h2>
        <p><strong>Email:</strong> ${resumeData.email}</p>
        <p><strong>Phone:</strong> ${resumeData.phone}</p>
        <p><strong>Summary:</strong> ${resumeData.summary}</p>
        <p><strong>Skills:</strong> ${resumeData.skills}</p>
        <p><strong>Experience:</strong> ${resumeData.experience}</p>
    `;

    resumeOutput.innerHTML = resumeHTML;
    resumeOutput.classList.remove("hidden");
    resumeForm.classList.add("hidden");
    generateButton.classList.add("hidden");
    editButton.classList.remove("hidden");
    toggleFormButton.classList.add("hidden");
    toggleOutputButton.classList.remove("hidden");
});

editButton.addEventListener("click", () => {

    (document.getElementById("name") as HTMLInputElement).value = resumeData.name;
    (document.getElementById("email") as HTMLInputElement).value = resumeData.email;
    (document.getElementById("phone") as HTMLInputElement).value = resumeData.phone;
    (document.getElementById("summary") as HTMLTextAreaElement).value = resumeData.summary;
    (document.getElementById("skills") as HTMLInputElement).value = resumeData.skills;
    (document.getElementById("experience") as HTMLTextAreaElement).value = resumeData.experience;

    // Scroll back to the form for editing
    window.scrollTo(0, resumeForm.offsetTop);

    // Show the form and hide resume output
    resumeForm.classList.remove("hidden");
    resumeOutput.classList.add("hidden");
    generateButton.classList.remove("hidden");
    toggleFormButton.classList.remove("hidden");
    toggleOutputButton.classList.add("hidden");
});

toggleFormButton.addEventListener("click", () => {
    resumeForm.classList.add("hidden");
    resumeOutput.classList.remove("hidden");
    toggleFormButton.classList.add("hidden");
    toggleOutputButton.classList.remove("hidden");
});

toggleOutputButton.addEventListener("click", () => {
    resumeForm.classList.remove("hidden");
    resumeOutput.classList.add("hidden");
    toggleFormButton.classList.remove("hidden");
    toggleOutputButton.classList.add("hidden");
});

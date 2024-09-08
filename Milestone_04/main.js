"use strict";
const resumeForm = document.getElementById("resumeForm");
const resumeOutput = document.getElementById("resumeOutput");
const generateButton = document.getElementById("generateButton");
const editButton = document.getElementById("editButton");
const toggleFormButton = document.getElementById("toggleFormButton");
const toggleOutputButton = document.getElementById("toggleOutputButton");
let resumeData = {
    name: "",
    email: "",
    phone: "",
    summary: "",
    skills: "",
    experience: ""
};
// Event listener for form submission
resumeForm.addEventListener("submit", (event) => {
    event.preventDefault();
    // Gather form data
    resumeData = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        phone: document.getElementById("phone").value,
        summary: document.getElementById("summary").value,
        skills: document.getElementById("skills").value,
        experience: document.getElementById("experience").value
    };
    // Generate resume HTML
    const resumeHTML = `
        <h2>${resumeData.name}</h2>
        <p><strong>Email:</strong> ${resumeData.email}</p>
        <p><strong>Phone:</strong> ${resumeData.phone}</p>
        <p><strong>Summary:</strong> ${resumeData.summary}</p>
        <p><strong>Skills:</strong> ${resumeData.skills}</p>
        <p><strong>Experience:</strong> ${resumeData.experience}</p>
    `;
    // Display resume output and hide form
    resumeOutput.innerHTML = resumeHTML;
    resumeOutput.classList.remove("hidden");
    resumeForm.classList.add("hidden");
    generateButton.classList.add("hidden");
    editButton.classList.remove("hidden");
    toggleFormButton.classList.add("hidden");
    toggleOutputButton.classList.remove("hidden");
});
// Event listener for editing the resume
editButton.addEventListener("click", () => {
    // Populate the form with current data
    document.getElementById("name").value = resumeData.name;
    document.getElementById("email").value = resumeData.email;
    document.getElementById("phone").value = resumeData.phone;
    document.getElementById("summary").value = resumeData.summary;
    document.getElementById("skills").value = resumeData.skills;
    document.getElementById("experience").value = resumeData.experience;
    // Scroll back to the form for editing
    window.scrollTo(0, resumeForm.offsetTop);
    // Show the form and hide resume output
    resumeForm.classList.remove("hidden");
    resumeOutput.classList.add("hidden");
    generateButton.classList.remove("hidden");
    editButton.classList.add("hidden");
    toggleFormButton.classList.remove("hidden");
    toggleOutputButton.classList.add("hidden");
});
// Toggle visibility of form and resume output
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

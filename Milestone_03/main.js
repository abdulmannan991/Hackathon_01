"use strict";
const resumeForm = document.getElementById("resumeForm");
const resumeOutput = document.getElementById("resumeOutput");
resumeForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const phone = document.getElementById("phone").value;
    const summary = document.getElementById("summary").value;
    const skills = document.getElementById("skills").value.split(",");
    const experience = document.getElementById("experience").value;
    const resumeHTML = `
        <h2>${name}</h2>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Summary:</strong> ${summary}</p>
        <p><strong>Skills:</strong> ${skills.join(', ')}</p>
        <p><strong>Experience:</strong> ${experience}</p>
    `;
    resumeOutput.innerHTML = resumeHTML;
});

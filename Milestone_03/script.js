var _a;
(_a = document.getElementById('Form')) === null || _a === void 0 ? void 0 : _a.addEventListener('submit', function (event) {
    event.preventDefault();
    var userName = document.getElementById('name');
    var userEmail = document.getElementById('email');
    var userPhone = document.getElementById('phone');
    var userEducation = document.getElementById('education');
    var userExperience = document.getElementById('experience');
    var userSkills = document.getElementById('skills');
    if (userName && userEmail && userPhone && userEducation && userExperience && userSkills) {
        var namee = userName.value;
        var email = userEmail.value;
        var phone = userPhone.value;
        var education = userEducation.value;
        var experience = userExperience.value;
        var skills = userSkills.value;
        var output = "\n <h2>Resume</h2>\n                <p><strong>Name:</strong> ".concat(namee, "</p>\n                <p><strong>Email:</strong> ").concat(email, "</p>\n                <p><strong>Phone:</strong> ").concat(phone, "</p>\n                <h3>Education</h3>\n                <p>").concat(education, "</p>\n                <h3>Experience</h3>\n                <p>").concat(experience, "</p>\n                <h3>Skills</h3>\n                <p>").concat(skills, "</p>\n\n");
        var resumeoutputelement = document.getElementById('resume');
        if (resumeoutputelement) {
            resumeoutputelement.innerHTML = output;
        }
        else {
            console.error("The resume output element missing");
        }
    }
    else {
        console.error("One or more output element missing");
    }
});

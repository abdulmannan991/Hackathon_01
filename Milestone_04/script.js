var _a;
(_a = document
    .getElementById("Form")) === null || _a === void 0 ? void 0 : _a.addEventListener("submit", function (event) {
    var _a;
    event.preventDefault();
    var Profilepictureinput = document.getElementById('profilepicture');
    var userName = document.getElementById("name");
    var userEmail = document.getElementById("email");
    var userPhone = document.getElementById("phone");
    var userEducation = document.getElementById("education");
    var userExperience = document.getElementById("experience");
    var userSkills = document.getElementById("skills");
    if (userName &&
        Profilepictureinput &&
        userEmail &&
        userPhone &&
        userEducation &&
        userExperience &&
        userSkills) {
        var namee = userName.value;
        var email = userEmail.value;
        var phone = userPhone.value;
        var education = userEducation.value;
        var experience = userExperience.value;
        var skills = userSkills.value;
        var Profilepicture = (_a = Profilepictureinput.files) === null || _a === void 0 ? void 0 : _a[0];
        var profilepictureurl = Profilepicture ? URL.createObjectURL(Profilepicture) : "";
        var output = "\n <h1>Resume</h1>\n                ".concat(profilepictureurl ? "<img src=\"".concat(profilepictureurl, "\" alt=\"Profile Picture\" class=\"profilepicture\">") : '', "\n    <p><strong>Name:</strong> ").concat(namee, "</p>\n                <p><strong>Email:</strong> <span id=\"edit-email\" class \"editable\">  ").concat(email, "</p>\n                <p><strong>Phone:</strong> <span id=\"edit-phone\" class \"editable\">  ").concat(phone, "</p>\n                <h3>Education</h3>\n                <p> <span id=\"edit-education\" class \"editable\"> ").concat(education, "  </p>\n                <h3>Experience</h3>\n                <p> <span id=\"edit-experience\" class \"editable\">").concat(experience, "  </p>\n                <h3>Skills</h3>\n                <p> <span id=\"edit-skills\" class \"editable\">").concat(skills, "  </p>\n\n");
        var resumeoutputelement = document.getElementById("resume");
        if (resumeoutputelement) {
            resumeoutputelement.innerHTML = output;
        }
        makeEditable();
    }
    else {
        console.error("One or more output element missing");
    }
});
function makeEditable() {
    var editable = document.querySelectorAll(".editable");
    editable.forEach(function (element) {
        element.addEventListener("click", function () {
            var _a;
            var currentElement = element;
            var currentValue = currentElement.textContent || "";
            if (currentElement.tagName === "p" || currentElement.tagName === "SPAN") {
                var input_1 = document.createElement("input");
                input_1.type = "text";
                input_1.value = currentValue;
                input_1.classList.add("editing-input");
                input_1.addEventListener("blur", function () {
                    currentElement.textContent = input_1.value;
                    currentElement.style.display = "inline";
                    input_1.remove();
                });
                currentElement.style.display = "none";
                (_a = currentElement.parentNode) === null || _a === void 0 ? void 0 : _a.insertBefore(input_1, currentElement);
            }
        });
    });
}

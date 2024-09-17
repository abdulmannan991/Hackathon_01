var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var _a;
(_a = document
    .getElementById("Form")) === null || _a === void 0 ? void 0 : _a.addEventListener("submit", function (event) {
    var _this = this;
    var _a;
    event.preventDefault();
    var Profilepictureinput = document.getElementById('profilepicture');
    var userName = document.getElementById("name");
    var userEmail = document.getElementById("email");
    var userPhone = document.getElementById("phone");
    var userEducation = document.getElementById("education");
    var userExperience = document.getElementById("experience");
    var userSkills = document.getElementById("skills");
    var usernameElement = document.getElementById("username");
    if (userName &&
        Profilepictureinput &&
        userEmail &&
        userPhone &&
        userEducation &&
        userExperience &&
        userSkills &&
        usernameElement) {
        var namee_1 = userName.value;
        var email = userEmail.value;
        var phone = userPhone.value;
        var education = userEducation.value;
        var experience = userExperience.value;
        var skills = userSkills.value;
        var username = usernameElement.value;
        var uniquepath = "resume/".concat(username.replace(/\s+/g, '_'), "_cv.html");
        var Profilepicture = (_a = Profilepictureinput.files) === null || _a === void 0 ? void 0 : _a[0];
        var profilepictureurl = Profilepicture ? URL.createObjectURL(Profilepicture) : "";
        var output = "\n <h1>Resume</h1>\n                ".concat(profilepictureurl ? "<img src=\"".concat(profilepictureurl, "\" alt=\"Profile Picture\" class=\"profilepicture\">") : '', "\n    <p><strong>Name:</strong> ").concat(namee_1, "</p>\n                <p><strong>Email:</strong> <span id=\"edit-email\" class \"editable\">  ").concat(email, "</p>\n                <p><strong>Phone:</strong> <span id=\"edit-phone\" class \"editable\">  ").concat(phone, "</p>\n                <h3>Education</h3>\n                <p> <span id=\"edit-education\" class \"editable\"> ").concat(education, "  </p>\n                <h3>Experience</h3>\n                <p> <span id=\"edit-experience\" class \"editable\">").concat(experience, "  </p>\n                <h3>Skills</h3>\n                <p> <span id=\"edit-skills\" class \"editable\">").concat(skills, "  </p>\n\n");
        var downloadLink = document.createElement('a');
        downloadLink.href = 'data:text/html;charset=utf-8,' + encodeURIComponent(output);
        downloadLink.download = uniquepath;
        downloadLink.textContent = 'Download your Resume';
        var resumeoutputelement = document.getElementById("resume");
        if (resumeoutputelement) {
            resumeoutputelement.innerHTML = output;
            resumeoutputelement.classList.remove("hidden");
            var buttoncontainer = document.createElement("div");
            buttoncontainer.id = "buttoncontainer";
            resumeoutputelement.appendChild(buttoncontainer);
            var downloadbutton = document.createElement("button");
            downloadbutton.textContent = "Download as PDF";
            downloadbutton.addEventListener("click", function () {
                window.print();
            });
            buttoncontainer.appendChild(downloadbutton);
            var SharelinkButton = document.createElement("button");
            SharelinkButton.textContent = "Copy and share link";
            SharelinkButton.addEventListener("click", function () { return __awaiter(_this, void 0, void 0, function () {
                var ShareAbleLink, err_1;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            _a.trys.push([0, 2, , 3]);
                            ShareAbleLink = "https://yourdomain.com/resumes/".concat(namee_1.replace(/\s+/g, "_"), "_cv.html");
                            return [4 /*yield*/, navigator.clipboard.writeText(ShareAbleLink)];
                        case 1:
                            _a.sent();
                            alert("Shareable link copied");
                            return [3 /*break*/, 3];
                        case 2:
                            err_1 = _a.sent();
                            console.error("Failed to copy link :-", err_1);
                            alert("Failed to copy link");
                            return [3 /*break*/, 3];
                        case 3: return [2 /*return*/];
                    }
                });
            }); });
            buttoncontainer.appendChild(SharelinkButton);
            resumeoutputelement.innerHTML = output;
            resumeoutputelement.appendChild(downloadLink);
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

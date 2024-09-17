document.getElementById('Form')?.addEventListener('submit',function(event:Event){
    event.preventDefault();


    let userName = document.getElementById('name')as HTMLInputElement;
    let userEmail = document.getElementById('email')as HTMLInputElement;
    let userPhone = document.getElementById('phone')as HTMLInputElement;
    let userEducation = document.getElementById('education')as HTMLInputElement;
    let userExperience = document.getElementById('experience')as HTMLInputElement;
    let userSkills = document.getElementById('skills')as HTMLInputElement;
    

if(userName && userEmail && userPhone && userEducation && userExperience && userSkills){

    const namee  = userName.value;
    const email  = userEmail.value;
    const phone  = userPhone.value;
    const education  = userEducation.value;
    const experience  = userExperience.value;
    const skills  = userSkills.value;



const output = `
 <h1>Resume</h1>
                <p><strong>Name:</strong> ${namee}</p>
                <p><strong>Email:</strong> ${email}</p>
                <p><strong>Phone:</strong> ${phone}</p>
                <h3>Education</h3>
                <p>${education}</p>
                <h3>Experience</h3>
                <p>${experience}</p>
                <h3>Skills</h3>
                <p>${skills}</p>

`
const resumeoutputelement =document.getElementById('resume');

if(resumeoutputelement){
    resumeoutputelement.innerHTML = output;
}
else{
    console.error("The resume output element missing");
}


}
else{
 console.error("One or more output element missing")   
}
})

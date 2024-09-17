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
                <p><strong>Name:</strong> <span id="edit-name" class "editable"> ${namee} </span></p>
                <p><strong>Email:</strong> <span id="edit-email" class "editable">  ${email}</p>
                <p><strong>Phone:</strong> <span id="edit-phone" class "editable">  ${phone}</p>
                <h3>Education</h3>
                <p> <span id="edit-education" class "editable"> ${education}  </p>
                <h3>Experience</h3>
                <p> <span id="edit-experience" class "editable">${experience}  </p>
                <h3>Skills</h3>
                <p> <span id="edit-skills" class "editable">${skills}  </p>

`
const resumeoutputelement =document.getElementById('resume');

if(resumeoutputelement){
    resumeoutputelement.innerHTML = output;
}

makeEditable();


}
else{
 console.error("One or more output element missing")   
}
})



function makeEditable(){
    let editable = document.querySelectorAll('.editable');
    editable.forEach(element => {
        element.addEventListener('click',function(){
            let currentElement = element as HTMLElement;
            let currentValue = currentElement.textContent || "" ; 
        if(currentElement.tagName==="p" || currentElement.tagName === "SPAN"){
            let input = document.createElement('input');
            input.type = 'text';
            input.value = currentValue;
            input.classList.add('editing-input')

            input.addEventListener('blur',function(){

                currentElement.textContent = input.value;
                currentElement.style.display = 'inline';
                input.remove()

            })


            currentElement.style.display = 'none';
            currentElement.parentNode?.insertBefore(input,currentElement);
        }
        
        })
    });
}

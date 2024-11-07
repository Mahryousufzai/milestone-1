// const toggleButton = document.getElementById("toggle-skills")as HTMLButtonElement
// const skills = document.getElementById("skills") as HTMLElement
// toggleButton.addEventListener('click',()=>{
//     if(skills.style.display === 'none'){
//         skills.style.display = 'block'
//     }else{
//         skills.style.display = 'none'
//     }
// });
// Get the toggle button and skills section by their IDs
var toggleButton = document.getElementById("toggle-skills");
var skills = document.getElementById("skills");
// Add an event listener for the button click
toggleButton.addEventListener('click', function () {
    // Check if the skills section is currently hidden
    if (skills.style.display === 'none' || skills.style.display === '') {
        // If hidden or default (empty), show it
        skills.style.display = 'block';
    }
    else {
        // If visible, hide it
        skills.style.display = 'none';
    }
});

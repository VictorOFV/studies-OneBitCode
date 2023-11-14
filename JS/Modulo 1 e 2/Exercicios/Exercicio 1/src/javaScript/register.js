let form = document.getElementById("formData")

form.addEventListener("submit", function(e){

    // Receives all data sent by the form
    const data = new FormData(form)
    const name = data.get("name")
    const surname = data.get("surname")
    const date = data.get("date") 
    const studyArea = data.get("study_area")
    
    // Calculates the age of the registered person from the date of birth
    let birthDate = new Date(date);
    let now = new Date();
    let birthDateMoment = moment (birthDate);
    let nowMoment = moment(now);
    let age = nowMoment.diff (birthDateMoment, "years"); 

    document.getElementById("receiveName").innerHTML = name
    document.getElementById("receiveSurname").innerHTML = surname
    document.getElementById("receiveAge").innerHTML = age + ' Anos'
    document.getElementById("receiveStudy").innerHTML = studyArea

    e.preventDefault();
})
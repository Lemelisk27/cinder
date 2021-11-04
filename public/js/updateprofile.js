let birthdate 
let gender
let pref_gender
let goal
let relationship
let language
let type
let worker
let ideal_date
let bio
let submitBtn = document.querySelector("#submitBtn")
let user_id = document.querySelector("#submitBtn").dataset.index

document.getElementById("birthdate").addEventListener("change",()=>{
    birthdate = document.getElementById("birthdate").value
})
document.getElementById("gender").addEventListener("change",()=>{
    gender = document.getElementById("gender").value
})
document.getElementById("pref_gender").addEventListener("change",()=>{
    pref_gender = document.getElementById("pref_gender").value
})
document.getElementById("goal").addEventListener("change",()=>{
    goal = document.getElementById("goal").value
})
document.getElementById("relationship").addEventListener("change",()=>{
    relationship = document.getElementById("relationship").value
})
document.getElementById("language").addEventListener("change",()=>{
    language = document.getElementById("language").value
})
document.getElementById("type").addEventListener("change",()=>{
    type = document.getElementById("type").value
})
document.getElementById("worker").addEventListener("change",()=>{
    worker = document.getElementById("worker").value
})
document.getElementById("ideal_date").addEventListener("change",()=>{
    ideal_date = document.getElementById("ideal_date").value
})
document.getElementById("bio").addEventListener("change",()=>{
    bio = document.getElementById("bio").value
})

submitBtn.addEventListener("click",(e)=>{
    e.preventDefault()
    const userObj={
        user_id:user_id,
        birthdate:birthdate,
        gender:gender,
        pref_gender:pref_gender,
        goal:goal,
        relationship:relationship,
        language:language,
        type:type,
        worker:worker,
        ideal_date:ideal_date,
        bio:bio
    }
    fetch("/api/surveys",{
        method:"PUT",
        body:JSON.stringify(userObj),
        headers:{
            "Content-Type":"application/json"
        }
    }).then(res=>{
        if(res.ok){
            location.href = "/profile"
        }
        else {
            console.log("An Error Occured")
        }
    })
})
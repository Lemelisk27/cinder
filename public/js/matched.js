const deleteBtn = document.querySelector("#deleteBtn")
const user_2 = document.querySelector("#deleteBtn").dataset.index

deleteBtn.addEventListener("click",(e)=>{
    e.preventDefault()
    const userObj = {
        user_2:user_2
    }
    fetch("/api/matches/approved",{
        method:"DELETE",
        body:JSON.stringify(userObj),
        headers: {
            "Content-Type":"application/json"
        }
    }).then(res=>{
        if(res.ok){
            location.href = "/matches"
        }
        else {
            console.log("An Error Occured")
        }
    })
})
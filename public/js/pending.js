const yesBtn = document.querySelector("#yesBtn")
const noBtn = document.querySelector("#noBtn")
user_2 = document.querySelector("#yesBtn").dataset.index

yesBtn.addEventListener("click",(e)=>{
    e.preventDefault
    const userObj = {
        user_2:user_2
    }
    fetch("/api/matches/pending/aprove",{
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

noBtn.addEventListener("click",(e)=>{
    e.preventDefault()
    const userObj = {
        user_2:user_2
    }
    fetch("/api/matches/pending/reject",{
        method:"DELETE",
        body:JSON.stringify(userObj),
        headers: {
            "Content-Type":"application/json" 
        }
    }).then(res=>{
        if (res.ok) {
            location.href = "/matches"
        }
        else {
            console.log("An Error Occured")
        }
    })
})
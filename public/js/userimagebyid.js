const profileBtn = document.querySelector("#profileBtn")
const deleteBtn = document.querySelector("#deleteBtn")
const imgId = document.querySelector("#userImg").dataset.index
const imgUrl = document.querySelector("#userImg").src

profileBtn.addEventListener("click",(e)=>{
    e.preventDefault()
    const userObj = {
        profile_pic:imgUrl
    }
    fetch("/api/images",{
        method:"PUT",
        body:JSON.stringify(userObj),
        headers: {
            "Content-Type":"application/json"
        }
    }).then(res=>{
        if(res.ok){
            location.href = "/userimage"
        }
        else {
            console.log("Unable to Complete Request.")
        }
    })
})

deleteBtn.addEventListener("click",(e)=>{
    e.preventDefault()
    const userObj = {
        id:imgId
    }
    fetch("/api/images",{
        method:"DELETE",
        body:JSON.stringify(userObj),
        headers: {
            "Content-Type":"application/json"
        }
    }).then(res=>{
        if(res.ok){
            location.href = "/userimage"
        }
        else {
            console.log("Unable to Complete Request")
        }
    })
})
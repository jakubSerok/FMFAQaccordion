let questions = document.querySelectorAll(".question");

questions.forEach(qst=>{
    qst.addEventListener("click", e=>{ 
        qst.classList.toggle("question-avtive");        
    })
})
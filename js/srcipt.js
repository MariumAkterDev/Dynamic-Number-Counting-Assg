// ==================== DOM

let txtSpn      = document.querySelectorAll('.txtSpn')      // made an array of txtspan by adding All. by this we can use their index number in the parameter
let input       = document.querySelectorAll('input')        // made an array of input by adding All
let mainData    = document.querySelectorAll('.mainData')    // made an array of maindata/h1 by adding All
let resetBtn    = document.querySelector   ('.resetBtn')


// ......................... Data Transfer Function from input to  h1/mainData
let inpBtnFun = (yes) => {          // this function will work on Add buttons individually
    if (input   [yes]  .value == "") {
        mainData[yes]  .innerHTML  = "😡"
        txtSpn  [yes]  .innerHTML  = "❓"
        resetBtn.addEventListener('click' , () => {
            mainData[yes]  .innerHTML  = 0
            txtSpn  [yes]  .innerHTML  = "___"  
        })
    }else{
        mainData[yes]  .innerHTML    = input[yes].value
        txtSpn  [yes]  .innerHTML    = input[yes].value
        mainData[yes]  .dataset.alu  = input[yes].value
        input   [yes]  .value        = ""
    }
}

// ......................... Counting Function 
let runBtnFun = ()=>{ // ............................. Run button Function
    
    mainData.forEach((item) => {
    
        let num = 0
        let setIntvlFun = setInterval(() => {
            let countNum = () => {
                num++
                item.innerHTML = num
    
                if(num == item.dataset.alu){
                    clearInterval(setIntvlFun)
                }
            }
            countNum()
        }, 100)
        // =============================> stopping infinite loop
        if(item.dataset.alu < 0 || item.dataset.alu == 0 || item.dataset.alu == ""){
            clearInterval(setIntvlFun)
            item.innerHTML = "❗" 
        }
        //  ===========================> reset button
        resetBtn.addEventListener('click' , ()=>{
            clearInterval(setIntvlFun) 
            item.innerHTML = 0 
        })
    })
}
// -------------------------------- X --------------------------------------
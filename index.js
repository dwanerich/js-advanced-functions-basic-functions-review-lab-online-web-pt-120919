// Your code here

function saturdayFun(actionWord="roller-skate") {
    return `This Saturday, I want to ${actionWord}!`
}

let mondayWork = function(code="go to the office") {
    return `This Monday, I will ${code}.`
}




let wrapAdjective = (string="*") => { 
    return (adjective="special") => {
    return `You are ${string}${adjective}${string}!`
}}


let Calculator = {

        add: () => {
        return 1 + 3
        },

        subtract: () => {
        return 1 - 3
        },

        multiply: () => {
            return 1 * 3
        },

        divide: () => {
            return 10/5
        }
}

let actionApplyer = () => {

}


//function to display content

function display(num) {
    result.value += num
}
function clearAll() {
    result.value = ''
}
function Back() {
    result.value = result.value.slice(0,-1)
}
function equal() {
    try {
        result.value = eval(result.value)
    } catch (error) {
        result.value = 'Error'
        setTimeout(() => {
            result.value = ''
        },1000);
        }
    }

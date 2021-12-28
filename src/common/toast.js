let ToastWrap = null
let count = 0
 
function Toast (props) {
    if (!ToastWrap) {
        ToastWrap = document.createElement('div')
        ToastWrap.setAttribute('class', 'cpt-toast-wrap')
        document.body.append(ToastWrap)
    }
    let id = '' + Date.now() + count++
    let toast = document.createElement('div')
    toast.setAttribute('id', id)
    toast.innerHTML = `<div class="cpt-toast"><span class="${props.icon}">${props.msg}</span></div>`
    ToastWrap.append(toast)
    setTimeout(() => {
        document.getElementById(id).remove()
    }, props.time || 2000);
}
 
export default {
    show (msg, time) { Toast({msg, time, icon: 'show'}) },
    success(msg, time) { Toast({ msg, time, icon: 'success' }) },
    error(msg, time) { Toast({ msg, time, icon: 'error' }) },
    info(msg, time) { Toast({ msg, time, icon: 'info' }) }
}
 

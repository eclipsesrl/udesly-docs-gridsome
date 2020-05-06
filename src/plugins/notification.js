import { Notyf } from 'notyf';

const Notification = {

    install(Vue, options) {
        const notyf = new Notyf({
            duration: 2000,
            types: [{
                type: 'info',
                background: '#8351ff',
                icon: false
              }]
        });
    
        Vue.successNotification = (text) => {
            notyf.success(text);
        }
        Vue.errorNotification = (text) => { 
            notyf.error(text);
        }
        Vue.infoNotification = (text) => {
            notyf.open({
                type:"info",
                message: text,
                duration: 5000
            });
        }
    }
}

export default Notification;
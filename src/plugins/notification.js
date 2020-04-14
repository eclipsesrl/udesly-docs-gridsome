import { Notyf } from 'notyf';

const Notification = {

    install(Vue, options) {
        const notyf = new Notyf({
            duration: 2000,
        });
    
        Vue.successNotification = (text) => {
            notyf.success(text);
        }
        Vue.errorNotification = (text) => { 
            notyf.error(text);
        }
    }
}

export default Notification;
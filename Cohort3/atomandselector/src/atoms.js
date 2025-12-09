import { atom, selector } from "recoil"


export const notifications = atom({
    key: "notificationsAtom",
    default: {
        network: 0,
        jobs: 0,
        notifications: 0,
        messaging: 0
    }
})



export const totalNotificationSelecter = selector({
    key: "totalNotificationSelector",
    get: ({get}) => {
        const allNotifications = get(notifications);
        return allNotifications.network + 
        allNotifications.jobs +
        allNotifications.notifications +
        allNotifications.messaging
    }
})
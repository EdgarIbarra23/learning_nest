import constants from "./constants";

export const pusherConfig = {
    appId: constants.PUSHER_APP_ID,
    key: constants.PUSHER_APP_KEY,
    secret: constants.PUSHER_APP_SECRET,
    cluster: constants.PUSHER_APP_CLUSTER,
    useTLS: true,
};
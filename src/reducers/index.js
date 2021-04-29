export default function (state, action) {
    if (state === undefined) {
    return [];
}
    switch(action.type) {
        case 'FETCH_DATAS':
            return action.payload;
        default:
            return state;
    }
}

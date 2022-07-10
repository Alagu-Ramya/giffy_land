import dayjs from "dayjs";
import relativeTime from 'dayjs/plugin/relativeTime';

dayjs.extend(relativeTime);

export function getFromNow(unixTimestamp){
    const timeInMili = unixTimestamp * 1000;
    return `${dayjs(timeInMili).fromNow()}`;
 }
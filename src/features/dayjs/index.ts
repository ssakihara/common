import localDayjs from 'dayjs';
import timezone from 'dayjs/plugin/timezone';
import utc from 'dayjs/plugin/utc';

localDayjs.extend(timezone);
localDayjs.extend(utc);

localDayjs.tz.setDefault('Asia/Tokyo');

export const dayjs = localDayjs;

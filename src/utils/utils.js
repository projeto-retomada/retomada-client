export function getSunday(d) {
    d = new Date(d);
    var day = d.getDay(),
        diff = d.getDate() - day + (day == 0 ? -7 : 1);

    return day == 0 ? d : new Date(d.setDate(diff));
}

export function getWeekSpace(d) {
    var sunday = getSunday(d);
    var saturday = getSunday(d).setDate(getSunday(d).getDate() + 6);
    saturday = new Date(saturday);
    return {
        sunday: sunday,
        saturday: saturday
    };
}

export function withoutTime(d) {
    return d.getDate() + '/' + d.getMonth();
}

export function dateFormat(date) {
    var d = new Date(date),
        month = '' + (d.getMonth() + 1),
        day = '' + d.getDate(),
        year = d.getFullYear();

    if (month.length < 2)
        month = '0' + month;
    if (day.length < 2)
        day = '0' + day;

    return [day, month, year].join('-');
}

export function getWeekNumber(d) {
    d = new Date(Date.UTC(d.getFullYear(), d.getMonth(), d.getDate()));
    d.setUTCDate(d.getUTCDate() + 4 - (d.getUTCDay() || 7));
    var yearStart = new Date(Date.UTC(d.getUTCFullYear(), 0, 1));
    var weekNo = Math.ceil((((d - yearStart) / 86400000) + 1) / 7);
    return weekNo;
}

export function diffBetweenDates(firstDate, lastDate) {
    const date1 = new Date(firstDate);
    const date2 = new Date(lastDate);
    const diffTime = Math.abs(date2 - date1);
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return diffDays
}
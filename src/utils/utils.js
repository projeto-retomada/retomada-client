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

export function getWeekNumber(d) {
    d = new Date(Date.UTC(d.getFullYear(), d.getMonth(), d.getDate()));
    d.setUTCDate(d.getUTCDate() + 4 - (d.getUTCDay()||7));
    var yearStart = new Date(Date.UTC(d.getUTCFullYear(),0,1));
    var weekNo = Math.ceil(( ( (d - yearStart) / 86400000) + 1)/7);
    return weekNo;
}
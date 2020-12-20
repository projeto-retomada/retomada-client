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
    return d.getDate() + '/' + d.getMonth() + '/' + d.getFullYear();
}
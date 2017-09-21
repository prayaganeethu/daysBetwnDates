function daysBetDates(d1, m1, y1, d2, m2, y2, days) {
	let month = [], isLeap = true;
	if (isLeap) 
		month.push(31, 29, 30, 31, 30, 31, 30, 31, 30, 31, 30, 31);
	else
		month.push(31, 28, 30, 31, 30, 31, 30, 31, 30, 31, 30, 31);
	if ((m1 == m2) && (y1 == y2)) 
		return days + Math.abs(d1 - d2);
	if (y1 == y2) {				
		days += daysBetDates(1, m1+1, y1, d2, m2, y2, (month[m1+1] - d1));	
		return days;
	}
	else {
		if (isLeapYear(y1)) 
			days += daysBetDates(d1, m1, y1+1, d2, m2, y2, 366);
		else 
			days += daysBetDates(d1, m1, y1+1, d2, m2, y2, 365);
		return days;
	}
}

function isLeapYear(y) {
	if (y % 400 == 0) 
		return true;
	if (y % 100 == 0)
		return false;
	if (y % 4 == 0)
		return true;
	return false;
}

console.log(daysBetDates(15,8,2015,15,8,2017,0));
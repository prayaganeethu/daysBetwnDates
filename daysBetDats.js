function daysBetDates(d1, m1, y1, d2, m2, y2, days) {
	if (m1 == 12)
		m1 = 1;
	console.log(d1, m1, y1, d2, m2, y2, days);
	let month = [], isLeap = true;
	if (isLeapYear(y1)) 
		month.push(31, 29, 30, 31, 30, 31, 30, 31, 30, 31, 30, 31);
	else
		month.push(31, 28, 30, 31, 30, 31, 30, 31, 30, 31, 30, 31);
	if ((m1 == m2) && (y1 == y2)) {
		return days + d2 - d1;
	}
	// if (y1 == y2) {	
	if (m1 == 12) {
		m1 = 1;	
		d1=1;
		y1 += 1;
		return daysBetDates(d1, m1, y1, d2, m2, y2, 31-d1+1);
			// days += daysBetDates(1, m1+1, y1, d2, m2, y2, (month[m1-1] - d1));			
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

console.log(daysBetDates(21,11,1986,21,9,2017,0));
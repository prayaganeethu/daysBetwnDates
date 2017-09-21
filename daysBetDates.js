function isLeapYear(y) {
	if (y % 400 == 0) 
		return true;
	if (y % 100 == 0)
		return false;
	if (y % 4 == 0)
		return true;
	return false;
}		

function daysBetDates(d1, m1, y1, d2, m2, y2) {
	let days = 1;
	let month = [];
	let isLeap = true;
	if (isLeap) 
		month.push(31, 29, 30, 31, 30, 31, 30, 31, 30, 31, 30, 31);
	else
		month.push(31, 28, 30, 31, 30, 31, 30, 31, 30, 31, 30, 31);
	if ((d1 == d2) && (m1 == m2) && (y1 == y2)) {
		return 0;
	}
	else if ((d1 != d2) && (m1 == m2) && (y1 == y2)) {				
		days += daysBetDates(d1+1, m1, y1, d2, m2, y2);	
		return days;
	}
	else if ((m1 != m2) && (y1 == y2)) {	
		if (m1 == m2)
			return 0;
		days += (month[m1+1] - d1) + daysBetDates(1, m1+1, y1, d2, m2, y2);		
		return days;
	}
	else if (y1 != y2) {
		if (y1 == y2)
			return 0;
		if (isLeapYear(y1)) 
			days += 366 + daysBetDates(d1, m1, y1+1, d2, m2, y2);
		else 
			days += 365 + daysBetDates(d1, m1, y1+1, d2, m2, y2);
		return days;
	}
}

console.log(daysBetDates(15,8,2015,15,8,2017));
// isLeap = [31, 29, 30, 31, 30, 31, 30, 31, 30, 31, 30, 31];
// isNotLeap = [31, 28, 30, 31, 30, 31, 30, 31, 30, 31, 30, 31];


function isLeapYear(y) {
	if(y % 400 == 0)
		return true;
	else if (y % 100 == 0)
		return false;
	else if (y % 4 == 0)
		return true;
	else
		return false;
	// if (y % 4 == 0) 
	// 	if (y % 100 == 0)
	// 		if (y % 400 == 0)
	// 			return true;
	// 		return false;
	// 	return false;
	// return false;
}	

function daysInMonth(m1, y1) {
	let month = [];
	if(isLeapYear(y1)) {
		month.push(31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31)
		return month[m1-1];
	}
	month.push(31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31)
	return month[m1-1];
}

function daysBetDates(d1, m1, y1, d2, m2, y2, acc) {
	console.log(d1, m1, y1, d2, m2, y2, acc);
	if ((y1 == y2) && (m1 == m2)) {
		return (acc + d2 - d1 );
	}
    acc += daysInMonth(m1, y1) - d1 +1;
    if (m1 == 12) {
    	y1 += 1;
    	m1 = 1;
    } else {
    	m1 += 1;
    }
    return daysBetDates(1, m1, y1, d2, m2, y2, acc);
}

console.log(daysBetDates(24,11,1986,21,9,2017,0));
// console.log(daysBetDates(24,11,1986,1,9,1987,0));
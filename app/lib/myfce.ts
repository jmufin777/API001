
export const DateCzech = (
  dateStr: string,
  locale: string = 'cs-CZ',
) => {
  const date = new Date(dateStr);
  const options: Intl.DateTimeFormatOptions = {
    day: 'numeric',
    month: 'short',
    year: 'numeric',
  };
  const formatter = new Intl.DateTimeFormat(locale, options);
  return formatter.format(date);
};

export const iterate = (obj: any) => {
    var walked = [];
    var stack = [{ obj: obj, stack: '' }];
    let item: any = '';
    while (stack.length > 0) {
         item = stack.pop();
         obj = item.obj;
        for (var property in obj) {
            if (obj.hasOwnProperty(property)) {
                if (typeof obj[property] == "object") {
                    var alreadyFound = false;
                    for (var i = 0; i < walked.length; i++) {
                        if (walked[i] === obj[property]) {
                            alreadyFound = true;
                            break;
                        }
                    }
                    if (!alreadyFound) {
                        walked.push(obj[property]);
                        stack.push({ obj: obj[property], stack: item.stack + '.' + property });
                    }
                }
                else {
                    console.log(item.stack + '.' + property + "=" + obj[property]);
                }
            }
        }
    }
};

export const myDate = (datString: string, nAdd: number) => {
    var datPart = datString.split(".");
    var datum = new Date(datPart[2] + "." + datPart[1] + "." + datPart[0]);
    var retDate = datum;
    retDate.setDate(datum.getDate() + nAdd);
    let dd = retDate.getDate();
    let mm = retDate.getMonth() + 1;
    let yyyy = retDate.getFullYear();
    let sdd = String(dd);
    let smm = String(mm);
    if (dd < 10) sdd = '0' + String(dd);
    if (mm < 10) smm = '0' + String(mm);

    const formattedToday = sdd + '.' + smm + '.' + String(yyyy);

    //var cRet = retDate.toLocaleString('cs-CZ').split("  ")[0];
    //cRet = cRet.substr(0,10);
    //cRet = cRet.join(".");

	


	

    return formattedToday;

};

export const strDate = (datString: any, nAdd: number) => {
    var datPart = datString.split(".");
    var datum = new Date(datPart[2] + "." + datPart[1] + "." + datPart[0]);
    var retDate = datum;
    retDate.setDate(datum.getDate() + nAdd);

    return retDate ;

};

export const  dayDiff=(date1: any, date2: any )=>{
	return (date1 - date2 ) / 86400000 ;

}

export const strDayDiff = (date1: any, date2: any) => {
    let d1 = strDate(date1, 0);
    let d2 = strDate(date2, 0);
    
	return (d1.getTime()  - d2.getTime()  ) / 86400000 ;

}



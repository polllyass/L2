function whatCentury(year) 
{
    const yearNumber = Number(year);
    const century = Math.ceil(yearNumber / 100);
    const lastTwoDigits = century % 100;
    const lastDigit = century % 10;
    const centuryEndings =
    {
        1: 'st',  
        2: 'nd',  
        3: 'rd' 
    };
    if (lastTwoDigits >= 11 && lastTwoDigits <= 13) 
    {
        return century + 'th';
    }
    const ending = centuryEndings[lastDigit] || 'th';
    return century + ending;
}
function howManyTimes(time1, time2) 
{
    const start = new Date(time1);
    const end = new Date(time2);
    let strikes = 0;
    let currentHour = new Date(start);
    currentHour.setMinutes(0, 0, 0);
    while (currentHour < end) 
    {
        const hour = currentHour.getHours();
        const hour12 = hour % 12 || 12; 
        const hourStrikeStart = new Date(currentHour);
        const hourStrikeEnd = new Date(hourStrikeStart.getTime() + hour12 * 1000);
        if (hourStrikeEnd > start && hourStrikeStart < end) 
        {
            const overlapStart = Math.max(hourStrikeStart.getTime(), start.getTime());
            const overlapEnd = Math.min(hourStrikeEnd.getTime(), end.getTime());
            const overlapSeconds = Math.max(0, Math.floor((overlapEnd - overlapStart) / 1000));
            strikes += overlapSeconds;
        }
        const halfHourStrike = new Date(currentHour);
        halfHourStrike.setMinutes(30, 0, 0);
        if (halfHourStrike >= start && halfHourStrike < end) 
        {
            strikes += 1;
        }
        currentHour.setHours(currentHour.getHours() + 1);
    }
    return strikes;
}
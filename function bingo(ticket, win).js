function bingo(ticket, win) 
{
    let totalMiniWins = 0;
    for (let i = 0; i < ticket.length; i++)
    {
        const currentPair = ticket[i];
        const word = currentPair[0];
        const requiredCode = currentPair[1];
        let foundMatch = false;
        for (let j = 0; j < word.length; j++) 
        {
            const currentChar = word[j];
            const charCode = currentChar.charCodeAt(0);
            if (charCode === requiredCode)
            {
                foundMatch = true;
                break;
            }
        }
        if (foundMatch)
        {
            totalMiniWins++;
        }
    }
    if (totalMiniWins >= win) 
    {
        return "Winner!";
    } else 
    {
        return "Loser!";
    }
}
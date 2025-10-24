function primeFactors(n) 
{
    let factorsString = "";
    let currentPrime = 2;
    while (n > 1) 
    {
        let exponent = 0;
        while (n % currentPrime === 0) 
        {
            exponent++;
            n = n / currentPrime;
        }
        if (exponent > 0) 
        {
            factorsString += formatFactor(currentPrime, exponent);
        }
        currentPrime = getNextPrimeCandidate(currentPrime);
    }
    return factorsString;
}
function formatFactor(prime, exponent) 
{
    return exponent === 1 
        ? `(${prime})` 
        : `(${prime}**${exponent})`;
}
function getNextPrimeCandidate(current)
{
    return current === 2 ? 3 : current + 2;
}
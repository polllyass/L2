function domainName(url)
{
    let cleanedUrl = url;
    if (cleanedUrl.includes('://')) 
    {
        cleanedUrl = cleanedUrl.split('://')[1];
    }
    if (cleanedUrl.startsWith('www.')) 
    {
        cleanedUrl = cleanedUrl.slice(4);
    }
    const domainParts = cleanedUrl.split('.');
    return domainParts[0];
}
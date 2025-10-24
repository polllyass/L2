function hexStringToRGB(hexString) 

{
    let cleanHex = hexString;
    if (cleanHex.startsWith('#')) 
    {
        cleanHex = cleanHex.slice(1);
    }
    cleanHex = cleanHex.toUpperCase();
    const redPart = cleanHex[0] + cleanHex[1];
    const greenPart = cleanHex[2] + cleanHex[3];
    const bluePart = cleanHex[4] + cleanHex[5];
    const redValue = parseInt(redPart, 16);
    const greenValue = parseInt(greenPart, 16);
    const blueValue = parseInt(bluePart, 16);
    return {
        r: redValue,
        g: greenValue,
        b: blueValue
    };
}

let responseCodes=[400,500,600];
function HasCodes(...codes)
{
    return codes.some(c=>c>=400);
}

HasCodes(200,300,400)
HasCodes(responseCodes);
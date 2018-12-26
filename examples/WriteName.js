async function ShowName(delayTime)
{
    var letterColor = {r:0, g:0, b:255};
    setMatrixCharacter('N', letterColor);
    await delay (delayTime);
    setMatrixCharacter('A', letterColor);
    await delay (delayTime);
    setMatrixCharacter('M', letterColor);
    await delay (delayTime);
    setMatrixCharacter('E', letterColor);
    await delay (delayTime);
}

async function startProgram()
{
    while (true)
    {
        await ShowName(1);
    }
}
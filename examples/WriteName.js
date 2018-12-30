async function ShowName(name, delayTime)
{
    var letterColor = {r:0, g:0, b:255};

    for (var iStr = 0; iStr < name.length; ++iStr)
    {
        setMatrixCharacter(name.charAt(iStr), letterColor);
        await delay (delayTime);
    }
}

async function startProgram()
{
    while (true)
    {
        await ShowName("Program", 1);
    }
}
async function SimpleHelloWorld()
{
	await speak("Hello, World!", true);
	setMainLed({r: 0, b: 0, g: 255});
	setSpeed(60);
	await delay (2);
	setSpeed(0);
	setMainLed({r: 255, b: 0, g: 0});
	await delay (1);
	await speak("Goodbye, World!", true);
}

async function RollForeverSquare()
{
	while (true)
	{
		setMainLed(getRandomColor());
		await Sound.Game.Coin.play(true);
		
		var rollSpeed = 60;
		var rollTimeSec = 1;
		await roll(getHeading() + 90, rollSpeed, rollTimeSec);
		
		await delay (1);
	}
}

async function startProgram()
{
	// await SimpleHelloWorld();
	await RollForeverSquare();
}

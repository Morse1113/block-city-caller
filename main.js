
function callAuth() {
	BlockCityGenesis.callAuth();
}

function callContract() {
	const player = {"id":"DefaultId","name":"liuwen","fatigue":100,"spirit":100,"gold":100,"power":100,"agility":100,"intelligence":100,"goodness":40,"buffSet":{},"achievements":{}}
	const character = BlockCityGenesis.playerToCharacter(player);
	console.log(character);
	BlockCityGenesis.insertCharacter(character);	
}
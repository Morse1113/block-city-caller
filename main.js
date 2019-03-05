
function callAuth() {
	BlockCityGenesis.callAuth();
}

function callContract() {
	const player = {"id":"DefaultId","name":"亚当 No.42928","fatigue":100,"spirit":100,"gold":100,"power":100,"agility":100,"intelligence":100,"goodness":40,"buffSet":{},"achievements":{}}
	BlockCityGenesis.insertCharacter(player);	
}
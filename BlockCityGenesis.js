"use strict";

class BlockCityGenesis {

    static callAuth() {
        BlockCity.callAuth({
			authItem: 'account',
			success: function (res) {
			    alert('成功获取' + res);
			},
			fail: function (res) {
			    alert('分享失败' + res);
			},
			cancel: function (res) {
			    alert('用户取消' + res);
			}
		});
    }

    static insertCharacter(character) {
        BlockCity.callContract({
			contractName: 'morse-genesis-3',
			amount: 0,
			methodName: 'insertcharac',
			methodParams: {
				charm: 100
				hp: 100
				inteli: 100
				luck: 40
				mp: 100
				mt: 0
				name: "morse"
				san: 100
				str: 100
			},
			success: function (result) {
		        alert('成功：' + result);
		    },
		    fail: function (result) {
		        alert('失败：' + result);
		    },
		    cancel: function (result) {
		        alert('取消：' + result);
		    }
		});	
    }

    static affectNeg(id) {
    	BlockCity.callContract({
    		contractName: 'morse-genesis-3',
			amount: 0,
			methodName: 'affectneg',
			methodParams: {
				id: id
			},
			success: function (result) {
		        alert('成功：' + result);
		    },
		    fail: function (result) {
		        alert('失败：' + result);
		    },
		    cancel: function (result) {
		        alert('取消：' + result);
		    }
    	});
    }

    static testHello() {
    	BlockCity.callContract({
    		contractName: 'morse-hello',
			amount: 0,
			methodName: 'hi',
			methodParams: {
				user: 'liuwen'
			},
			success: function (result) {
		        alert('成功：' + result);
		    },
		    fail: function (result) {
		        alert('失败：' + result);
		    },
		    cancel: function (result) {
		        alert('取消：' + result);
		    }
    	});
    }

    static playerToCharacter(player) {
    	let character = {
				name: player.name,
				hp: player.fatigue,
				mp: player.spirit,
				str: player.power,
				inteli: player.intelligence,
				san: player.gold,
				luck: player.goodness,
				charm: player.agility,
				mt: 0
			}
		return character;
    }
}

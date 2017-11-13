'use strict';
var number = 0;
module.exports = (srcPath) => {
  const Broadcast = require(srcPath + 'Broadcast');

  return  {
    listeners: {
      playerEnter: state => function (player) {
        setInterval(function(){
		  number = Math.floor(Math.random() * 101);
		  if (number < 10){
		    Broadcast.sayAt(player);
            Broadcast.sayAt(player, `<b><cyan>Robert says: <white>"Number is greater than 0"</cyan></b>`);
		  }
		  if (number > 9 && number < 21){
			Broadcast.sayAt(player);
            Broadcast.sayAt(player, `<b><cyan>Robert says: <white>"Number is greater than 10"</cyan></b>`);
		  }
		  if (number > 20 && number < 31){
			Broadcast.sayAt(player);
            Broadcast.sayAt(player, `<b><cyan>Robert says: <white>"Number is greater than 20"</cyan></b>`);
		  }
		  if (number > 30 && number < 41){
			Broadcast.sayAt(player);
            Broadcast.sayAt(player, `<b><cyan>Robert says: <white>"Number is greater than 30"</cyan></b>`);
		  }
		  if (number > 40 && number < 51){
			Broadcast.sayAt(player);
            Broadcast.sayAt(player, `<b><cyan>Robert says: <white>"Number is greater than 40"</cyan></b>`);
		  }
		  if (number > 50 && number < 61){
			Broadcast.sayAt(player);
            Broadcast.sayAt(player, `<b><cyan>Robert says: <white>"Number is greater than 50"</cyan></b>`);
		  }
		  if (number > 60 && number < 71){
			Broadcast.sayAt(player);
            Broadcast.sayAt(player, `<b><cyan>Robert says: <white>"Number is greater than 60"</cyan></b>`);
		  }
		  if (number > 70 && number < 81){
			Broadcast.sayAt(player);
            Broadcast.sayAt(player, `<b><cyan>Robert says: <white>"Number is greater than 70"</cyan></b>`);
		  }
		  if (number > 80 && number < 91){
			Broadcast.sayAt(player);
            Broadcast.sayAt(player, `<b><cyan>Robert says: <white>"Number is greater than 80"</cyan></b>`);
		  }
		  if (number > 91 && number < 99){
			Broadcast.sayAt(player);
            Broadcast.sayAt(player, `<b><cyan>Robert says: <white>"Number is greater than 90"</cyan></b>`);
		  }
		  if (number >98){
			Broadcast.sayAt(player);
            Broadcast.sayAt(player, `<b><cyan>Robert says: <white>"Secret Phrase"</cyan></b>`);
		  }
		}, 22000);
      }
    }
  };
};

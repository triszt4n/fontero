var Map = (function() {
  var module = {};
  var map = [];
  var blocksEnum = {
    WALL : 'w',
    RUBY : 'r',
    EXIT : 'e',
    WARRIOR : 'p',
    SPACE : 's'
  };



  module.parseLevel = function(contents) {
    var line = [];

    for(var index=0; index<contents.length; index++) {
      var char = contents.charAt(index);

      switch (char){
          case 'p':
            Player.constructor(0,4,"RIGHT", 100);
            map.push(Player);
            break;
          case 'r':
              console.log('Should add a ruby');
              console.log(index);
              var coin = Ruby();
              coin.init(index, 0);
              map.push(coin);
              break;
          case 's':
              console.log("Should add space = coin");
              break;
          default: break;
      }
    }
  };

  module.map = map;
return module;
})();

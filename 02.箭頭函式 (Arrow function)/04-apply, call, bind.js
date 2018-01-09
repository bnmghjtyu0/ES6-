
// function.bind(Object)
// apply, call, bind 不能用 Arrow function

// 1.bind() 綁定
var pokemon = {
  firstname:'Pika',
  lastname:'Chu',
  getPokeName: function() {
    var fullname = this.firstname + '' + this.lastname;
    return fullname;
  }
}

var pokemonName = function(snack,hobby) {
  console.log(this.getPokeName() + 'I choose you!' + snack +' '+ hobby);
}

var logPokemon = pokemonName.bind(pokemon,'a','b');
// logPokemon()

// 2.call 直接渲染出來 function.call(Object,string,string)
var logPokemonCall = pokemonName.call(pokemon,'sushi','algorithms');

// 3.apply function.call(Object,Array)
var logPokemonApply = pokemonName.apply(pokemon,['pp','kabi']);
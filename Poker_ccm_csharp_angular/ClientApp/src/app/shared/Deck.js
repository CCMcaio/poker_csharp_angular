"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Card_1 = require("./Card");
var Baralho = /** @class */ (function () {
    function Baralho() {
        this.cards = new Array(
        //Inserindo 4 de todos os naipes
        new Card_1.Card(4, 0), new Card_1.Card(4, 1), new Card_1.Card(4, 2), new Card_1.Card(4, 3), 
        //Inserindo 5 de todos os naipes
        new Card_1.Card(5, 0), new Card_1.Card(5, 1), new Card_1.Card(5, 2), new Card_1.Card(5, 3), 
        //Inserindo 6 de todos os naipes
        new Card_1.Card(6, 0), new Card_1.Card(6, 1), new Card_1.Card(6, 2), new Card_1.Card(6, 3), 
        //Inserindo 7 de todos os naipes
        new Card_1.Card(7, 0), new Card_1.Card(7, 1), new Card_1.Card(7, 2), new Card_1.Card(7, 3), 
        //Inserindo 8 de todos os naipes
        new Card_1.Card(8, 0), new Card_1.Card(8, 1), new Card_1.Card(8, 2), new Card_1.Card(8, 3), 
        //Inserindo 9 de todos os naipes
        new Card_1.Card(9, 0), new Card_1.Card(9, 1), new Card_1.Card(9, 2), new Card_1.Card(9, 3), 
        //Inserindo 10 de todos os naipes
        new Card_1.Card(10, 0), new Card_1.Card(10, 1), new Card_1.Card(10, 2), new Card_1.Card(10, 3), 
        //Inserindo Damas de todos os naipes
        new Card_1.Card(11, 0), new Card_1.Card(11, 1), new Card_1.Card(11, 2), new Card_1.Card(11, 3), 
        //Inserindo Valetes de todos os naipes
        new Card_1.Card(12, 0), new Card_1.Card(12, 1), new Card_1.Card(12, 2), new Card_1.Card(12, 3), 
        //Inserindo As de todos os naipes
        new Card_1.Card(13, 0), new Card_1.Card(13, 1), new Card_1.Card(13, 2), new Card_1.Card(13, 3));
    }
    return Baralho;
}());
exports.Baralho = Baralho;
//# sourceMappingURL=Deck.js.map
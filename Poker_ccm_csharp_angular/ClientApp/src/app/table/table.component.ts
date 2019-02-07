import { Component } from '@angular/core';
import { Baralho } from "../shared/Deck";
import { Card } from "../shared/Card";
@Component({
  selector: 'app-table-component',
  templateUrl: './table.component.html'
})
export class TableComponent {
  public deck: Baralho = new Baralho();
  public numberr = 2;

  public printDeck() {

  }
  public getCard(pos: number) {
    return this.deck.cards[pos];
  }
}

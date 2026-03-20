import { Component, signal } from '@angular/core';
import { CardComponent } from '../../components/card-component/card-component';
import { JsonPipe, SlicePipe } from '@angular/common';

const client1 = {
  name: 'Alan',
  gender: 'male',
  age: 24,
  address: 'CDMX',
};

const client2 = {
  name: 'Vanessa',
  gender: 'female',
  age: 23,
  address: 'EDOMEX',
};

@Component({
  selector: 'app-uncommon-page',
  imports: [CardComponent, SlicePipe, JsonPipe],
  templateUrl: './uncommon-page.html',
  styleUrl: './uncommon-page.css',
})
export class UncommonPage {
  // i18n Select
  protected client = signal(client1);

  protected changeClient() {
    if (this.client() === client1) {
      this.client.set(client2);
    } else {
      this.client.set(client1);
    }
  }

  // i18n Plural
  protected clients = signal([
    "Maria", 
    "Pedro",
    "Fernado",
    "Juan",
    "Gustavo",
    "Alejanddra",
    "Miguel"
  ]);

  protected deleteClient() {
    this.clients.update((client) => client.slice(1));
  }
}

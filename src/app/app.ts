import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  imports: [FormsModule],
  templateUrl: './app.html',
})
export class App implements OnInit {
  public numeroDigitado: number = 1;
  public numeroSecreto: number = 0;

  public jogoEstaFinalizazdo: boolean = false;
  public dicaNumeroMaiorQue: number = 1;
  public dicaNumeroMenorQue: number = 100;

  ngOnInit(): void {
    this.numeroSecreto = this.obterNumeroSecreto(1, 100);
  }

  public adivinhar() {
    if (this.numeroDigitado < this.numeroSecreto) this.dicaNumeroMaiorQue = this.numeroDigitado;
    else if (this.numeroDigitado > this.numeroSecreto)
      this.dicaNumeroMenorQue = this.numeroDigitado;
    else this.jogoEstaFinalizazdo = true;
  }

  public reiniciar() {
    this.numeroDigitado = 1;
    this.dicaNumeroMaiorQue = 1;
    this.dicaNumeroMenorQue = 100;
    this.jogoEstaFinalizazdo = false;
    this.numeroSecreto = this.obterNumeroSecreto(1, 100);
  }

  private obterNumeroSecreto(min: number, max: number){
    const numeroAleatorio: number = Math.random() * 100;

    const numeroSecreto = Math.floor(numeroAleatorio)

    return numeroSecreto;
  }
}

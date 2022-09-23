import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hangman-game-component',
  templateUrl: './hangman-game-component.component.html',
  styleUrls: ['./hangman-game-component.component.css']
})
export class HangmanGameComponentComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  hangmanImages: Array<string> = [
    "../../../assets/images/hangman0.png",
    "../../../assets/images/hangman1.png",
    "../../../assets/images/hangman2.png",
    "../../../assets/images/hangman3.png",
    "../../../assets/images/hangman4.png",
    "../../../assets/images/hangman5.png",
    "../../../assets/images/hangman6.png"
  ]

  guesses: number = 0;
  secretWord: string = "programming"
  guessedLetters = new Set<string>();
  guessedAsString: string = Array.from(this.guessedLetters.values()).join(" ");
  hiddenWord: string = this.hideWord();

  
  public letterInput: any = "";

  private hideWord(){
    let strArr: Array<string> = this.secretWord.split("");
    for (let i = 0; i < strArr.length; i++){
      if (strArr[i] == " "){
        strArr[i] = "  ";
      }
      else if (!this.guessedLetters.has(strArr[i]) && !"!.,'?".includes(strArr[i])){
        strArr[i] = " _ ";
      }
    }
    console.log(strArr.join(""));
    return strArr.join("");
  }

  public submitGuess(){
      if(!this.secretWord.includes(this.letterInput)){
        this.guesses += 1;
      }
      this.guessedLetters.add(this.letterInput);
      this.hiddenWord = this.hideWord();
      this.letterInput = "";
      this.guessedAsString = Array.from(this.guessedLetters.values()).join(" ");
  }
}

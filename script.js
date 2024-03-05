// რენდომ რიცხვის შექმნა 1 დან 100 ჩათვლით
const createRandomNums = Math.floor(Math.random() * 100 + 1);

let randomNumber = createRandomNums;

console.log(randomNumber);

let attempts = 0;
let guess;
let running = true;

// while loop , რომელიც მიმდინარეობს მანამ, სანამ მომხმარებელი არ გამოიცნობს რიცხვს
while (running) {
  let guess = prompt(`გამოიცანით რიცხვი 1-დან 100 ჩათვლით`);
  guess = Number(guess);

  // თამაშის სტრუქტურა if else - ებით
  if (isNaN(guess)) {
    alert(`გთხოვთ შემოიყვანოთ მხოლოდ რიცხვი`);
  } else if (guess < 1 || guess > 100) {
    alert(`რიცხვი უნდა იყოს 1-დან 100 ჩათვლით!`);
  } else {
    attempts++;
    if (guess < randomNumber) {
      alert(`ახლოს ხარ, უფრო მაღალი რიცხვი სცადე !`);
    } else if (guess > randomNumber) {
      alert(`ახლოს ხარ, უფრო დაბალი რიცხვი სცადე !`);
    } else {
      alert(
        `სწორია! პასუხია ${randomNumber}. შენ გამოსაცნობად დაგაჭირდა ${attempts} მცდელობა`
      );
      running = false;
    }
  }
}

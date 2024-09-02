/*შექმენით JavaScript ფუნქცია,რომელიც გამოიყენებს დახურვებს(closures)ქაუნთერის შესაქმნელად.ქაუნთერს უნდა შეეძლოს მნიშვნელობის გაზრდა,შემცირება და განულება.

მოთხოვნები:

-------------------------------------- I step ქაუნთერის ფუნქცია ------------------------------------------------
შექმენით ფუნქცია createCounter, რომელიც აბრუნებს ობიექტს სამი მეთოდით: increment, decrement და reset.

-------------------------------------- II step -----------------------------------------------------------------
მეთოდი Increment:
increment მეთოდმა უნდა გაზარდოს ქაუნთერი 1-ით და დააბრუნოს განახლებული მნიშვნელობა.

                                   function increment () {
                                        counter ++;
                                       return counter
                                     }

-------------------------------------- III step -----------------------------------------------------------------
მეთოდი Decrement:
decrement მეთოდმა უნდა შეამციროს ქაუნთერი 1-ით და დააბრუნოს განახლებული მნიშვნელობა.

                                          function decrement () {
                                             counter --;
                                            return counter
                                           }

--------------------------------------- IV step -----------------------------------------------------------------
მეთოდი Reset:
reset მეთოდმა უნდა დააყენოს ქაუნთერის მნიშვნელობა უკან 0-ზე:

                                             function reset () {
                                               counter = 0;
                                               return counter
                                              }

-------------------------------------------- V step -------------------------------------------------------------
დახურვების გამოყენება:
ქაუნთერის მნიშვნელობა უნდა ინახებოდეს პირად ცვლადში, რომელიც ხელმისაწვდომი და შესაცვლელია მხოლოდ დახურვაში შექმნილი მეთოდების საშუალებით.*/

//                                ----------------------> მთლიანი კოდი <---------------------

function createCounter() {
  let counter = 7;

  function increment() {
    counter++;
    return counter;
  }

  function decrement() {
    counter--;
    return counter;
  }

  function reset() {
    counter = 0;
    return counter;
  }

  return { increment, decrement, reset };
}
const { increment, decrement, reset } = createCounter();

console.log(increment());
console.log(increment());
console.log(increment());

console.log(decrement());
console.log(reset());

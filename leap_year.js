/**create a CLI app to check whether user was born in a leap year.
 * Ask user his / her name
 * Ask his / her Date of Birth (give him / her a format prompt)
 * Calculate and show him / her whether it's a leap year or not.
 * Bonus (Optional) : check the input type and show an error if user entered "potato" instead of a date format 
 */

 var readLineSync = require('readline-sync');

 var i;                                                             //loop counter
 var flag = 0;
 var stringFiltered;
 var stringFirst;
 var sF;
 var stringSecond;
 var sS;
 var stringLast;
 var sL;
 var stringMiddle1;
 var stringMiddle2;
 var length;
 
 var userName = readLineSync.question("Hi User, Please Enter your Name :- ");
 var dateOfbirth = readLineSync.question("\n\nHi " + userName + "!!! PLEASE ENTER YOUR DATE OF BIRTH IN DD/MM/YYYY FORMAT\n\n:- ");
 
 function leapYear(a)                                     //LEAP YEAR FUNCTION DEFININTION
 {
   if ((a % 4 == 0) && (a % 100 != 0) || (a % 400 == 0))
   {
     return true;
   }
   else
   {
     return false;
   }
 }
 
 stringFiltered = +(dateOfbirth.replace(/[/]/g, ""));                //removing "/" from the string altogether
 stringFirst = dateOfbirth.substr(0, dateOfbirth.length - 8)    //Extracting the first half of the string
 sF = +stringFirst;                     //changing the first half of the string into a numerical value
 stringSecond = dateOfbirth.substr(3, dateOfbirth.length - 8);  //Extracting the second half of the string
 sS = +stringSecond;                                 //changing the second half of the string into a numerical value
 stringLast = dateOfbirth.substr(6, dateOfbirth.length);  //Extracting the second half of the string
 sL = +stringLast;                                 //changing the second half of the string into a numerical value
 stringMiddle1 = dateOfbirth.slice(2, dateOfbirth.length - 7);                  //extracting "/" from the string
 stringMiddle2 = dateOfbirth.slice(5, dateOfbirth.length - 4);                  //extracting "/" from the string
 length = +(dateOfbirth.length);                                                //getting a numerical value of the length
 
 //console.log(stringFiltered);
 //console.log(stringFirst);
 //console.log(stringSecond);
 //console.log(stringLast);
 //console.log(stringMiddle1);
 //console.log(stringMiddle2);
 //console.log(sF);
 //console.log(sS);
 //console.log(sL);
 //console.log(dateOfbirth.length);
 
 if (length == 10)
 {
   if (!isNaN(stringFirst) && !isNaN(stringSecond) && !isNaN(stringLast))
   {
     if (stringMiddle1 === "/" && stringMiddle2 === "/")
     {
       if ((sF <= 31 && sS == 1) || (sF <= 29 && sS == 2 && leapYear(sL) == true) || (sF <= 28 && sS == 2 && leapYear(sL) == false) || (sF <= 31 && sS == 3) || (sF <= 30 && sS == 4) || (sF <= 31 && sS == 5) || (sF <= 30 && sS == 6) || (sF <= 31 && sS == 7) || (sF <= 31 && sS == 8) || (sF <= 30 && sS == 9) || (sF <= 31 && sS == 10) || (sF <= 30 && sS == 11) || (sF <= 31 && sS == 12))
       {
         if (leapYear(sL) == true)
         {
           console.log("\n\n\nCongratulations " + userName + "!!! You were born on a Leap year.\n\n");
           console.log(stringLast);
         }
         else if (leapYear(sL) == false)        
         {
           console.log("\n\n\nSadly " + userName + ", you weren't born on a Leap year.");
           console.log(stringLast);
         }
       }
       else
       {
         console.log("\n\n\nDATE / MONTH IS INVALID.");
       } 
     }
     else
     {
       console.log("\n\n\nFORMAT IS INCORRECT.");
     }
   }
   else
   {
     console.log("\n\n\nDATE, MONTH AND YEAR SHOULD HAVE NUMBERS ONLY.");
   }
 }
 else
 {
   console.log("\n\n\nINVALID ENTRY");
 }
 
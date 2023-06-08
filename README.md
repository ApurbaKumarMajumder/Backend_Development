## 1. HTML (Hyper Text Markup Language)

* HTML is the standard markup language for creating Web pages
* HTML describes the structure of a web page.
* HTML consists of a series of elements.
* HTML elements tell the browser how to display the content.

        * <b> - Bold text
        * <strong> - Important text
        * <i> - Italic text
        * <em> - Emphasized text
        * <mark> - Marked text
        * <small> - Smaller text
        * <del> - Deleted text
        * <ins> - Inserted text
        * <sub> - Subscript text
        * <sup> - Superscript text

## 2. CSS (Cascading Style Sheets)

* CSS describes how HTML elements are to be displayed on the screen, paper, or in other media.
* CSS saves a lot of work. It can be control the layout of multiple web pages all at once.

## 3. JS (JavaScript)

* JavaScript, often abbreviated JS, is a programming language that is one of the core technologies of the World Wide Web, alongside HTML and CSS.
* It is a lightweight, interpreted, or just-in-time compiled programming language with first-class functions.
* It is a multi purpose & multi paradigm languages.

## 4. Program And Process

* If we write a code in a file that is a program.
* Program in a running state(execution state) is called process.
        Program --> Process 
* Memory is allocated in RAM for the Program.
![Variables](./1.Basics/Images/variables.png)

## 5. Bitwise Operator

These operators don't directly operate on numbers, but instead operate on binary representation of number.

* Bitwise and -> &
* Bitwise or -> |
* Bitwise Xor -> ^
* Bitwise not -> ~
* left shift -> <<
* right shift -> >>

## 6. Functions

A JavaScript function is a block of code designed to perform a particular task. A JavaScript function is executed when "something" invokes it (calls it).

### <em>Function Invocation</em>

The code inside the function will execute when "something" invokes (calls) the function:

* When an event occurs (when a user clicks a button)
* When it is invoked (called) from JavaScript code
* Automatically (self invoked)

![Variables](./1.Basics/Images/functions.png)

### <em>Return</em>

return keyword returns an output out of the function & immediately stops the functions execution.

        console.log()

returns <b>undefiles</b> after the execution of the line.

## 7. Coercion

Every language has got some mechanism for type **interconversion**.
for example - in java if we do -> System.out.println("Hello" + 22);

The above code will print -> Hello22 i.e., it did convert 22 from integer to string & then did concatination.

Similarly this concept exist in JS also. For JS things are a bit more tricky as JS handels wide range of cases.

Coercion stands for type inter conversion.

![Type_Interconversion](./1.Basics/Images/Type_Interconversion.png)

### (i) ToPrimitive:

* The ToPrimitive abstract operation, takes an input argument and an optional **Preferred Type** argument.
* This operation converts the input to a non-object type values. If an argument is capable of getting converted into more than one primitive type, then the function uses **Preferred Type** argument to resolve it.
* As we said, this is also an abstract operation, that means it is conceptual, we cannot invoke it, but JS internally can.
* The ToPrimitive function prefers string & number conversion.
* if hint/preferred type is number then on our input argument we call valueOf() function to get a number & if it doesn't gets a primitive we call toString() function.
* otherwise, if jint argument is "String" then we call toString() & then valueOf().

![ToPrimitive](./1.Basics/Images/ToPrimitive.png) 

## Abstract Operations

These are experations/functions which are not available for end users to use. But JS internally uses it & these are mentioned in the official docs to actually aid the documentation.

for example: ToString, ToNumber, ToBoolean, ToPrimitive etc.

We cannot directly ccall them. But few JS operations like '-'(subtraction), '+'(addition) etc. Internally calls them & hence we can mimic them using these operations.

C++, Java, C -> types exist for variables.
        
        int x = 10;

JavaScript -> types exist for values.

        let x = 10; // now x = number
        x = "str"; // type conversion is allowed

"Everything in JS is an Object" -> false statement.

first abstract operation that we need to learn is **ToPrimitive**.

1. ToNumber Function:

Whenever in an number operation we don't have a number, ToNumber() is called.
For example **subtraction operation**.

![ToPrimitive](./1.Basics/Images/toNumber.png)

We can use '-' operation to mimic ToNumber.

![subtraction](./1.Basics/Images/subtraction.png)


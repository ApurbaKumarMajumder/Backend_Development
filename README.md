# 1. HTML (Hyper Text Markup Language)

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

# 2. CSS (Cascading Style Sheets)

* CSS describes how HTML elements are to be displayed on the screen, paper, or in other media.
* CSS saves a lot of work. It can be control the layout of multiple web pages all at once.

# 3. JS (JavaScript)

* JavaScript, often abbreviated JS, is a programming language that is one of the core technologies of the World Wide Web, alongside HTML and CSS.
* It is a lightweight, interpreted, or just-in-time compiled programming language with first-class functions.
* It is a multi purpose & multi paradigm languages.

# 4. Program And Process

* If we write a code in a file that is a program.
* Program in a running state(execution state) is called process.
        Program --> Process 
* Memory is allocated in RAM for the Program.
![Variables](./1.Basics/Images/variables.png)

# 5. Bitwise Operator

These operators don't directly operate on numbers, but instead operate on binary representation of number.

* Bitwise and -> &
* Bitwise or -> |
* Bitwise Xor -> ^
* Bitwise not -> ~
* left shift -> <<
* right shift -> >>

# 6. Functions

A JavaScript function is a block of code designed to perform a particular task. A JavaScript function is executed when "something" invokes it (calls it).

## <em>Function Invocation</em>

The code inside the function will execute when "something" invokes (calls) the function:

* When an event occurs (when a user clicks a button)
* When it is invoked (called) from JavaScript code
* Automatically (self invoked)

![functions](https://github.com/ApurbaKumarMajumder/Backend_Development/assets/65047407/847dfe30-be52-4781-a706-57f27cdcc742)

## <em>Return</em>

return keyword returns an output out of the function & immediately stops the functions execution.

        console.log()

returns <b>undefiles</b> after the execution of the line.

# 7. Coercion

Every language has got some mechanism for type **interconversion**.
for example - in java if we do -> System.out.println("Hello" + 22);

The above code will print -> Hello22 i.e., it did convert 22 from integer to string & then did concatination.

Similarly this concept exist in JS also. For JS things are a bit more tricky as JS handels wide range of cases.

Coercion stands for type inter conversion.

![Type Interconversion](https://github.com/ApurbaKumarMajumder/Backend_Development/assets/65047407/e64545a1-fc2e-447b-bb96-3cfd467b9f5f)

# 8. What is the difference between == and === ?

== is the **abstract equality comparison operator** and === is the **strict equality comparison operator**. They both are ways to check for equality.

![equality](https://github.com/ApurbaKumarMajumder/Backend_Development/assets/65047407/ace18f9a-22fd-4660-af5b-6a423cc3f9aa)

Actually both == and === checks the types but the difference is both of them do something different after checking the type.

So == does type checking and if types are same it calls === for further operations.

=== checks types & if types are not same return false.

The main difference is

    i. abstract equality (==) does coercion if types are not same.
    ii. strict equality (===) never does coercion.

    Note: In JS NaN is the only Primitive value not equal to itself.

# 9. NaN (Not a Number)

typeOf(NaN) -> number

It doesn't actually mean not a number, rather it gives notion of an invalid number.

![nan](https://github.com/ApurbaKumarMajumder/Backend_Development/assets/65047407/438348e6-fd47-497e-8882-fc8f3626f18c)

# 10. isNaN (function with some issues)

This isNaN function coerces the argument before checking for NaN. Now String is not NaN right?? but when we convert "abc" to a number it becomes NaN and hence isNaN returns true.

# 11. Types Of Programming Language

While developning apps, we might encounter multiple programming languages. Every language might of different properties.

Based how the language executes the code we can categories languages in the following:

    1. Compiled -> C++
    2. Interpreted -> shellScript
    3. Hybrid -> both compiled and interpreted

JavaScript is Hybrid.

# 12. Boxing

It is a phenomenon in JS where it tries to convert primitive into objects.

Boxing can be:

    1. Manual
    2. Automatic

# 13. Scopes

In Simple words, scopes is simply where to look for things. What are we looking for? We are looking for variables & functions.

We have more or less 3 types of scopes in JavaScript:

    1. Global Scope
    2. Function Scope
    3. Block Scope

## 1. Global Scope

If a variable is present in a global scope, then it is accessable everywhere in the JS file.

Q. But how do we define a variable in global scope?

There are many ways -> one of the way is to declare/define variables outside any function.

## 2. Function Scope

In a function, the visibility of a variable/function is just inside the outer function.

    function fun() {
        var x = 10; // here x is just accessable inside fun or we can say it is local to fun.
    }

## 3. Block Scope

In JS we can use a pair of curly braces to declare a block.

Now if a variable/function is only accessable/visible inside a bloxk then it will be having block scope.

# 14. let, var & const

## 1. var 

    Whenever we use a var anywhere inside a function, the variable gets function scope.

    If we use it outside a function, no matter if it is enclosed in a block or not, it will give the variable global scope.

    Note: var do allow redeclaration.

## 2. let

    Whenever we initialise a variable with let, it always gets the scope of enclosing Block.

    If we declare, let outside any block, then it doesnot get complete global scope.

    Note: let will not let you do redeclarations but reassignment is fine. 
    
    If you initialize a variable with let outside anyblock, then also it will not become accessable completely in the global scope, but if you do with var, it will be.

## 3. const

    It also has block scope, (same as let) the only difference is it doesn't allow reassignmeant.

    const y = 10;
    y = 22; // error

# How JS, parses the code?

So we know that JS is not interpreted, it definetely is hybrid i.e. compiled + interpreted.

So wheneven we try to execute a JS code, JS first parses the whole code, in this parsing phase it assigns scopes to variables / function. Once done, then it reads the code & executes it.

Every variable in your code will be used in one of the following ways:

1. Either it will be getting a value assigned i.e. it is used as a target.

    (x is the target)    x = 10

2. or it will be used to retrieve a value i.e. it will be used as source.

    y = 10 + x (x is the source in this code)

What JS does is, it will start the parsing phase. Outside every thing it maintains global scope, but the moment it goes inside a function it starts maintaining scope of that function also.

    var teacher = "Sanket";
    function fun() {
        var teacher = "Pulkit";
        console.log(teacher);
    }
    fun();

<ins>Phase 1:</ins> Parsing -> we will just do scope resolution.

![phase 1](https://github.com/ApurbaKumarMajumder/Backend_Development/assets/65047407/4bd8c370-6207-4dd6-a3a9-afd37b5d8390)

Whenever we declare a variable using var/let/const or initialise a function it is a **Formal Declaration**.

In the parsing phase JS looks for formal declarations only. In this phase we only allocate scope, not values of the variables. THe moment we go in a function, we maintain a new scope as well i.e. **function scope**.

<ins>Phase 2:</ins> Execution

![code execution](https://github.com/ApurbaKumarMajumder/Backend_Development/assets/65047407/e5f37f20-9478-43c1-ac3b-e8535f450d5a)

Auto Globals -> In JS if we keep searching scope of variable in outerscopes & no where find it, we automatically consider it in global scope. This happens during execution phase.

autoglobals only works with target reference & not source.

![4](https://github.com/ApurbaKumarMajumder/Backend_Development/assets/65047407/c2b78d4e-b8b9-4553-ad55-d1250d907ee3)

![2](https://github.com/ApurbaKumarMajumder/Backend_Development/assets/65047407/98591f6c-67f3-4fb2-9b80-e1841330867b)

# Undefined vs Undeclared

Undefined is a variable state when the scopes already know about it but in the execution phase we have not allocated it a value yet.

Undeclared is a variable state when we never formally declared a variable before assignning it a value so that it has chances to become autoglobal, we try to use it.

# Hoisting

Hoisting is a direct consequence of lexiccal parsing that happens in JS, due to which we are able to access some function & variables before declaring them which gives us a notion that they are moved up in the file.

# Function Expresion

![1](https://github.com/ApurbaKumarMajumder/Backend_Development/assets/65047407/688b788c-2aef-4043-9163-1274d2a30d07)

In JS, we can pass functions as an argument to another function.

Function Expression are of 2 types:

1. Anonymous
2. Named

![scope of function expression](https://github.com/ApurbaKumarMajumder/Backend_Development/assets/65047407/5d694db7-841b-4ba7-9082-a898a4fcea9a)

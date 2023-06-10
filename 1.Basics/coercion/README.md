# 1. ToNumber

this are some examples of type conversions.
![ToNumber1](./ToNumber1.png)

more..

![ToNumber2](./ToNumber2.png)

# 2. ToString

We can use '+' operator to mimic ToString operation for representation.
 
![ToString](./tostring.png)

more of the string operations.

![ToString](./tostring1.png)

# 3. ToPrimitive

(internally calls Ordinary to primitive)

This function takes an input argument and tries to convert it into a non object type (primitive type), but if it can't convert it can throw error.

It takes one more optional parameter called as preferred type. If we have 2 or more than 2 values that can became answer, this opition argument helps us.

* if Preferred type is not given, hint(new variable we initialize) = 'default'
* else if preferredtype is "String", hint = "String"
* else preferredtype is "Number", hint = "Number"

    if hint is "default" then hint = "Number"

![ToPrimitive](./ToPrimitive.png)

ValueOf() and toString() are not abstract operations. That means we can call them.

By default toString() on a object returns -> '[object Object]' (this is a random string JS returns)

By default valueOf() -> on an object returns same object.

for array -> valueOf -> same array toString -> print array without parentheses.

# ToBoolean

The ToBoolean abstract operation converts the given type to a Boolean value. ToBoolean works a bit differently when compared to ToString as ToNumber.

It maintains a list of values which when received as an argument returns False. And everything apart from the list of values returns True.

List of Falsy values ->

    null
    undefined
    +0
    -0
    NaN
    "" (empty string)
    false

if we get any one of these values in the argument we return False else we return True.

Q. How can we test the ToBoolean operation?

Ans: We can use **logical Not Operator(!)** 

![logicalNot](./logicalNot.png)
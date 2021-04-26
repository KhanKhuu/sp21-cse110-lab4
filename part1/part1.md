# Lab 4

## Part 1a

1. What is printed by line 9? If the code returns an error, explain why.
   - `values added: 20`

2. What is printed by line 13? If the code returns an error, explain why. 
   - `final result: 20`

3. What is printed by line 9? If the code returns an error, explain why.
    - `values added: 20`
4. What is printed by line 13? If the code returns an error, explain why. 
    - The code returns a `ReferenceError` because result is a `let` variable that was declared within the `if(add)` block, and the code is trying to print it outside of that block.

5. What is printed by line 9? If the code returns an error, explain why.
   - Nothing is printed by the code, because the code assigns a new value to a `const` variable. producing a TypeError before anything can be printed

6. What is printed by line 13? If the code returns an error, explain why. 
    - Nothing is printed by the code, because the code assigns a new value to a `const` variable. producing a TypeError before anything can be printed

## Part 1b

1. What will happen at line 12 and why? If the code causes an error, explain why
    - `3` will be printed at line 12 because `i` is a `var` variable and therefore its scope is the entire function, and thus it is accesible at line 12. The given list is size 3, so that is the number `i` was incremented to during the `for` loop.

2. What will happen at line 13 and why? If the code causes an error, explain why.
    - `150` is printed at line 13 because `discountedPrice` is a `var` variable and therefore its scope is the entire function, and thus it is accesible outside the `for` loop at line 13. 

3. What will happen at line 14 and why? If the code causes an error, explain why.
    - `finalPrice` will be printed, in this case it's value will be `150`. Even a `let` variable would have behaved this way since it is declared outside the `for` loop block.

4. What will this function return? Give a brief explanation why. If the code causes an error, explain why.
    - It will return `[50, 100, 150]` because `discounted` was appended to in the for loop with these numbers in this order. THere are no issues with scope because `discounted` is accessible anywhere in the function.

5. What will happen at line 12 and why?  If the code causes an error, explain why (assume this function is being called like the others: discountPrices([100, 200, 300], 0.5)).
    - We will get a `ReferenceError` because `i` is not accessible outside of the `for` block since it is a `let` variable variable declared within the `for` block.

6. What will happen at line 13 and why? If the code causes an error, explain why.
    - We will get a `ReferenceError` because `discountedPrice` is not accessible outside of the `for` block since it is a `let` variable declared within the `for` block.

7. What will happen at line 14 and why? If the code causes an error, explain why.
    - `finalPrice` will be printed, in this case its value being `150`, since it is a `let` variable declared within the same scope as the `log` call, outside of the `for` loop block.

8. What will this function return? Give a brief explanation. If the code causes an error, explain why.
    -  It will return `[50, 100, 150]` because `discounted` was appended to in the for loop with these numbers in this order. THere are no issues with scope because `discounted` is accessible anywhere in the function since it was declared outside of the `for` loop block.

9. What will happen at line 11 and why? If the code causes an error, explain why.
    - We will get a `ReferenceError` because `i` is not accessible outside of the `for` block since it is a `let` variable variable declared within the `for` block.

10. What will happen at line 12 and why? If the code causes an error, explain why.
    - The code will print `length`, in this case `3` bacause that is the length of the argument for `prices`. There is no issue with printing a `const` value within its scope, which is what `length` is.

11. What will this function return? Give a brief explanation. If the code causes an error, explain why.
    -  It will return `[50, 100, 150]` because `discounted` was appended to in the for loop with these numbers in this order. THere are no issues with scope because `discounted` is accessible anywhere in the function since it was declared outside of the `for` loop block. The fact that it is a `const` item does not prevent its being pushed to because the object is not being assigned anything new, it is just get its `push` function called. `const` only prevents reassignment.

12. (notation examples for the student object)
    - A. student.name
    - B. student['Grad Year']
    - C. student.greeting()
    - D. student['Favorite Teacher'].name
    - E. student.courseLoad[0]

13. Arithmetic
    - A. `'32'` because the integer is converted to a string and the `+` operator concatenates strings
    - B. `1` because subtraction is for integers, so it converts the string to an integer and subtracts 2
    - C. `3`, because null is equivalent to 0 when treated as an integer
    - D. `'3null'`, because the `+` operator concatenates strings when that is the argument and `null`'s string is `'null'`
    - E. `4`, because `true` is treated as integer `1`
    - F. `0`, because both `false` and `null` map to integer `0`

14. Comparison
    - A. `true`, because `2` is mapped to integer `2` and it is greater than `1`
    - B. `false`, because `2` comes after `1` in the alphabet and that is how the operator `<` compares strings
    - C. `true`, because the `2` is cast to `2` and `2==2` is `true`
    - D. `false` because the types are different, and `===` test for equality of both the values and the types
    - E. `false`, because `true` maps to `1` and `1==2` is `false`
    - F. `true` because `Boolean()` maps any nonzero integer to `true`, and `2` is a nonzero integer

15. Explain the difference between the == and === operators.
    - `==` compares just the values of the lhs and rhs, while `===` compares both the value and the type of the operands. For example, `'1'==1` is `true` because string `'1'` maps to integer `1`, but `'1'===1` is `false` because a string is not an integer

17. If the function above is called with the following parameters modifyArray([1,2,3], doSomething), what will be the result? Briefly walk through how you arrived at that result. (This should be in your part1.md). Here we are passing in a function as a parameter, however we can also return a function from another function just as easily, you're encouraged to play around with callbacks as they are used heavily in frontend JS development. 
    - The result is that `newArr` is returned as `[2,4,6]`. This is because `modifyArray` `push`es values to `newArr` as they are returned from `callback`, which in this case is `doSomething`. `doSomething` merely multiplies the given number by `2` and thus `newArr` gets each value of `array` (namely `[1,2,3]`) doubled.

19. `'1\n4\n3\n2'` because the `3` gets printed after waiting `0` seconds, and the overhead for making sure that happens amounts to it coming just after `4` which doesn't have to set a timeout and the `4` gets printed after `1000` milliseconds because we assigned the function to be run after that timeout value.

## Part 2
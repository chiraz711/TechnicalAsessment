# Part III: Functions

*Note: Before getting started on these exercises, please be certain that you've read through the root [README.md](../README.md) file in this repository.*

## Exercises

### Basic Requirements

1. In your console, copy the following function and verify
   that the following invocations match your expectations:

   ```js
   function square(num){
      return num * num;
   }

   square(10) + 2;//102
   square(100) + square(77);//15929
   square(8 / 2)//16
   square(2 + 17);//361
   square(square(15));//50625
   ```

2. Write a sentence in plain English describing how `square(square(15))` is
   evaluated.
   square(15)=15*15
   square(square(15))=15*15*15*15

3. Rename `square`'s `num` parameter in your above code to `monkey`, and
   rename the uses of that parameter in the body to `monkey` as well. Will the
   function `square` still work? Why or why not?

   function square(monkey){
      return monkey * monkey;
   }
   square(10) //100




4. What is wrong with the following definitions of `square`? Write a sentence or
   two describing the issue(s); then, try copying the erroneous examples into a
   console one-at-a-time and observing the error(s) generated (you may have to
   attempt to invoke the functions to see the error). What errors are produced
   (if any) for each erroneous version? Do the errors make sense?

   ```js
   function square(monkey) {
     return x * x;
   }
   //x is not defined error

   function square(5) {
     return 5 * 5;
   }
   //unexpted number error


   function square("x") {
     return "x" * "x";
   }
   //unexpted string error
   ```

5. Fix the invalid syntax in the following functions (you can copy and paste these
   invalid definitions into your console and then edit them there):

   ```js
   func square1(x) {
     return x * x;
   }

   function square2 (x){
     return x * x;
   }

   function  square3 (x) {
     return x * x;}
   ```

6. The following functions exhibit poor style -- fix these issues using the
   original version of `square` as a reference.

   ```js
   function square(x){
    return x*x;
    }

   function square (x) { 
    return x*x;
   }

   function square(x)
   {
   return x*x;
   }
   ```

7. Complete the function `cube` that returns the cube of x:

  ```js
  function cube(x) {
    return x*x*x;
  }
  ```

8. Complete the function `fullName` that should take two parameters, `firstName`
   and `lastName`, and returns the `firstName` and `lastName` concatenated
   together with a space in between.

  ```js
  // don't forget the parameters!
  function fullName(firstName,lastName) {
    return firstName + " " + lastName;
  }
  fullName("John", "Doe") // => "John Doe"
  ```

9. Write a function `average` that takes two numbers as input (parameters), and
   returns the average of those numbers.

   function average(x,y){
    return (x+y)/2;
   }

10. Write a function `greeter` that takes a name as an argument and *greets*
    that name by returning something along the lines of `"Hello, <name>!"`

    function greeter(name){
       return "hello ," + " " + "<" +name+ ">!"; 
    }

11. Using the document found at <a href="http://www.gbcnv.edu/documents/ASC/docs/00000005.pdf" target="_blank">this link</a>, translate the first page of geometric
    formulas into JavaScript functions.

    As an example, a function to compute the perimeter of a rectangle might look
    like this:

    ```js
    function perimeterRect(l, w) {
      return 2 * (l + w);
    }
   
    function areaRect(l,w){
      return l*w;
    }
    function perimeSquare(s){
      return 4*s;
    }
    function areaSquare(s){
      return s*s;
     }
    function areaParallelogram(l,h){
      return l*h;
     }

     function perimetreParallelogram(l,h){
      return (2*l)+(2*h);
     }

     function areaTrapezoid(h,b1,b2){
      return (1div2)*h*(b1+b2);
     }
     function PerimetreTrapezoid(s1,s2,b1,b2){
      return s1+s2+b1+b2;
     } 
     function areatriangle(b,h){
      return 0.5*b*h;
     }
     function Perimetretriangle(b,s1,s2){
      return s1+s2+b;
     }
     function volumrectangularsolid(l,w,h){
      return l*w*h;
     }
     function surfacerectangularsolid(l,w,h){
      return (2*l*h)+(2*w*h)+(2*w*l);
     }
     function volumecube(s){
      return s*s*s;
     }
     function surfacecube(s){
      return 6*s*s;
     }
      function volumecylindre(r,h){
        return (Math.PI)*r*r*h;
      }
      function surfacecylindre(r,h){
        return (2*(Math.PI))*(r*h)+(2*(Math.PI))*r*r;
      }
      function volumesphere(r){
        return 4/3*(Math.PI)*r*r*r;
      }
      function surfacesphere(r){
        return 4*(Math.PI)*r*r;
      }
      function circularconevolume(r,h){
        return 1/3*(Math.PI)*r*r*h;
      }
      function surfacecurlar(r,h){
        return (Math.PI)*r*(Math.sqrt(r*r)+(h*h));
      }
      function pyramidevolume(l,w,h){
        return 1/3*l*w*h;
      }
      function conevolume(r,R,h){
       
      return  Math.PI *( r*r + r*R + R*R) * h /3;
      }
      function conesurface(s,r,R){
        return Math.PI * s *(R+r);

      }
      function perimetrecercle(r){
         return 2*r*(Math.PI);
     }
      function areacercle(r){
        return (Math.PI) * r* r;
      }
      
     
    ```
    

    **NOTE:** JavaScript provides some nifty mathematical functions and
    constants built into the language that you'll need for this exercise. The
    two that we'll be making use of are:

    ```js
    Math.PI; // => 3.141592653589793
    Math.sqrt(256); // => 16

    
    ```

    To test your answers, you'll need to:

    1. Code your function in the console in the way that you think it will work
    2. Call the function with arguments in the console to see the result, e.g.
      `perimeterRect(2, 6)`.
    3. Eventually, you may want to verify that the output is correct. Google is a
       great tool for this:

       


![google geometry answer](google-geometry-answer.gif)

### More Practice

Translate the rest of the geometric formulas found <a href="http://www.gbcnv.edu/documents/ASC/docs/00000005.pdf" target="_blank">here</a> into JavaScript functions.

### Advanced (extra practice)

1. Compound interest can be calculated with the formula:

    ![future value](future-value.png)

    - *F*: future value
    - *P*: present value
    - *i*: nominal interest rate
    - *n*: compounding frequency
    - *t*: time

  Write a function `futureValue` that can be used to calculate the *future value*
  of a quantity of money using compound interest.


  Use the function to calculate what the future value of $1700 (*P* = 1700)
  deposited in a bank that pays an annual interest rate of 4.7% (*i* = 0.047),
  compounded quarterly (*n* = 4) after 6 years (*t* = 6) (you can use `Math.pow`
  to do exponentiation).

  function futureValue(p,i,n,t){
    var x=1+i/n;
    return p*Math.pow(x,n*t);
  }



2. Write a `power` function that accepts the parameters `base` and `exponent`
   and returns the result. Replace `square` and `cube` with the `power` function
   you just wrote. Do not use `Math.pow`.
    
    function power(base,exponent){
     return Math.pow(base,exponent);
    }
    
    function power(base,exponent){
      var result=1;
      for(var i=0;i<exponent;i++){
          result=result*base;
        
      }
        return result;
    }


3. Write your own square-root function called `sqrt` that accepts a `number`
   parameter and returns an approximate square root. Square-root approximations
   make use of averages. Be sure to use the `average` function you previously
   wrote. The first version of your square root function should perform no more
   than 3 successive averages.

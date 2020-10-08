# Fibonacci series Problem solution in Python

# A series of numbers in which each number (Fibonacci Number) is the sum of the two precending numbers. The simplest is the series 1,1,2,3,5,8,13,etc

def fib(n):
    if n < 2:
        return n
    
    return fib(n - 1) + fib(n - 2)

print(fib(9))
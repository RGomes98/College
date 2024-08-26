﻿using System;

namespace BasicCSharpConcepts
{
    class Program
    {
        static void Main(string[] args)
        {
            Calculator calculator = new Calculator();
            int staticMethodResult = Calculator.Sum(5, 5);
            Console.WriteLine($"5 plus 5 equals: {staticMethodResult}");
            Console.WriteLine($"2 multiplied by 20 equals: {calculator.Multiply(2, 20)}");
            Console.WriteLine($"10 multiplied by 5 equals: {calculator.Multiply(10, 5)}");
            Console.WriteLine($"10 divided by 5 equals: {calculator.Divide(10, 5)}");
            Console.WriteLine($"10 minus 5 equals: {calculator.Subtract(10, 5)}");

            IsPrime isPrimeFunctions = new IsPrime();
            Console.WriteLine($"Is 11 a prime number?  {isPrimeFunctions.IsPrimeUnoptimized(11)}");
            Console.WriteLine($"Is 8 a prime number? {isPrimeFunctions.IsPrimeOptimized(8)}");
        }
    }

    public class Calculator
    {
        public static int Sum(int a, int b)
        {
            return a + b;
        }

        public int Multiply(int a, int b)
        {
            return a * b;
        }

        public int Divide(int a, int b)
        {
            return a / b;
        }

        public int Subtract(int a, int b)
        {
            return a - b;
        }
    }

    public class IsPrime
    {
        public bool IsPrimeOptimized(int n)
        {
            for (int i = 2; i <= Math.Sqrt(n); i++)
            {
                if (n % i == 0)
                {
                    return false;
                }
            }

            return n > 1;
        }

        public bool IsPrimeUnoptimized(int n)
        {
            if (n < 2)
            {
                return false;
            }

            int count = 0;
            for (int i = 1; i <= n; i++)
            {
                if (n % i == 0)
                {
                    count++;
                }
            }

            return count == 2;
        }
    }
}

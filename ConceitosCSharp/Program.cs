using System;

namespace BasicCSharpConcepts {
    class Program {
        static void Main(string[] args) {
            Console.Write("Enter your name: ");
            string? name = Console.ReadLine();

            Console.Write("Enter your age: ");
            string? ageInput = Console.ReadLine();
            int age;

            if (!int.TryParse(ageInput, out age)) {
                Console.WriteLine("Invalid age input.");
                return;
            }

            Console.Write("Enter your height: ");
            string? heightInput = Console.ReadLine();
            double height;

            if (!double.TryParse(heightInput, out height)) {
                Console.WriteLine("Invalid height input.");
                return;
            }

            Console.WriteLine($"Hello, {name}. You are {age} years old and {height}m tall.");
            
            if (age >= 18) {
                Console.WriteLine("You are an adult.");
            } else {
                Console.WriteLine("You are a minor.");
            }

            for (int i = 1; i <= 5; i++) {
                Console.WriteLine($"Count: {i}");
            }

            int[] numbers = { 1, 2, 3, 4, 5 };
            foreach (int number in numbers) {
                Console.WriteLine($"Number: {number}");
            }

            SeparateText("This is a message from a method!");

            Person person = new Person(name, age);
            person.Introduce();

            string[] hobbies = { "Working out", "Gaming", "Programming" };
            Console.WriteLine("Your hobbies are:");
            foreach (var hobby in hobbies) {
                Console.WriteLine(hobby);
            }
        }

        static void SeparateText(string message) {
            string text = "";
            
            for (int i = 0; i < message.Length; i++) {
                if (message[i] == ' ') continue;
                if (i % 2 == 0) {
                    if (text.Length > 0) {
                        text += $"-{message[i]}";
                    } else text += $"{message[i]}";
                }
            }
            
            Console.WriteLine(text);
        }
    }

    class Person {
        public string? Name { get; set; }
        public int Age { get; set; }

        public Person(string? name, int age) {
            Name = name;
            Age = age;
        }

        public void Introduce() {
            Console.WriteLine($"My name is {Name} and I am {Age} years old.");
        }
    }
}

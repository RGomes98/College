﻿namespace TrabalhoPOOGrupo3
{
    class Program
    {
        static void Main(string[] args)
        {
            DesafiosGrupo3.Menu();
        }
    }

    public class DesafiosGrupo3
    {
        public static void Menu()
        {
            Console.WriteLine(
                $"Escolha uma opção:\n"
                    + "(0) Sair\n"
                    + "(1) Somar números\n"
                    + "(2) Converter de metros para milímetros\n"
                    + "(3) Aluguel de Carro\n"
                    + "(4) Calcular Báskara"
            );

            switch (Console.ReadLine())
            {
                case "0":
                    Console.WriteLine("Saindo do menu.");
                    return;
                case "1":
                    DesafiosGrupo3.Sum();
                    break;
                case "2":
                    DesafiosGrupo3.MetersToMillimeters();
                    break;
                case "3":
                    DesafiosGrupo3 challenges = new DesafiosGrupo3();
                    challenges.RentCar();
                    break;
                case "4":
                    DesafiosGrupo3.Bhaskara();
                    break;
                default:
                    Console.WriteLine("Opção inexistente!");
                    break;
            }
        }

        public static int Sum()
        {
            Console.WriteLine("Digite o valor de A:");
            string? aInput = Console.ReadLine();
            int a;

            if (!Int32.TryParse(aInput, out a))
                throw new ArgumentException("Valor de A inválido.");

            Console.WriteLine("Digite o valor de B:");
            string? bInput = Console.ReadLine();
            int b;

            if (!Int32.TryParse(bInput, out b))
                throw new ArgumentException("Valor de B inválido.");

            Console.WriteLine($"A soma dos números {a} e {b} é igual a {a + b}.");
            return a + b;
        }

        public static int MetersToMillimeters()
        {
            const int METER_TO_MM_FORMULA = 1000;

            Console.WriteLine("Digite um valor em metros para ser convertido para milímetros:");
            string? input = Console.ReadLine();
            int meters;

            if (!Int32.TryParse(input, out meters))
                throw new ArgumentException("Valor de B inválido.");

            Console.WriteLine(
                $"A conversão de {meters} metro(s) para milímetros é {meters * METER_TO_MM_FORMULA}mm."
            );

            return meters * METER_TO_MM_FORMULA;
        }

        public static double Bhaskara()
        {
            Console.WriteLine("Digite o valor de A:");
            string? aInput = Console.ReadLine();
            int a;

            if (!Int32.TryParse(aInput, out a))
                throw new ArgumentNullException("Valor de A inválido.");

            Console.WriteLine("Digite o valor de B:");
            string? bInput = Console.ReadLine();
            int b;

            if (!Int32.TryParse(bInput, out b))
                throw new ArgumentNullException("Valor de B inválido.");

            Console.WriteLine("Digite o valor de C:");
            string? cInput = Console.ReadLine();
            int c;

            if (!Int32.TryParse(cInput, out c))
                throw new ArgumentNullException("Valor de C inválido.");

            Console.WriteLine($"Δ = b² - 4ac");
            Console.WriteLine($"Δ = ({b})² - 4 * {a} * {c}");
            Console.WriteLine($"Δ = {Math.Pow(b, 2)} - 4 * {a} * {c}");
            Console.WriteLine($"Δ = {Math.Pow(b, 2)} - ({4 * a * c})");
            Console.WriteLine($"Δ = {Math.Pow(b, 2) - 4 * a * c}");

            return Math.Pow(b, 2) - 4 * a * c;
        }

        public Car RentCar()
        {
            Console.WriteLine("Digite a quantidade de dias de aluguel:");
            string? daysInput = Console.ReadLine();
            int days;

            if (!Int32.TryParse(daysInput, out days))
                throw new ArgumentException("Número de dias inválido.");

            Console.WriteLine("Digite o preço diário do aluguel:");
            string? rentPriceInput = Console.ReadLine();
            double rentPrice;

            if (!Double.TryParse(rentPriceInput, out rentPrice))
                throw new ArgumentException("Preço inválido.");

            Console.WriteLine("Digite a marca do carro:");
            string? make = Console.ReadLine();

            if (make is null)
                throw new ArgumentNullException("Marca inválida.");

            Console.WriteLine("Digite o modelo do carro:");
            string? model = Console.ReadLine();

            if (model is null)
                throw new ArgumentNullException("Modelo inválido.");

            Console.WriteLine("Digite o ano de fabricação do carro:");
            string? yearInput = Console.ReadLine();
            int year;

            if (!Int32.TryParse(yearInput, out year))
                throw new ArgumentException("Ano inválido.");

            var car = new Car(make, year, model, rentPrice);
            var totalRentPrice = car.CalculateRentPrice(days);

            Console.WriteLine($"Informações do Aluguel:");
            Console.WriteLine($"Modelo: {car.Model}");
            Console.WriteLine($"Marca: {car.Make}");
            Console.WriteLine($"Ano: {car.Year}");
            Console.WriteLine($"Tarifa Diária: R${car.RentPrice}");
            Console.WriteLine($"Valor Total do Aluguel por {days} dia(s): R${totalRentPrice}");

            return car;
        }
    }

    public class Car
    {
        public string Make { get; set; }
        public string Model { get; set; }
        public double RentPrice { get; set; }
        public int Year { get; set; }

        public Car(string make, int year, string model, double price)
        {
            Make = make;
            Year = year;
            Model = model;
            RentPrice = price;
        }

        public double CalculateRentPrice(int numberOfDays)
        {
            if (numberOfDays < 1)
                throw new ArgumentException("O número de dias precisa ser maior que 0.");

            return RentPrice * numberOfDays;
        }
    }
}

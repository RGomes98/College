namespace UnitTests;

using BasicCSharpConcepts;

[TestClass]
public class UnitTests
{
    [TestMethod]
    public void CalculatorTest()
    {
        Calculator calculator = new Calculator();
        Assert.AreEqual(calculator.Multiply(2, 3), 6);
    }

    [TestMethod]
    public void IsPrimeTest()
    {
        IsPrime isPrimeFunctions = new IsPrime();
        Assert.IsTrue(isPrimeFunctions.IsPrimeOptimized(11));
        Assert.IsTrue(isPrimeFunctions.IsPrimeUnoptimized(97));
    }
}

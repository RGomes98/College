namespace TrabalhoPOOGrupo3Testes;

using TrabalhoPOOGrupo3;

[TestClass]
public class UnitTest1
{
    [TestMethod]
    public void TestSum()
    {
        int sum = DesafiosGrupo3.Sum(20000, 20000);
        Assert.AreEqual(40000, sum);
        Assert.AreNotEqual(40001, sum);
    }

    // [TestMethod]
    // public void TestSum1()
    // {
    //     int sum = DesafiosGrupo3.Sum(20000, 20000);
    //     // Dar errado
    //     Assert.AreEqual(40001, sum);
    // }

    [TestMethod]
    public void TestMetersToMillimeters()
    {
        int millimeters = DesafiosGrupo3.MetersToMillimeters(100);
        Assert.AreEqual(100000, millimeters);
        Assert.AreNotEqual(100001, millimeters);
    }

    // [TestMethod]
    // public void TestMetersToMillimeters1()
    // {
    //     int millimeters = DesafiosGrupo3.MetersToMillimeters(100);

    //     // Dar errado
    //     Assert.AreEqual(100001, millimeters);
    // }

    [TestMethod]
    public void TestBhaskara()
    {
        double bhaskara = DesafiosGrupo3.Bhaskara(80, 20, 40);
        Assert.AreEqual(3200, bhaskara);
        Assert.AreNotEqual(3200.5, bhaskara);
    }

    // [TestMethod]
    // public void TestBhaskara1()
    // {
    //     double bhaskara = DesafiosGrupo3.Bhaskara(80, 20, 40);

    //     // Dar errado
    //     Assert.AreEqual(32000, bhaskara);
    // }

    [TestMethod]
    public void TestRentCar()
    {
        Car car = new Car("AUDI", 2042, "AU777", 600.00);
        double rent = car.CalculateRentPrice(10);
        Assert.AreEqual(6000.00, rent);
        Assert.AreNotEqual(6000.20, rent);
    }

    // [TestMethod]
    // public void TestRentCar1()
    // {
    //     Car car = new Car("AUDI", 2042, "AU777", 600.00);

    //     double rent = car.CalculateRentPrice(10);

    //     // Dar errado
    //     Assert.AreEqual(6000.20, rent);
    // }
}

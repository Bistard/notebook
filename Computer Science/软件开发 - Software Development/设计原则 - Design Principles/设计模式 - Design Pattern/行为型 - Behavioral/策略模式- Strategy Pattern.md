# 策略模式 - Strategy Pattern

在策略模式（Strategy Pattern）中，一个类的行为或其算法可以在运行时 (runtime) 更改。这种类型的设计模式属于行为型模式。

* 该策略也是一种对于ISP principle和DIP principle的体现。

在策略模式中，我们创建表示各种策略的对象和一个行为随着策略对象改变而改变的 context 对象。策略对象改变 context 对象的执行算法。

**意图：** 定义一系列的算法,把它们一个个封装起来, 并且使它们可相互替换。

**主要解决：** <u>在有多种算法相似的情况下，使用 if...else 所带来的复杂和难以维护</u>。

**何时使用：** 一个系统有许多许多类，而区分它们的只是他们直接的行为。

**如何解决：** 将这些算法封装成一个一个的类，任意地替换。

**关键代码：** 实现同一个接口。



<img src=".\.images\image-20211122134405957.png" alt="image-20211122134405957" style="zoom:50%;" />

# 代码案例 - Code Example

```c#
public class StrategyPatternWiki
{
    public static void Main(String[] args)
    {
        // Prepare strategies
        var normalStrategy    = new NormalStrategy();
        var happyHourStrategy = new HappyHourStrategy();

        var firstCustomer = new CustomerBill(normalStrategy);

        // Normal billing
        firstCustomer.Add(1.0, 1);

        // Start Happy Hour
        firstCustomer.Strategy = happyHourStrategy;
        firstCustomer.Add(1.0, 2);

        // New Customer
        var secondCustomer = new CustomerBill(happyHourStrategy);
        secondCustomer.Add(0.8, 1);
        // The Customer pays
        firstCustomer.Print();

        // End Happy Hour
        secondCustomer.Strategy = normalStrategy;
        secondCustomer.Add(1.3, 2);
        secondCustomer.Add(2.5, 1);
        secondCustomer.Print();
    }
}

// CustomerBill as class name since it narrowly pertains to a customer's bill
class CustomerBill
{
    private IList<double> drinks;

    // Get/Set Strategy
    public IBillingStrategy Strategy { get; set; }

    public CustomerBill(IBillingStrategy strategy)
    {
        this.drinks = new List<double>();
        this.Strategy = strategy;
    }

    public void Add(double price, int quantity)
    {
        this.drinks.Add(this.Strategy.GetActPrice(price * quantity));
    }

    // Payment of bill
    public void Print()
    {
        double sum = 0;
        foreach (var drinkCost in this.drinks)
        {
            sum += drinkCost;
        }
        Console.WriteLine($"Total due: {sum}.");
        this.drinks.Clear();
    }
}

interface IBillingStrategy
{
    double GetActPrice(double rawPrice);
}

// Normal billing strategy (unchanged price)
class NormalStrategy : IBillingStrategy
{
    public double GetActPrice(double rawPrice) => rawPrice;
}

// Strategy for Happy hour (50% discount)
class HappyHourStrategy : IBillingStrategy
{
    public double GetActPrice(double rawPrice) => rawPrice * 0.5;
}
```





---

部分摘抄于

* https://www.runoob.com/design-pattern/strategy-pattern.html


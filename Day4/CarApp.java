class Car
{
    // variable declaration
    int modelNo;
    String brandName;
    int kilometerDriven;

    public Car(int modelNo,String brandName,int kilometerDriven)   //Parameter constructor
    {
        this.modelNo = modelNo;
        this.brandName = brandName;
        this.kilometerDriven = kilometerDriven;
    }

    String checkCarStatus()
    {
        if(kilometerDriven <= 5000)
            return "New car";
        else if(kilometerDriven > 5000 && kilometerDriven <= 20000)
            return "Car is Good condition";
        else
            return "old";
    }

    void displayCarDetails()
    {
        System.out.println("Model :"+modelNo);
        System.out.println("Model :"+kilometerDriven);
        System.out.println("Model :"+brandName);
    }
}



public class CarApp 
{
    public static void main(String args[])
    {
        Car car= new Car(2022,"Honda",12000);
        //car.modelNo = 2022;
        //car.brandName = "Honda";
        //car.kilometerDriven = 12000;

        Car car2 = new Car(2019,"Suzuki",100000);
        //car2.modelNo = 2019;
        //car2.brandName = "Suzuki";
        //car2.kilometerDriven = 100000;

        System.out.println(car.checkCarStatus());
        System.out.println(car2.checkCarStatus());

        car.displayCarDetails();
        car2.displayCarDetails();

    }
    
}

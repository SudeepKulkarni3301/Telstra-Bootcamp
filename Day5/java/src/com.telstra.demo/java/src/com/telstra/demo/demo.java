import java.util.Scanner;

public class demo {
    public static void main(String[] args) throws Exception {
        System.out.println("Hello, World!");
        Scanner in = new Scanner(System.in);
        System.out.println("Enter no");
        for (int input=1; input <6; input++ )
        {

        switch(input)
        {
            case 1 : System.out.println("Entered 1");break;
            case 2 : System.out.println("Entered 2");break;
            case 3 : System.out.println("Entered 3");break;
            case 4 : System.out.println("Entered 4");break;
            case 5 : System.out.println("Entered 5");break;
            default: break;
        }
    }

    }
}

import java.util.Scanner;

class Employee {
    int id;
    String name;
    String dept;

    public Employee(int id, String name, String dept) {
        this.id = id;
        this.name = name;
        this.dept = dept;
    }
}

public class EmployeeClass {
    public static void main(String args[]) {
        Scanner scanner = new Scanner(System.in);

        System.out.print("Enter the person's name: ");
        String name = scanner.nextLine();

        System.out.print("Enter the person's ID: ");
        int id = scanner.nextInt();

        // Consume the newline character left in the input buffer
        /*When you use nextInt() to read an integer from the user, it only consumes the integer value and leaves the newline character (Enter key) in the input buffer. So, when you later use nextLine() to read the department name, it consumes that leftover newline character instead of waiting for new input from the user.
        To fix this, you can add an additional scanner.nextLine() call after reading the id to consume the newline character before reading the department name. Here's the updated version of your program: */
        scanner.nextLine();

        System.out.print("Enter the person's department: ");
        String dept = scanner.nextLine();

        // Create a new Employee object using the input values provided
        Employee employee = new Employee(id, name, dept);

        // Display the details of the employee
        System.out.println("Person's Name: " + employee.name);
        System.out.println("Person's ID: " + employee.id);
        System.out.println("Person's Department: " + employee.dept);

        scanner.close();
    }
}

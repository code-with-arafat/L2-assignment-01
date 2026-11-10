// Problem 1: Optional Parameter and Default Value
function multiplyValue(value, multiplier) {
    const finalMultiplier = multiplier === undefined ? 2 : multiplier;
    return value * finalMultiplier;
}
// Problem 2: Union Type and Type Narrowing
function processInput(input) {
    if (typeof input === "string") {
        return input.trim().toLowerCase();
    }
    else if (typeof input === "number") {
        return input * 10;
    }
    else if (typeof input === "boolean") {
        return input ? "Active" : "Inactive";
    }
    return input;
}
// Problem 3: Readonly Tuple
function formatCoordinate(coordinate) {
    const [latitude, longitude, locationName] = coordinate;
    return `Location: ${locationName} (${latitude}, ${longitude})`;
}
// Problem 4: Generic Function and Rest Parameter
function concatenateArrays(...arrays) {
    const result = [];
    arrays.forEach((array) => {
        result.push(...array);
    });
    return result;
}
// function returns only published courses with enough students.
function getPopularCourses(courses, minStudents) {
    return courses.filter((course) => {
        return course.isPublished === true && course.students >= minStudents;
    });
}
// Problem 6: Generics and Keyof
function pluckValues(items, key) {
    return items.map((item) => {
        return item[key];
    });
}
// Problem 7: OOP, Inheritance and Access Modifiers
// I created an Employee class with protected and private properties.
class Employee {
    name;
    baseSalary;
    constructor(name, baseSalary) {
        this.name = name;
        this.baseSalary = baseSalary;
    }
    getDetails() {
        return `Employee: ${this.name}, Base Salary: ${this.baseSalary}`;
    }
}
// Manager extends Employee and uses the parent class constructor.
class Manager extends Employee {
    department;
    constructor(name, baseSalary, department) {
        super(name, baseSalary);
        this.department = department;
    }
    getRoleInfo() {
        return `Manager of ${this.department}: ${this.name}`;
    }
}
// Problem 8: Promise and Async/Await
async function validateAgeAsync(age) {
    return new Promise((resolve, reject) => {
        if (age < 18) {
            reject(new Error("Access Denied: Must be 18 or older"));
            return;
        }
        setTimeout(() => {
            resolve("Access Granted");
        }, 1000);
    });
}
// Problem 1
console.log(multiplyValue(10));
console.log(multiplyValue(10, 5));
console.log(multiplyValue(10, 0));
// Problem 2
console.log(processInput("  HELLO WORLD  "));
console.log(processInput(10));
console.log(processInput(true));
console.log(processInput(false));
// Problem 3
console.log(formatCoordinate([23.8103, 90.4125, "Dhaka"]));
// Problem 4
console.log(concatenateArrays([1, 2], [3, 4], [5, 6]));
// Problem 5
const courses = [
    { title: "JavaScript", students: 120, isPublished: true },
    { title: "React", students: 80, isPublished: true },
    { title: "Node.js", students: 150, isPublished: false },
];
console.log(getPopularCourses(courses, 100));
// Problem 6
const students = [
    { name: "Arafat", age: 23 },
    { name: "Rahim", age: 22 },
];
console.log(pluckValues(students, "name"));
console.log(pluckValues(students, "age"));
// Problem 7
const manager = new Manager("Arafat", 50000, "IT");
console.log(manager.getDetails());
console.log(manager.getRoleInfo());
// Problem 8
validateAgeAsync(20)
    .then((result) => console.log(result))
    .catch((error) => console.log(error.message));
validateAgeAsync(16)
    .then((result) => console.log(result))
    .catch((error) => console.log(error.message));
export {};
//# sourceMappingURL=solutions.js.map

// Problem 1: Optional Parameter and Default Value
function multiplyValue(value: number, multiplier?: number): number {
  const finalMultiplier = multiplier === undefined ? 2 : multiplier;

  return value * finalMultiplier;
}


// Problem 2: Union Type and Type Narrowing
function processInput(input: string | number | boolean): string | number {
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
function formatCoordinate(
  coordinate: readonly [number, number, string]
): string {
  const [latitude, longitude, locationName] = coordinate;

  return `Location: ${locationName} (${latitude}, ${longitude})`;
}


// Problem 4: Generic Function and Rest Parameter
function concatenateArrays<T>(...arrays: T[][]): T[] {
  const result: T[] = [];

  arrays.forEach((array: T[]): void => {
    result.push(...array);
  });

  return result;
}


// Problem 5: Interface and Filter Method
interface Course {
  title: string;
  students: number;
  isPublished: boolean;
}

// function returns only published courses with enough students.
function getPopularCourses(
  courses: Course[],
  minStudents: number
): Course[] {
  return courses.filter((course: Course): boolean => {
    return course.isPublished === true && course.students >= minStudents;
  });
}


// Problem 6: Generics and Keyof
function pluckValues<T, K extends keyof T>(
  items: T[],
  key: K
): T[K][] {
  return items.map((item: T): T[K] => {
    return item[key];
  });
}


// Problem 7: OOP, Inheritance and Access Modifiers
// I created an Employee class with protected and private properties.
class Employee {
  protected name: string;
  private baseSalary: number;

  constructor(name: string, baseSalary: number) {
    this.name = name;
    this.baseSalary = baseSalary;
  }

  getDetails(): string {
    return `Employee: ${this.name}, Base Salary: ${this.baseSalary}`;
  }
}

// Manager extends Employee and uses the parent class constructor.
class Manager extends Employee {
  private department: string;

  constructor(name: string, baseSalary: number, department: string) {
    super(name, baseSalary);
    this.department = department;
  }

  getRoleInfo(): string {
    return `Manager of ${this.department}: ${this.name}`;
  }
}


// Problem 8: Promise and Async/Await
async function validateAgeAsync(age: number): Promise<string> {
  return new Promise<string>((resolve, reject): void => {
    if (age < 18) {
      reject(new Error("Access Denied: Must be 18 or older"));
      return;
    }

    setTimeout((): void => {
      resolve("Access Granted");
    }, 1000);
  });
}


# Access Modifiers in TypeScript OOP

## Introduction

Access modifiers control where class properties and methods can be used. They are useful in Object-Oriented Programming because they help protect data and keep class code organized. TypeScript has three main access modifiers: `public`, `private`, and `protected`. It also provides `readonly` to stop a property from being reassigned after initialization.

## Detailed Explanation

A `public` member can be accessed from anywhere. It is the default access level, so we do not need to write it every time.

```ts
class Person {
  public name: string;

  constructor(name: string) {
    this.name = name;
  }
}
```

A `private` member can only be accessed inside the class where it is declared. For example, a salary value may be kept private so other code cannot read or change it directly.

A `protected` member is available inside its own class and its child classes. This is useful when a child class needs to use a property from its parent.

```ts
class Employee {
  protected name: string;

  constructor(name: string) {
    this.name = name;
  }
}

class Manager extends Employee {
  showName(): string {
    return this.name;
  }
}
```

The `readonly` modifier allows a property to be assigned when it is declared or inside the constructor. After that, it cannot be reassigned.

```ts
class Account {
  readonly accountId: number;

  constructor(accountId: number) {
    this.accountId = accountId;
  }
}
```

## Conclusion

Access modifiers make classes safer and easier to maintain. I use `private` for internal data, `protected` when child classes need access, and `public` for members that should be available outside. I use `readonly` for values that should not change after setup.


## Arafat Ferdous
# Type Alias vs Interface in TypeScript

## Introduction

TypeScript gives us two common ways to describe the shape of data: `type` aliases and `interface`. They look similar, especially when we describe an object. However, they have a few important differences. Knowing these differences helps us choose the right tool for a project.

## Detailed Explanation

An interface is mainly used to describe the structure of an object. For example:

```ts
interface User {
  name: string;
  age: number;
}
```

We can use this interface when creating a user object:

```ts
const student: User = {
  name: "Arafat",
  age: 23
};
```

A type alias can describe an object too:

```ts
type Product = {
  title: string;
  price: number;
};
```

The main difference is that a type alias can describe more than object shapes. It can create union types, primitive aliases, tuples, and other combinations.

```ts
type Status = "pending" | "success" | "failed";
type Point = [number, number];
```

Interfaces can be extended with `extends`. Type aliases can combine types with intersections using `&`. Interfaces also support declaration merging, which means two interfaces with the same name can add properties to one another. Type aliases do not support this feature.

## Conclusion

For object structures, either option is usually fine. I prefer interfaces for clear object models and class contracts. I use type aliases when I need unions, tuples, or a combination of different types. The most important thing is to keep the code consistent and easy to understand.

## Arafat Ferdous
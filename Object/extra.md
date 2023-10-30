# Avoiding Mutation on Objects in JavaScript

When working with objects in JavaScript, it's important to understand how to prevent unintended modifications to their properties. Avoiding mutation helps maintain the integrity of your data and ensures code stability. Here are some techniques to avoid mutation:


## 1. Reassign - Use `const`

When you declare an object using `const`, you ensure that the reference to the object cannot be changed, but the object's properties can still be modified. This prevents accidental reassignment of the entire object.

```javascript
    const person = { name: "John", age: 30 };

    // This is allowed, modifying the object's properties
    person.age = 31; // Allowed
```

## 2. Avoid addition of a property - `Object.preventExtensions()`

To prevent the addition of new properties to an object, you can use the Object.preventExtensions() method. This means you can't add new properties to the object, but you can still modify or delete existing properties.

```javascript
    const car = {
    make: "Toyota",
    model: "Camry"
    };

    Object.preventExtensions(car);

    // Adding a new property is not allowed
    car.color = "blue"; // This will throw an error

    // Modifying existing properties is still allowed
    car.model = "Corolla";
```

## 3. Avoid delete or add, but update is allowed - `Object.seal()`

Object.seal() not only prevents adding new properties but also makes existing properties non-configurable. You can still update existing properties, but you cannot delete them.

```javascript
    const user = {
    username: "johndoe",
    email: "john@example.com"
    };

    Object.seal(user);

    // Adding a new property is not allowed
    user.password = "password"; // This will throw an error

    // Modifying existing properties is allowed
    user.email = "john.doe@example.com";

    // Deleting properties is not allowed
    delete user.username; // This will not work

```

## 4. Avoid add, update, and delete - `Object.freeze()`

Object.freeze() goes a step further than Object.seal(). It makes an object read-only by preventing any changes to its properties, including addition, modification, and deletion.

```javascript
    const settings = {
        theme: "dark",
        fontSize: 16
    };

    Object.freeze(settings);

    // Adding a new property is not allowed
    settings.language = "English"; // This will throw an error

    // Modifying existing properties is not allowed
    settings.fontSize = 14; // This will not work

    // Deleting properties is not allowed
    delete settings.theme; // This will not work

```
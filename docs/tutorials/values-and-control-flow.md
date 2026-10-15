# 2. Values and control flow

CX has fixed-width integer and floating-point types, booleans, strings, arrays, and `var` locals. The compiler's accepted language is still a subset under development; check the [reference](/language/reference) for exact behavior.

## Locals and expressions

```cx
int score = 42;
var bonus = 8;
int total = score + bonus;
Console.WriteLine(total);
```

An explicitly typed local names its type. `var` asks the compiler to infer the local type from its initializer.

## Branches and loops

```cx
for (int i = 0; i < 3; i++) {
    if (i == 1) {
        Console.WriteLine("middle");
    } else {
        Console.WriteLine(i);
    }
}
```

CX supports `if`, `else`, and `for`; the checked-in [arrays and loops example](https://github.com/cx-pl/examples/blob/885d33246864e32c7de53b20401d43fddeb9f5e0/3.%20Arrays%20and%20Loops/ArraysAndLoops.cx) also demonstrates arrays and `foreach`.

Build and run that complete example from the workspace root:

```powershell
dotnet .\cxc\src\bin\Release\net10.0\CxCompiler.dll --compile --cxcore-dir .\cxcore ".\examples\3. Arrays and Loops\ArraysAndLoops.cx"
```

It prints `arrays pass` and exits with code `0` when the array sum is correct.

## Exercise

Create an integer array, visit its elements, and calculate their sum. Compare your solution with the loops example and check the array syntax in the [language reference](/language/reference).

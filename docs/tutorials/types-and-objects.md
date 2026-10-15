# 3. Types and objects

CX supports classes, structs, interfaces, enums, constructors, and properties. The supported details are evolving; use the [language reference](/language/reference) to check limitations before relying on a feature.

## A class

```cx
import System;

public class Counter {
    private int value;

    public void Increment() {
        value = value + 1;
    }

    public int GetValue() {
        return value;
    }
}

public int Main() {
    Counter counter = new Counter();
    counter.Increment();
    if (counter.GetValue() != 1) return 1;
    Console.WriteLine("objects pass");
    return 0;
}
```

The full runnable source is available as [Counter.cx](/samples/Counter.cx). Build it from the workspace root after following [Get started](/getting-started/):

```powershell
dotnet .\cxc\src\bin\Release\net10.0\CxCompiler.dll --compile --cxcore-dir .\cxcore .\website\samples\Counter.cx
```

It prints `objects pass` and exits with code `0`. Create a `Counter`, call `Increment`, and read `GetValue`. Properties are another way to expose an accessor pair; the compiler supports the forms documented in the [language reference](/language/reference).

## Exercise

Add a `Reset` method and a second property that reports whether the counter is zero.

# 1. Hello World

This lesson introduces imports, the executable entry point, and console output.

## The program

```cx
import System;

public int Main(string[] args) {
    Console.WriteLine("Hello world!");
    return 0;
}
```

`import System;` makes the standard `System` namespace available. An executable project can define a top-level `Main` function; this form accepts command-line arguments and returns an integer process exit code. `Console.WriteLine` writes a line to standard output.

## Build and run

Follow [Get started](/getting-started/) to build the compiler and install CMake plus a native compiler. From the workspace root, compile the checked-in program:

```powershell
dotnet .\cxc\src\bin\Release\net10.0\CxCompiler.dll --compile --cxcore-dir .\cxcore ".\examples\0. Hello World\HelloWorld.cx"
```

Run the generated executable. It prints:

```text
Hello world!
```

The compiler generates native build files beneath `.obj/` and places the executable beneath `.bin/`. The precise binary subdirectory depends on the native configuration.

## Try it

Change the message, rebuild, and run again. Then return `7` instead of `0` and inspect the process exit code in your shell.

Source: [HelloWorld.cx](https://github.com/cx-pl/examples/blob/885d33246864e32c7de53b20401d43fddeb9f5e0/0.%20Hello%20World/HelloWorld.cx).

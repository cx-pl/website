# Compiler

The C# compiler targets .NET 10. Build it from the workspace root:

```powershell
dotnet build .\cxc\src\CxCompiler.csproj --configuration Release
```

Inspect its commands with:

```powershell
dotnet .\cxc\src\bin\Release\net10.0\CxCompiler.dll --help
```

Compile source and build the generated native target with `--compile`:

```powershell
dotnet .\cxc\src\bin\Release\net10.0\CxCompiler.dll --compile --cxcore-dir .\cxcore app.cx
```

Without `--compile`, the compiler emits generated C and CMake files but does not invoke the native build. `--output-dir` selects a different generated-file directory. See [Get started](/getting-started/) for a complete example and [the source README](https://github.com/cx-pl/cxc/blob/f24e1cb637b5952178d0b89f39613512a2f4b417/README.md) for details at the recorded compiler revision.

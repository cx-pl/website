# Get started with CX

CX is an experimental language and compiler. This guide builds the compiler from source and runs a small program. The compiler emits C and CMake build files; compiling and running the result also requires a native C toolchain.

## Requirements

- .NET 10 SDK to build the compiler.
- CMake and a native compiler supported by the selected platform.
- A checked-out `cxcore` runtime repository beside `cxc`, or its path passed with `--cxcore-dir`.
- The CX source repositories: [compiler](https://github.com/cx-pl/cxc), [runtime](https://github.com/cx-pl/cxcore), and [examples](https://github.com/cx-pl/examples).

The commands below assume the repositories are siblings in one workspace. The exact compiler and runtime revisions recorded for this documentation are listed on the [tested revisions page](/project/revisions). They are development snapshots and may not be suitable together with newer working-tree changes.

## Build the compiler

From the workspace root:

```powershell
dotnet build .\cxc\src\CxCompiler.csproj --configuration Release
```

The compiler DLL is produced under `cxc/src/bin/Release/net10.0/`. To check the CLI:

```powershell
dotnet .\cxc\src\bin\Release\net10.0\CxCompiler.dll --version
dotnet .\cxc\src\bin\Release\net10.0\CxCompiler.dll --help
```

## Build and run Hello World

Run the compiler from the workspace root:

```powershell
dotnet .\cxc\src\bin\Release\net10.0\CxCompiler.dll --compile --cxcore-dir .\cxcore ".\examples\0. Hello World\HelloWorld.cx"
```

The executable is emitted under the example's `.bin/` directory. Run the matching executable for your configuration and platform. On Windows Release, for example:

```powershell
& ".\examples\0. Hello World\.bin\Release\HelloWorld.exe"
```

Expected output:

```text
Hello world!
```

`--compile` asks CMake to compile generated C. Without it, the compiler emits generated files only. The `.obj/` directory holds generated sources and build files; `.bin/` holds built executables and libraries.

## Platform notes

| Platform | What the repositories document | Notes |
| --- | --- | --- |
| Windows x64 | MSVC and CMake builds; the VS Code extension documents build, run, and debugging | Install Visual Studio C++ build tools and CMake. This guide's output path assumes the default Release configuration. |
| Linux x64 | GCC and CMake runtime build | The runtime README recommends its Linux development container. Confirm the compiler and runtime revisions match. |

These are repository-supported development paths, not a guarantee that every feature has identical support. Other operating systems, architectures, and toolchains may be incomplete.

## Troubleshooting

- If the compiler cannot locate the runtime, pass its path explicitly with `--cxcore-dir`.
- If the compiler emits C and CMake files but no executable, check that CMake and a native C compiler are installed and available on `PATH`.
- Use `--verbosity verbose` for additional compiler and build diagnostics.
- See the [compiler guide](/tools/compiler) and the [runtime repository](https://github.com/cx-pl/cxcore) for current setup notes.

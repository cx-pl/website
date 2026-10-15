---
layout: home

hero:
  name: CX
  text: A programming language for native software
  tagline: An experimental language with familiar syntax, object-oriented features, and a compiler that generates C for native builds.
  image:
    src: /cx-mark.svg
    alt: CX mark
  actions:
    - theme: brand
      text: Get started
      link: /getting-started/
    - theme: alt
      text: Learn CX
      link: /tutorials/

features:
  - title: Familiar syntax
    details: Write CX with C-style declarations, expressions, and control flow.
  - title: Types and abstractions
    details: Explore classes, structs, interfaces, properties, and an evolving generics implementation.
  - title: Native toolchain
    details: The compiler emits C and CMake build files and can invoke a native build.
---

<div class="tip custom-block">
  <p class="custom-block-title">Experimental project</p>
  <p>CX is under active development. Features, generated-code ABI, and compatibility guarantees may change.</p>
</div>

## See CX in a few lines

```cx
import System;

public int Main(string[] args) {
    Console.WriteLine("Hello world!");
    return 0;
}
```

This is the checked-in Hello World example. The [getting started guide](/getting-started/) walks through compiler setup, native prerequisites, and running it.

<div class="cx-home-links">
  <a href="/language/">Browse the language reference →</a>
  <a href="/tools/">Set up your tools →</a>
  <a href="https://github.com/cx-pl">Explore CX on GitHub →</a>
</div>

<style>
.cx-home-links { display: flex; flex-wrap: wrap; gap: 1.4rem; margin: 2rem 0; font-weight: 600; }
.cx-home-links a { color: var(--vp-c-brand-1); }
</style>

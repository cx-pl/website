# Documentation source revisions

The imported reference pages are generated from committed repository snapshots. Local repositories contained uncommitted changes when this site was created; the import uses committed files only. Review and advance these pins when refreshing documentation. These SHAs identify development snapshots, not a released CX version.

## Verification performed

On Windows x64, the pinned compiler and runtime were used to build and run the Hello World, arrays and loops, and Counter programs. The compiler build completed with no warnings or errors. Hello World printed `Hello world!`; the arrays sample printed `arrays pass`; Counter printed `objects pass`. The older classes sample in the examples repository did not compile against this compiler snapshot, so the tutorial uses its own verified Counter program instead.

The Linux workflow is described from the runtime repository's development documentation but was not run as part of this site build. The package manager and editor extension revisions below are provenance pins only; their workflows have not been verified here.

| Repository | Revision | Imported content |
| --- | --- | --- |
| [cxc](https://github.com/cx-pl/cxc/tree/f24e1cb637b5952178d0b89f39613512a2f4b417) | `f24e1cb637b5952178d0b89f39613512a2f4b417` | Language reference |
| [cxcore](https://github.com/cx-pl/cxcore/tree/26b4868617f19db79686292d1b85315b20f8e160) | `26b4868617f19db79686292d1b85315b20f8e160` | Runtime contracts and ABI |
| [examples](https://github.com/cx-pl/examples/tree/885d33246864e32c7de53b20401d43fddeb9f5e0) | `885d33246864e32c7de53b20401d43fddeb9f5e0` | Tutorial samples |
| [cxpm](https://github.com/cx-pl/cxpm/tree/c47d720a30fb9a499509bbd439f4989a2f0e90ed) | `c47d720a30fb9a499509bbd439f4989a2f0e90ed` | Package manager guide |
| [vscode-extension](https://github.com/cx-pl/vscode-extension/tree/7b2eb4ac41fec5bdf34a0aeb3f6779940180b4d1) | `7b2eb4ac41fec5bdf34a0aeb3f6779940180b4d1` | Editor setup and syntax grammar |

Use `pnpm content:sync` to regenerate the committed reference snapshots and imported examples from these exact commits. Edit `content-sources.json` to advance the pins; review resulting changes and verify the tutorial instructions before merging.

# blory-editor: The Blory Editor Monorepo

If you'd like to use Blory, please visit the [Blory website](https://blory.vercel.app/). You can build your own
Blory project by pressing "Create" on that website or by visiting <https://blory.vercel.app/projects/editor/>.

This is a source code repository for the packages that make up the Blory editor and a few additional support
packages. Use this if you'd like to learn about how the Blory editor works or to contribute to its development.

## What's in this repository?

The `packages` directory in this repository contains:

- `scratch-gui` provides the buttons, menus, and other elements that you interact with when creating and editing a
  project. It's also the "glue" that brings most of the other modules together at runtime.
- `scratch-render` draws backdrops, sprites, and clones on the stage.
- `scratch-svg-renderer` processes SVG (vector) images for use with Blory projects.
- `scratch-vm` is the virtual machine that runs Blory projects.

_Please add to this list as more packages are migrated to the monorepo._

Each package has its own `README.md` file with more information about that package.

# Templates is a simple library for using Handlebars.js templates
***

## Getting Started

First we need to have a templates folder in our project directory. This folder is used to store all partials and templates.

## `Templates.init`

 - returns a promise that resolves to a new Templates instance.

 - Optional parameter `path` is a string that will override the default path for the templates folder of `/templates`

First we need to have a templates folder in our project directory. This folder is used to store all partials and templates.

## Naming Templates

  - ### All Templates Should have the `.handlebars` file extension.

  - Templates with a filename ending in `_partial` will be treated as partial templates. The preceeding characters of the filename will be the name of the partial.

  - All other files in the templates directory will be compiled as Properties of the new Templates instance having a key matching the filename.

## Example

  ```md
    ├── app.js
    ├── index.html
    ├── templates
    │   ├── main.handlebars
    │   └── other_partial.handlebars
  ```

  ```html
    <!-- index.html -->
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <title>Templates Demo</title>
      <script src="https://cdn.jsdelivr.net/npm/handlebars@latest/dist/handlebars.js"></script>
      <script src="templates.js"></script>
      <script src="app.js"></script>
    </head>
    <body></body>
    </html>
  ```

  ```js
  // app.js
    document.addEventListener("DomContentLoaded", async () => {
      let templates = await Templates.init();

      document.body.innerHTML = templates.main();
    });
  ```

  ```handlebars
    <!-- /templates/main.handlebars -->
    {{>other}}
  ```

  ```handlebars
    <!-- /templates/other_partial.handlebars -->
    </h1>Hello, World!</h1>
  ```



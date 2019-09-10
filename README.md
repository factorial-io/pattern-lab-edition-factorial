# Pattern Lab Edition Factorial

> Scaffold a twig pattern library + factorial frontend stack.

## Context
> https://patternlab.io/docs/advanced-ecosystem-overview.html

## Prerequistes

- [`composer`](https://getcomposer.org)
- [`node`](https://nodejs.org/en/)
- [`yarn`](https://yarnpkg.com/lang/en/)

## Create a new Project

```
$ composer create-project factorial-io/pattern-lab-edition-factorial <my-project-name> --stability beta
```

* Replace `<my-project-name>` with the folder where pattern lab should be generated.
* Select the `factorial-io/pattern-lab-starterkit-default` starterkit from menu.
* If asked about replacing files, do it.
* Commit new files generated.

## Install an existing Project

```
$ composer install
```

* Assuming you cloned an existing project that was created with `pattern-lab-edition-factorial`.
* This should trigger a `yarn install` as well.

## Development

```
$ yarn start
```

* Starts a development server and watches for file changes.

## Production

```
$ yarn run build
```

* Creates a production build.

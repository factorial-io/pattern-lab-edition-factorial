# Pattern Lab Twig Standard Edition for Factorial

The Pattern Lab Factorial Edition combines a Drupal compatible pattern library with the setup of our frontend stack.

## Prerequistes

- [`composer`](https://getcomposer.org)
- [`node`](https://nodejs.org/en/)
- [`yarn`](https://yarnpkg.com/lang/en/)

## Creating a new project

1. Run `composer create-project factorial-io/pattern-lab-edition-factorial FOLDERNAME --stability alpha` (Assuming you wanted it in a directory called FOLDERNAME).
2. Select the `factorial-io/pattern-lab-starterkit-suitcss` starterkit from menu. If asked about replacing files, do it.
3. Commit new files generated.

## Installing an existing project

After installing and committing, others cloning the repo need to run `composer install` to install dependencies. This should trigger a `yarn install` as well.

## Development

Watch for file changes and start a local development server

    composer start --dev

and (in a new terminal window) watch and compile frontend assets with [@factorial/frontend-stack-core](https://github.com/factorial-io/factorial-frontend-stack/tree/master/packages/core)

    yarn start

## Build

    yarn run build

then

    composer run generate

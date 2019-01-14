# Pattern Lab Twig Standard Edition for Factorial

> **Warning: This package is under heavy development – Do not use in production.**

The Pattern Lab Factorial Edition combines a Drupal compatible pattern library with the setup of our frontend stack.

## Prerequistes

- [`composer`](https://getcomposer.org)
- [`node`](https://nodejs.org/en/)
- [`yarn`](https://yarnpkg.com/lang/en/)

## First Time Install

1. Run `composer create-project factorial-io/pattern-lab-edition-factorial FOLDERNAME --stability alpha` (Assuming you wanted it in a directory called `FOLDERNAME`).
2. Select the `factorial-io/pattern-lab-starterkit-suitcss` starterkit from menu. If asked about replacing files, do it.
3. Commit new files generated.

## Using It

After installing and committing, others cloning the repo need to run `composer install` to install dependencies.

## Helpful Commands

These are some helpful commands you can use on the command line for working with Pattern Lab.

### Two line start

This will compile PL and watch for changes while running the local server:

    composer start

and in a new terminal window

    yarn start

### Generate Pattern Lab

To generate the front-end for Pattern Lab type:

    php core/console --generate

### Start a server to view Pattern Lab

You can use PHP's built-in web server to review your Pattern Lab project in a browser. In a separate window type:

    php core/console --server

Then open [http://localhost:8080](http://localhost:8080) in your browser.

### Install a StarterKit

To install a near-empty StarterKit as a starting point for your project type:

    php core/console --starterkit --init

To install a specific StarterKit from GitHub type:

    php core/console --starterkit --install <starterkit-vendor/starterkit-name>

### Updating Pattern Lab

	composer update

## Other Documentation

These are crucial pieces that contains documentation that is good to understand:

- [`pattern-lab/patternengine-twig`](https://github.com/pattern-lab/patternengine-php-twig)
- [`aleksip/plugin-data-transform`](https://github.com/aleksip/plugin-data-transform)
- [Twig templating language](http://twig.sensiolabs.org/documentation)

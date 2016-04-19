# Pattern Lab Twig Standard Edition for Drupal 

The Standard Edition for Drupal gives developers and designers a clean and stable base from which to develop a Drupal compatible pattern library.


## Prerequistes 

- [`composer`](https://getcomposer.org)

## Installing & Setup

1. Clone or [download](https://github.com/pattern-lab/edition-php-drupal-standard/archive/master.zip) this repo & `cd` into it.
1. Run `composer install`
1. Install the [Drupal starterkit](https://github.com/pattern-lab/starterkit-twig-drupal-minimal) by running `php core/console --starterkit --install pattern-lab/starterkit-twig-drupal-minimal`. If asked about replacing files, do it.
1. Open `config/config.yml` and set `twigAutoescape` to `false`.
1. Compile it by running `php core/console --generate`.
1. Commit the new files generated.

## Updating Pattern Lab

		composer update

## Helpful Commands

These are some helpful commands you can use on the command line for working with Pattern Lab.

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

## Other Documentation

These are crucial pieces that contains documentation that is good to understand:

- [`pattern-lab/patternengine-twig`](https://github.com/pattern-lab/patternengine-php-twig)
- [`aleksip/plugin-data-transform`](https://github.com/aleksip/plugin-data-transform)
- [Twig templating language](http://twig.sensiolabs.org/documentation)

# angular-learning
Angular 6 Tutorial

# Ng6
To run all angular commands use ng [command name] --help

Create a project --> ng new ng6 + [flags (--style="" --routing)]

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 7.0.2.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

#Index.html
Working in this just to import material, icons, custom google web phone...

#app-routing
Define some routes

#app-components
Component --> provides you with the basic building box of your app.
When we create a component, angular-cli generates 4 files (app.component.html, app.component.scss, app.component.spec.ts(test file-do not worry abou this file),
app.component.ts).

#app-module
Before tag any component, look at this file.

Way to work, use angular-cli to generate components and services.
Automatically update this file.
When we will use animations and so on, we will add to the imports section.

#Generate our component

Use angular-cli --> ``` ng generate component [name] ```
    You can do it in a shorter way --> ``` ng g c [name]```

Modify index html to modify general html(app one), and add a div and inside the component you wanna create/use. Using selector as a tag.
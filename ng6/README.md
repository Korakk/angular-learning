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

# Index.html
Working in this just to import material, icons, custom google web phone...

# app-routing
Define some routes

# app-components
Component --> provides you with the basic building box of your app.
When we create a component, angular-cli generates 4 files (app.component.html, app.component.scss, app.component.spec.ts(test file-do not worry abou this file),
app.component.ts).

# app-module
Before tag any component, look at this file.

Way to work, use angular-cli to generate components and services.
Automatically update this file.
When we will use animations and so on, we will add to the imports section.

# Generate our component

Use angular-cli --> ``` ng generate component [name] ```
    You can do it in a shorter way --> ``` ng g c [name]```

Modify index html to modify general html(app one), and add a div and inside the component you wanna create/use. Using selector as a tag.

# router link
used to direct user to diferent routes

# material.io
Gives u the html u want of icons.
# CSS
## grid-template-columns
first parameter is the first part of the sidebar and the second part is the second parameter.

Ordre, primer el css general + add imports to general html and build specific component html structure, després el concret.

# Routing Files
## sidebar app-routing
Just import the components we want to route.


# Services
USe angular-cli to generate a service.
The purpose of the service files is if we have some type of reusable code that we want access from any of our components we will create a service file(api data).
## Important
Angular comes with a built-in http client --> second import of the data.service.ts

Inside the class we can create an instance of the httpclient.

## Web that works as a server
jsonplaceholder.typicode.com

# Observable
Will hold all the data recieved from the server.

To create one, indicate it with a $ at the end of variable name, like this --> users$: ...


# ngFor

*ngFor="let user of user$"

### What's happening here?
Basically ngFor allows you to iterate on an array or array of objects. Name is the one we gave to interpollation.


# Activated Route
To get the params of the url.

# Class binding
Detect which place we are.
It allows to determine which route we are currently on and that will allow us to style it blue when the user is on it, etc.

#Angular animations
App module file: import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
Users.component: import { trigger,style,transition,animate,keyframes,query,stagger } from '@angular/animations';
                  add animations array to the components. You can have multiple triggers if you have multiple animations on the same component.

Buscar-les per internet, too hard.


# ng build
Do it with --prod reduce the size of the elements.
Without it, elements are heavier.

# Sheep Chat

## Steps to run the project

1) Install [NodeJS Installer](https://nodejs.org/en/download/)

2) Clone this repository

3) Install the dependances with :

```
npm install 
```

6) Run the project with :

```
npm start
```

7) Open any browser and go to :

```
http://localhost:4200/  
```

## Project tree view

```
- node_modules <--- Contains all dependances
- src
 │_ main.ts
 │_ routeur.ts
 │_ index.html
 - app <--- Contains all components
    │_ app.component.html
    │_ app.component.css 
    │_ app.component.spec.ts
    │_ app.component.ts
    │_ README.md
 - shared <--- Contains all shared elements
    - services
      │_ README.md
    - directives
      │_ README.md
    - pipes
      │_ README.md
 - assets <--- Contains all resources used by the project: images, sounds, styles...
 - index.html <--- Root HTML file
 - main.ts <--- Entrance file
 
- package.json <--- Contains the project config: commands and dependances list
- ...
```

You will find more information about Angular project files here : [quickstart d'Angular](https://angular.io/docs/ts/latest/cli-quickstart.html#project-file-review)

## Debug

`debugger`

If you need to debug your typescript code, you can use the `debugger`. Here is an exemple of use:
```
public getMessages(route: string) {
    const finalUrl = this.url + route;
    debugger; <---------------
    this.http.get(finalUrl)
      .subscribe((response) => this.extractAndUpdateMessageList(response));
}
```

The debugger keyword stops the execution of JavaScript, and calls (if available) the debugging function.
This has the same function as setting a breakpoint in the debugger.
If no debugging is available, the debugger statement has no effect.
With the debugger turned on, this code will stop executing before it executes the third line.
More information about the Google Chrome debugger : [debugger de Chrome](https://developers.google.com/web/tools/chrome-devtools/javascript/). 
 
`console.log()`
If your browser supports debugging, you can also use console.log() to display JavaScript values in the debugger window

## Useful links

### Warning

Be careful, we are using Angular2, not AngularJS which is an older and very different version. 

### Links

Angular 2 documentation: 

- [Directives](https://angular.io/docs/ts/latest/guide/attribute-directives.html)
- [Pipes](https://angular.io/docs/ts/latest/guide/pipes.html)
- [Services](https://angular.io/docs/ts/latest/tutorial/toh-pt4.html)
- [Forms: "Template Driven Form"](https://angular.io/docs/ts/latest/guide/forms.html)
- [HTTP requests with Angular](https://angular.io/docs/ts/latest/guide/server-communication.html)
- [NgOnInit](https://angular.io/docs/ts/latest/tutorial/toh-pt4.html#the-ngoninit-lifecycle-hook)
- [@Input et @Ouput](https://angular.io/docs/ts/latest/cookbook/component-communication.html)

About Observables:

- [rxjs](http://reactivex.io/rxjs/class/es6/Observable.js~Observable.html)


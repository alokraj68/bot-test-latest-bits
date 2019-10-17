# Microsoft Bot framework Latest bits

A simple web-chat to consume Microsoft Bot framework latest bits in Angular example

### Instructions to startup

-   Change the tokens, secrets, ids, etc. in the `src/app/app.component.ts` file for the webchat to actually send data.
-   Run `npm install` to install the repo dependencies.
-   Run `npm install -g @angular/cli` to install the Angular CLI tool globally for convenience.
-   Run `ng serve` with CWD on the root of the project.

### (Instructions for MSFT bot chat latest bits)[https://github.com/microsoft/BotFramework-WebChat#subscribe-to-latest-bits-on-mygetorg]

### Subscribe to latest bits on myget.org
To do this you may add your packages and then change the registry of your project.

Add your project dependencies other than Web Chat.
In your project's root directory, create a .npmrc file
Add the following line to your file: registry=https://botbuilder.myget.org/F/botframework-webchat/npm/
Add Web Chat to your project dependencies npm i botframework-webchat --save
Note that in your package-lock.json, the registries pointed to are now MyGet. The Web Chat project has upstream source proxy enabled, which will redirect non-MyGet packages to npmjs.com.

### Re-subscribe to official release on npmjs.com
Re-subscribing requires that you reset your registry.

Delete your .npmrc file
Delete your root package-lock.json
Remove your node_modules directory
Reinstall your packages with npm i
Note that in your package-lock.json, the registries are pointing to https://npmjs.com/ again.
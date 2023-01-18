
## File structure of angular projects

1. The Application Files  
    All the application files are stored in the "src/app" directory in the project directory.  
    File information-  
        a. app-routing.modules.ts  -> File where all the angular routing modules are mentioned.  
        b. app.component.css -> The main css file of the application  
        c. app.component.html -> The main html file of the application  
        d. app.component.specs.ts -> Project testing file  
        e. app.component.ts -> The typescript file where all the logic regarding the application are mentioned  
        f. app.module.ts -> ??  

2. The Bootstrap Files  
    Following are the bootstrap files from where the execution of the application starts-  
        a. <project_dir>/src/main.ts -> ??  
        b. <project_dir>/src/polyfills.ts -> ??  
        c. <project_dir>/karma.conf.js -> used for testing. This is compatible with jasmine  

3. The Configuration Files
    There are multiple json files in the project dir. Project configurations are mentioned in these files.  
        a. angular.json -> [Follow this](https://medium.com/nerd-for-tech/what-is-inside-of-angular-json-file-636e81e67651) to know abou the contents of angular.json file  
        b. package.json -> This file includes project metadata and can be created with the following command   
        ```
        
        npm init
        
        ```  
        Follow [official nodejs docs](https://nodejs.org/en/knowledge/getting-started/npm/what-is-the-file-package-json/) to know more  
        c. tsconfig.json  -> Global typescript compiler configuration file which is used by the entire project.   
        TypeScript is a primary language for Angular application development. It is a superset of JavaScript with design-time support for type safety and tooling.
        Browsers can't execute TypeScript directly. Typescript must be "transpiled" into JavaScript using the tsc compiler, which requires some configuration.
        [Angular Docs to know more](https://angular.io/guide/typescript-configuration)  
        d. tsconfig.app.json -> This is also typescript compiler configuration file, which is local to specific app being used in a project.
        [Angular Docs to know about configuration](https://angular.io/guide/typescript-configuration)
        [Difference b/w tsconfig.json and tsconfig.app.json](https://stackoverflow.com/questions/54898013/difference-between-tsconfig-json-and-tsconfig-app-json-files-in-angular)  
        e. tsconfig.spec.json -> Typescript configuration for app tests
        [Refer to this](https://angular.io/guide/typescript-configuration)  
        f. package-lock.json -> Tracks exact dependency tree at any given time. Follow [npm docs](https://docs.npmjs.com/cli/v9/configuring-npm/package-lock-json) to know more about this file  

Carry out discussion on the test here

1. What is npm?
It is a package manager for JavaScript programming language and primarily used for managing dependencies in Node.js projects.

2. What is `Parcel/Webpack`? Why do we need it?
They are popular module bundlers for JavaScript applications. They are build tools that take your project's source code, including JavaScript files, CSS files, images, and other assets, and bundle them into optimized files that are ready to be served to the browser.

3. What is `.parcel-cache`
The .parcel-cache directory is a directory created by the Parcel bundler during the build process to cache compiled assets and other build-related data. Parcel uses this cache to speed up subsequent builds by avoiding recompilation of unchanged files and reusing previously compiled assets whenever possible.

4.  What is `npx` ?
It stands for "Node Package Runner" and is used to execute npm package binaries directly without the need to install them globally or locally beforehand.

5. What is difference between `dependencies` vs `devDependencies`?
 'dependencies' are required for the application to run in production, while 'devDependencies' are only needed during development and testing.

6. What is Tree Shaking?
Tree Shaking is a powerful optimization technique used by JavaScript module bundlers to reduce bundle size and improve the efficiency of web applications.

7. What is Hot Module Replacement?
Hot Module Replacement is a tool for speeding up the development process and improving developer productivity.

8.  List down your favourite 5 superpowers of Parcel and describe any 3 of them in your own words?
minify - remove unnecessary characters from the code.
compress
compatible - makes compatible for all types of browsers
image optimization - reduces files size by optimizing the images.
clean the code

9. What is `.gitignore`? What should we add and not add into it?
The .gitignore file is a text file used by version control systems like Git to specify files and directories that should be ignored and not tracked by the version control system. we can add parcel cache files into it and we should not add packahe-lock.json files to it.

10. What is the difference between `package.json` and `package-lock.json
'package.json' is a file containing project information and dependency declarations, while 'package-lock.json' is a file containing detailed dependency information.

11. Should I not modify `package-lock.json`?
No

12. What is `node_modules` ? Is it a good idea to push that on git?
'node_modules' is a directory created by npm to store all the dependencies. No it is not a good idea to push 'node_modules into git' because it takes lot of space to store and it is unnecessary to store those hude files in git.

13. What is the `dist` folder?
In React, the dist folder typically contains the bundled and optimized files that are ready for deployment to a production environment.

14. What is `browserlists?
'browserslist' is a configuration file used by various tools in the front-end development ecosystem to specify which browsers and browser versions your project should support. It allows you to define a list of target browsers and their versions.

15. Difference between ^ - caret and ~ - tilda?
The caret allows for higher minor and patch versions, while the tilde only allows for higher patch versions. The choice between the two depends on the desired level of flexibility and compatibility for your project's dependencies.





```
npm install
```

### run unit tests (karma)

```
npm install -g karma-cli

karma start
```

### run e2e tests (karma)

```
npm install -g protractor

webdriver-manager update

npm install -g browser-sync

browser-sync start --server

webdriver-manager start

protractor protractor.conf.js
```

### run app

```
npm install -g browser-sync

browser-sync start --server --files **/*.js **/*.html
```

go to: http://localhost:3000/src/index.html
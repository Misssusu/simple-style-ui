# simple-style-ui

simple-style-ui UI library for Web APP, built with Vue.js.


## Install
```bash
$ yarn add simple-style-ui

or

$ npm install simple-style-ui --save
```

## Import
Then you need to import its components and plugins in *main.js*.

```javascript
// main.js
// Import the library
import SUI from 'simple-style-ui'
import 'simple-style-ui/dist/simple-style-ui.css'

// Use some plugins
Vue.use(SUI)
```

## Usage
Now, let's place some components in your Web APP!

```html
<s-button type="default">Default</s-button>
<s-button type="primary">primary</s-button>
<s-button type="warning">Warning</s-button>
<s-button type="danger">Danger</s-button>
<s-button type="info">Info</s-button>
<s-button type="success">Success</s-button>
```
## Note

This UI library will reset some styles as followed. 
I strongly recommend you to add these styles to all of your projects for saving time to find CSS bugs :)

```css
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
```

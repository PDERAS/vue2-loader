# Vue Loader
A vue.js component to show a loading indicator.

## How to initialize Vue Loader
Vue loader is built as a vue plugin. It can be initialized just as the Vue documentation states.

```javascript
import VueLoader from "vue2-loader";

Vue.use(VueLoader);
```
## Usage

#### Creation
A vue loader is easily created, and usually combined with a v-if to show/hide the loader.<br>
```HTML
<vue-loader></vue-loader>
```

## Properties
| Property  | Required | Type    | Default | Description                                             |
|-----------|----------|---------|---------|---------------------------------------------------------|
| color     | false    | String  | 'black' | The color of the loader (can be a hex value)            |
| type      | false    | String  | 'bars'  | The type of style to use for the loader                 |

#### Styling
Styling is currently limited, but can be expanded in the future.

## License
This project is covered under the MIT License. Feel free to use it wherever you like.
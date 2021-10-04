### Верстка сайта с котиками

Используется шаблонизатор [Handlebars](https://handlebarsjs.com/) и CSS-препроцессор [Sass(SCSS)](https://sass-scss.ru/)

В качестве сборщика используется [gulp-webpack-handlebars](https://github.com/maksabuzyarov/gulp-webpack-handlebars)


**Установка:**

  1. Install NodeJS and npm

  2. Clone this repository

  3. Run `npm install`

**Команды:**

`npm run dev` 

`npm run build`


## File structure

```
|-- dist
|-- tasks
|-- src
|   |-- fonts
|   |-- img
|   |   |-- favicon
|   |   |   |-- logo.png
|   |   |-- content (optional)
|   |   |-- main (optional)
|   |   |-- svg-sprite
|   |-- js
|   |   |-- components
|   |   |-- other
|   |   |-- app.js
|   |   |-- main.js
|   |-- styles
|   |   |-- components
|   |   |-- main.scss
|   |   |-- _app.scss
|   |   |-- _variables.scss
|   |-- views
|   |   |-- data
|   |   |-- helpers
|   |   |-- partials
|   |   |-- templates
|   |   |   |-- pages
|   |   |   |-- index.html
|-- .babelrc.js
|-- .browserslistrc
|-- .gitignore
|-- gulpfile.babel.js
|-- package.json
|-- webpack.config.js
```

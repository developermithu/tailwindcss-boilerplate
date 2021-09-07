## Tailwind CSS Boilerplate V2.2

How To Use
```
git clone url
cd folder
npm install
npm run build
npm run prod (for minify css)
```

For Windows Users:
```
  "scripts": {
    "build": "set TAILWIND_MODE=watch&postcss tailwind.css -o ./dist/style.css -w --verbose",
    "prod": "set NODE_ENV=production&postcss tailwind.css -o ./dist/style.css"
  },
```

For Macbook Users:
```
"scripts": {
    "build": "TAILWIND_MODE=watch postcss tailwind.css -o ./public/styles.css -w --verbose",
    "prod": "NODE_ENV=production postcss tailwind.css -o ./public/styles.css"
  },
```


<!-- 
How To Build From Scratch
```
npm init -y
npm install -D tailwindcss@latest postcss-cli@latest autoprefixer@latest
npx tailwindcss init -p
npm install -D cssnano (optional - for minify css)
npm run build
``` -->
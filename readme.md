# To use vite commands
I ran npm install -g vite

# To run locally:
vite - this will have local changes

# Preview
to see what the production build looks like, type vite preview - this will show what the build created

# To create the production build for GH-Pages


You need to run npm run build to get the dist folder initially, then "vite build" should update it

  "scripts": {
    "start": "vite",
    "build": "vite build --outDir dist --base=/Jocie-Portfolio/",
    "predeploy": "npm run build",
    "deploy": "gh-pages -d dist -r https://github.com/caroleatierney/Jocie-Portfolio.git"
  },
This 
"deploy"
 script will:

Run vite build to create the production build of your application in the dist folder.
Then, it will use the gh-pages package to deploy the contents of the dist folder to the gh-pages branch of your GitHub repository.

npm run dev
npm run build
npm run preview to get it to go to 8080
npm run deplo

     "homepage": "https://github.com/caroleatierney/Jocie-Portfolio",

      input: {
        main: path.resolve(__dirname, "../src/main.js"),
      },

      outDir: "../Jocie-Portfolio/dist",

        main: path.resolve(__dirname, "../src/main.js"),

index.html
    <script type="module" src="./src/main.js"></script>
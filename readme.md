# To use vite commands
I ran npm install -g vite

# To run locally:
vite - this will have local changes

# Preview
to see what the production build looks like, type vite preview - this will show what the build created

# To create the production build for GH-Pages


You need to run "npm run build" to get the dist folder initially

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

** Make sure you are deploying from GH-Pages branch!!!

npm run preview (is set up to build and to get it to go to 8080)
npm run deploy (need to refresh browser)
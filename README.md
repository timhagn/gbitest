# GBI-Test

A quick example repo for [`gatsby-background-image`](https://github.com/timhagn/gatsby-background-image) 
to demonstrate what it can do and it's similarities & differences to `gatsby-image`.

## Creation

`gbitest` is based on [`gatsby-starter-default`](https://github.com/gatsbyjs/gatsby-starter-default)
sprinkled with [`styled-components`](https://www.styled-components.com/) and the 
small but practical [`styled-media-query`](https://github.com/morajabi/styled-media-query).  
And last but not least, of course `gatsby-background-image` is part of the crew ; ).

## Getting Started

Simple clone this repo and run `yarn` or `npm install` to install.
`yarn develop` or `npm run develop` gives you a working [localhost server](http://localhost:8000/).

On the left side you see content wrapped by `<BackgroundImage />` from `gatsby-background-image`,
on the right (for comparison) a pure `gatsby-image`. 

Feel free to play around with the `BackgroundSection` in [src/components/index.js](src/components/index.js).

There are also included examples on how to target the pseudo-elements in 
the mentioned file as well as at the end of the CSS-file [src/components/layout.css](src/components/layout.css).

## Contributing to `gatsby-background-image` with this repository

Fork [`gatsby-background-image`](https://github.com/timhagn/gatsby-background-image), 
clone your fork of it to it's own folder and execute either `yarn link` or `npm link` 
in there.

Then change back to your `gbitest` folder and execute 
`yarn link gatsby-background-image` or `npm link gatsby-background-image` accordingly.

Now you only have to change the line `import BackgroundImage from 'gatsby-background-image'`
to `import BackgroundImage from 'gatsby-background-image/src'` in 
[src/components/index.js](src/components/index.js) and you are good to go!

#### Hav Phun : )!
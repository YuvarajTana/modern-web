<!-- Quick recap of, how Next.js application Works  -->
## What is and Why Next.Js
- Next.js is React framework for building full-stack web applications 
    
- React features to build user interfaces, and Next.js additonal features and optimzations. It also abstracts and automatically configures tooling needed for React, like bundling, compiling and more. 

- This allows us to focus on building application rather spending time with configuration.

## Routing 
- Next.js uses a file-system based router where folders are used to define routes.
- Each folder represents a route segment that maps to a URL segment, to create nested route, we can nest folders inside each other

![File syetem based routing](./images/route-segments-to-path-segments.avif)

- A special page.js is used to make route segments publicly accessible.

![Page.js file ](./images/defining-routes.avif)


#### Pages
- A page is UI, that is unique to route, by default exporting a component from a page.js file 

#### Layouts
- A layout is UI, that is shared between multiple routes 
- On navigation, layouts preserve, state, remain interactive, and do not re-render 
- **Root Layout** is required file, defined top level of app directory and applies to all routes. It must contain html and body tags.
- **Nested Layouts** The two layouts would be nested each other 
![Nested Layouts](./images/nested-layouts-ui.avif)

### Templates 

## Rendering 

## Data Fetching 

## Styling 

## Optimizings

## Configuration 

## Deploying 

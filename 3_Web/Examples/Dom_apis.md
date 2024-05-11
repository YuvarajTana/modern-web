<!-- Everything about DOM API -->

## DOM API

- DOM stands for document object model, it exposes set of api's to create, read, update, and deletion of html elements and css styles thorugh JavaScript


<!-- Creation of elements -->
**document.createElement()**
    - document.createElement('div') ====> <div>​</div>​
**document.setAttribute**
```JavaScript
    const node = document.getElementById("div");
    const a = document.createAttribute("my_attrib");
    a.value = "newVal";
    node.setAttributeNode(a)
```

<!-- Slection of document elements -->

```JavaScript
    const el = document.getElementById("testId");
    const el = document.querySelector("#testId");
    const el = document.querySelectorAll(".test");

```
<!-- Update  -->



<!-- Server communication -->


```JavaScript

    async function logMovies() {
        const response = await fetch("http://example.com/movies.json");
        const movies = await response.json();
        console.log(movies);
    }


    fetchMovies()


    // fetch(url, { method: "POST", headers:{ conetent-type: ""} body:JSON.stringfy(data)})

    // Uploading file ---> body will be formData 

    // 

```
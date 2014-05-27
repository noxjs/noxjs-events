# Nox Events

This is a module for Nox.js, it's pretty simple, it basically handles events on elements in the jQuery style!

It needs Nox.js on your page to work properly.

## Usage

Include it on your page, after Nox.js of course.

Then include it on your module and start using:

``` js
// the "vent" parameter is optional, it can be any name you want
Nox('App', 'events', function(App, vent) {
  App.fn.initialize = function() {
    this.addEvents();
  };

  App.fn.addEvents = function() {
    vent('.clickClass').on('click', this.clickHandler);
    vent('#clickId').on('click', this.clickHandler);
  };

  App.fn.clickHandler = function(e) {
    console.log(e);
    console.log(this); // it points to the element
  };
});

new App().initialize();
```

Pretty simple... it works with all native events of browser such as `click` ,`mouseover`, `mouseenter` and so on...

You can also use **DOM objects** as parameters to the events module:
``` js
// the "vent" parameter is optional, it can be any name you want
Nox('App', 'events', function(App, vent) {
  App.fn.initialize = function() {
    this.addEvents();
  };

  App.fn.addEvents = function() {
    vent(document.getElementById('someId')).on('click', this.clickHandler);
  };

  App.fn.clickHandler = function(e) {
    console.log(e);
    console.log(this); // it points to the element
  };
});

new App().initialize();
```


### Unbind methods

Easy busy, like so:

``` js
vent('.clickClass').on('click', this.clickHandler);
vent('.clickClass').unbind('click', this.clickHandler);
```

## Todos

- Refactor a little bit the core code.

- Improve this README.

- Create tests

## Maintainer

- Mauricio Soares - <http://github.com/msodeveloper>

## Contributing

1. [Fork](http://help.github.com/forking/) Nox.js
2. Create a topic branch - `git checkout -b my_branch`
3. Push to your branch - `git push origin my_branch`
4. Send me a [Pull Request](https://help.github.com/articles/using-pull-requests)
5. That's it!

Please respect the indentation rules and code style.

Use 2 spaces, not tabs.

New features? Would you mind testing it? :)

## Testing

You need [NodeJS](http://nodejs.org/) installed on your machine

1. Run `npm install`
2. Run `npm install -g grunt-cli` to install the grunt command
3. Run `npm test`

## License

(The MIT License)

Permission is hereby granted, free of charge, to any person obtaining
a copy of this software and associated documentation files (the
'Software'), to deal in the Software without restriction, including
without limitation the rights to use, copy, modify, merge, publish,
distribute, sublicense, and/or sell copies of the Software, and to
permit persons to whom the Software is furnished to do so, subject to
the following conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY
CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT,
TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE
SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
describe('Testing nox-events core', function() {
  it('should define the vent function into the Nox contructor', function() {
    Nox('App.Test', 'events', function(Test, vent) {
      expect(vent).not.toBeUndefined();
    });

    new App.Test();
  });

  it('should throw an event when element is clicked', function() {
    var foo = {
      fn: function() {}
    },
    div = $('<div>'),

    // little hack for using click handlers in jasmine (trigger in jquery dont work with native events in javascript)
    clickEvent = document.createEvent('MouseEvents');
    clickEvent.initMouseEvent('click', true, true, window, 0, 0, 0, 0, 0, false, false, false, false, 0, null);

    div.addClass('element');
    $('body').append(div);

    spyOn(foo, 'fn');

    Nox('App.Test2', 'events', function(test, vent) {
      test.fn.initialize = function() {
        vent('.element').on('click', this.handler);
      };

      test.fn.handler = function() {
        foo.fn();
      }
    });

    new App.Test2();

    div[0].dispatchEvent(clickEvent);

    expect(foo.fn).toHaveBeenCalled();
  });
});
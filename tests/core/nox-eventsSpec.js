describe('Testing nox-events core', function() {
  it('should define the vent function into the Nox contructor', function() {

    Nox('App.Test', 'events', function(Test, vent) {
      expect(vent).not.toBeUndefined();
    });

    new App.Test();
  });
});
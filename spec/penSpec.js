describe("Pen", function() {
  var subject;

  beforeEach(function() {
    subject = new Pen();
  });

  describe("::new", function() {
    it("should create a new pen", function() {
      expect(subject instanceof Pen).toBe(true);
    });
  });

  describe("add", function() {
    it("should be able to add a sheep to a pen", function() {
      var bessie = {};

      expect(function() {
        subject.add(bessie);
      }).not.toThrow();
    });
  });

  describe("listNames", function() {
    it("should return list of all sheep in the pen", function() {
      var bessie = { name: null };
      spyOn(bessie, "name").and.returnValue("Bessie");

      var tessie = { name: null };
      spyOn(tessie, "name").and.returnValue("Tessie");

      subject.add(bessie);
      subject.add(tessie);

      expect(subject.listNames()).toEqual(["Bessie", "Tessie"]);
    });
  });
});

describe("Sheep", function() {
  var subject;

  beforeEach(function() {
    subject = new Sheep("Bessie");
  });

  describe("::new", function() {
    it("should create a new sheep", function() {
      expect(subject instanceof Sheep).toBe(true);
    });
  });

  describe("name", function() {
    it("should return sheep's name", function() {
      expect(subject.name()).toBe("Bessie");
    });
  });
});

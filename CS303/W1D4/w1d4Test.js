




describe("randomInteger",function(){
    it("generates a random number between 2 and 5",function(){
        expect(randomInteger(2,5)).to.be.within(2,5);
        
    });
});
describe("randomInteger",function(){
    it("generates a random number between 2 and 5",function(){
        asserts.isAtLeast(randomInteger(2,5),2,"the random number is greater than or equal to 2");
    }
}
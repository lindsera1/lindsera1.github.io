"use strict";

describe("maxOfThree",function(){
    
    it("returns 3 as the largest", function(){
        assert.equal(maxofThree(1,2,3),3);
    });

    it("returns 9 as the largest",function(){
        assert.equal(maxofThree(9,2,3),9);
    });

    it("returns -2 as the largest",function(){
        assert.equal(maxofThree(-5,-12,-2),-2);
    });
});

describe("sum",function(){
    
    it("returns 10 as the sum", function(){
        assert.equal(sum([1,2,3,4]),10);
    });

    it("returns 26 as the sum",function(){
        assert.equal(sum([1,3,5]),9);
    });

    it("returns -12 as the sum",function(){
        assert.equal(sum([0,-12,0]),-12);
    });
});

describe("findLongestWord",function(){
    it("returns 3 as the longest length", function(){
        assert.equal(findLongestWord(["hi","bye","I"]),3);
    });

    it("returns 5 as the longest length",function(){
        assert.equal(findLongestWord(["hi","hello","I"]),5);
    });

    it("returns 8 as the longest length",function(){
        assert.equal(findLongestWord(["hi","goodness","I"]),8);
    });
});

describe("isVowel", function () {
    it("a is vowel", function () {
    assert.equal(isVowel("a"), true);
    });
    it("e is vowel", function () {
    assert.equal(isVowel("e"), true);
    });
    it("i is vowel", function () {
    assert.equal(isVowel("i"), true);
    });
    it("o is vowel", function () {
    assert.equal(isVowel("o"), true);
    });
    it("u is vowel", function () {
    assert.equal(isVowel("u"), true);
    });
    it("z is not vowel", function () {
    assert.equal(isVowel("z"), false);
    });
    it("5 is not vowel", function () {
    assert.equal(isVowel("5"), false);
    });
   });
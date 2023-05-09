"use strict";

const { MarkovMachine } = require("./markov");

describe("test markovMachine", function (){
  let newMachine;

  beforeEach(function () {
     newMachine = new MarkovMachine("a b a c")
  });

  test("testing getChains", function(){
    expect(newMachine.chains).toEqual({"a": ["b", "c"], "b": ["a"], "c": [undefined]})
  })

  test("testing getText", function(){
    let result = newMachine.getText()

    expect(result.endsWith("a c")).toEqual(true)
  })

  test("testing failed getText ", function(){
    let notPossibleCombos = ["a b c b", "c a", "a b c a"];

    expect(notPossibleCombos).not.toContain(newMachine.getText())
  })
});
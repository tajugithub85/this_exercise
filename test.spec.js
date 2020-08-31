describe("sumEvenArguments", function(){
	it("takes all of the arguments passed to a function and returns the sum of the even ones", function(){
		expect(sumEvenArguments(1, 2, 3, 4)).toEqual(6) 
		expect(sumEvenArguments(1, 2, 6)).toEqual(8)
		expect(sumEvenArguments(1,2,)).toEqual(2)
	});
   });

const expect = require('expect');

const utils = require('./utils');



describe('Utils', () => { // wrapping up test to get test blocks

    it('should add two numbers', () => {
        var res = utils.add(33, 11);
        expect(res).toBe(44).toBeA('number');
        // basic example of Error throwing
        // if (res !== 44){
        //     throw new Error(`Expected 44, but got ${res}`);
        // }
    });
    
    it('should async add two numbers', (done) => {
        utils.asyncAdd(4,3, (sum) => {
            expect(sum).toBe(7).toBeA("number");
            done(); // for async testing
        });
    });
    
    it('should square number', () => {
        var resSquare = utils.square(2);
        expect(resSquare).toBe(4).toBeA('number');
        // if (resSquare !== 4) {
        //     throw new Error(`Expected 4, but got ${resSquare}`);
        // }
    });
    
    it('should async square a number', (done) => {
        utils.asyncSquare(2, (sqr) => {
            expect(sqr).toBe(4).toBeA('number');
            done();
        });
    });

}); // end of .describe()



it('should expect firstName and lastName to be set', () => {
    var user = {location: 'Phil', age: 25}
    var res = utils.setName(user, 'Andrew Mead');

    //expect(user).toEqual(res); //equals cause it's same obj passed by reference

    expect(res)
        .toInclude({firstName: 'Andrew'})
        .toInclude({lastName: 'Mead'})
});

// it('should expect toBe, toEqual, toInclude', () => {
//     // expect(12).toNotBe(11); // .toBe() and .toNotBe() good for primitives
//     // expect({name: 'Andrew'}).toEqual({name: 'Andrew'}); //.toEqual() .toNotEqual() - objects and arrays
//     // expect([2,3,4]).toInclude(4); // .toInclude() .toExclude(4)
//     expect({
//         name: 'Andrew',
//         age: 25,
//         location: 'Philadelphia'
//     }).toInclude({
//         age: 25
//     })
// });
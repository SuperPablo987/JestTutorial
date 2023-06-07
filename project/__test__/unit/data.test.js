const data = require('../../data');
const db = require('../../fakeDb');
const notification = require('../../notifications');


describe('absolute', () => {
    it ('should return positive number if positive', ()=> {
        const result = data.absolute(1);
        expect(result).toBe(1);
    });
    it ('should return positive number if negative', ()=> {
        const result = data.absolute(-1);
        expect(result).toBe(1);
    });
    it ('should return zero number if zero', ()=> {
        const result = data.absolute(0);
        expect(result).toBe(0);
    });
});

describe('welcome', () => {
    it('should return welcome message', () => {
        const result = data.welcome('Adam');
        // expect(result).toBe('Hello Adam');   // not recommended
        expect(result).toMatch(/Adam/);      // using regex
        expect(result).toContain('Adam');    // using contains
    })
})

describe('sizes', () => {
    it('should return available sizes', () => {
      const result = ['S','M','L'];
      expect(result).toEqual(expect.arrayContaining(['S','M','L']));
    })
})

describe('getUser', () => {
    it('should return user of userId', () => {
      const result = data.getUser(1)
      //expect(result).toBe({id:1, age:20});           // test fail
      expect(result).toMatchObject({id:1, age:20});  // pass test
      expect(result).toHaveProperty('id', 1);        // pass test
    })
}) //toBe() will result in an error, as it compares the references of the object in memory with the object passed as the parameter. Therefore, we’re left with the following alternatives: 


describe('regsiterUser', () => {
    it ('should throw error if email is falsy', ()=> {
        const args = [null, undefined, NaN, 0, '', false]; 
        args.forEach(a => {
            expect(()=>{data.registerUser(a)}).toThrow();
        });
    });
    it ('should return user if valid email', ()=> {
        const result = data.registerUser('adam@email.com');
        expect(result).toMatchObject({email: 'adam@email.com'});
    });
});


describe('discount', () => {
  it('should apply 20% discount if points greater than 10', () => {
    db.getUser = function(userId) {
      return {id: userId, points:11};
    }
    const order = {userId:1, total:80};
    data.discount(order);
    expect(order.total).toBe(80)  })
})

describe('notifyUser', () => {
    it('should notify to customer', ()=> {
      db.getUserEmail = jest.fn().mockReturnValue({email: 'a'});
      // db.getUserEmail = function(userId){
      //  return {email: 'a'};
      //} 
      
      notification.send = jest.fn();
    // let notified = false;
    // notification.send = function(email, message) { 
    //   notified= true;
    // }
    
    data.notifyUser({userId:1}); 
    // expect(notified).toBe(true);  
    expect(notification.send).toHaveBeenCalled();
    })
  })
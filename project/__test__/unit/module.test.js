// Familiarizing with the Jest syntax
test('Sample test', () => {} );

function absolute(number){
    if (number > 0) return number;           // path 1
    if (number < 0) return -number;          // path 2
    return 0;                                // path 3
}

test('absolute - should result path 1', () => {} );
test('absolute - should result path 2', () => {} );
test('absolute - should result path 3', () => {} );

describe('absolute', () => {
    it ('should result path 1', ()=> {});
    it ('should result path 2', ()=> {});
    it ('should result path 3', ()=> {})
});
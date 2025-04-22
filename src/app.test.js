const { dayOfTheWeek, monthOfTheYear } = require('./app');


test('getDay returns the long-format day of the week', () => {
    const day = dayOfTheWeek( new Date('3/11/2020') );
    expect( day ).toBe('Wednesday');
    // expect( day ).not.toBe('Monday');
});
test('getMonth returns the long-format month of the year', () => {
    const month = monthOfTheYear( new Date('3/11/2020') );
    expect( month ).toBe('November');
    // expect( month ).not.toBe('January');
});
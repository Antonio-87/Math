import Magician from '../magician';
import Daemon from '../daemon';
import Bowman from '../bowman';

test('check stoned', () => {
    const daemon = new Daemon('Nick');
    daemon.stonedChange();
    expect(daemon.stoneded).toBeTruthy();
});

test.each([
    { positon: 0, expected: 100 },
    { positon: 1, expected: 100 },
    { positon: 2, expected: 90 },
    { positon: 3, expected: 80 },
    { positon: 4, expected: 70 },
    { positon: 5, expected: 60 },
])('setAttack without stoned', ({ positon, expected }) => {
    const magician = new Magician('Horman');
    magician.setAttack(positon);
    expect(magician.attack).toBe(expected);
});

test.each([
    { positon: 2, expected: 85 },
])('setAttack with stoned', ({ positon, expected }) => {
    const magician = new Magician('Horman');
    magician.stonedChange();
    magician.setAttack(positon);
    expect(magician.attack).toBe(expected);
});

test.each([
    { positon: 1, expected: 100 },
    { positon: 2, expected: 100 },
    { positon: 3, expected: 100 },
    { positon: 4, expected: 100 },
    { positon: 5, expected: 100 },
])('rules only for the daemon and magician', ({ positon, expected }) => {
    const bowman = new Bowman('Lary');
    bowman.setAttack(positon);
    expect(bowman.attack).toBe(expected);
});

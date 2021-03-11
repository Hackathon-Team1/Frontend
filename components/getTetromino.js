import react from 'React';

export const tetrominos = {
    L: {
        shape: [
            [0, 'L', 0],
            [0, 'L', 0],
            [0, 'L', 'L']
        ],
        color: 'yellow'
    },
    O: {
        shape: [
            ['O', 'O'],
            ['O', 'O'],
        ],
        color: 'pink'
    },
    T: {
        shape: [
            ['T', 'T', 'T'],
            [0, 'T', 0],
            [0, 0, 0]
        ],
        color: 'blue'
    },
    S: {
        shape: [
            [0, 'S', 'S'],
            ['S', 'S', 0],
            [0, 0, 0]
        ],
        color: 'green'
    },
    I: {
        shape: [
            [0, 'I', 0, 0],
            [0, 'I', 0, 0],
            [0, 'I', 0, 0],
            [0, 'I', 0, 0]
        ],
        color: 'red'
    },
    Z: {
        shape: [
            ['Z', 'Z', 0],
            [0, 'Z', 'Z'],
            [0, 0, 0]
        ],
        color: 'purple'
    },
    J: {
        shape: [
            [0, 'J', 0],
            [0, 'J', 0],
            ['J', 'J', 0]
        ],
        color: 'orange'
    }
}

export function generateNumber() {
    //generate numbers from 0-6
    const tetro = 'LOTSIZJ';
    const temp = Math.floor(Math.random() * 7);
    return tetrominos[tetro.charAt(temp)];

}
import react from 'React';

//i tweaked it, probably doesn't work now
export default function getTetromino() {
    const tetrominos = [
        {
            shape: [
                [0, 'L', 0],
                [0, 'L', 0],
                [0, 'L', 'L']
            ]
        },
        {
            shape: [
                ['O', 'O'],
                ['O', 'O'],
            ]
        },
        {
            shape: [
                ['T', 'T', 'T'],
                [0, 'T', 0],
                [0, 0, 0]
            ]
        },
        {
            shape: [
                [0, 'S', 'S'],
                ['S', 'S', 0],
                [0, 0, 0]
            ]
        },
        {
            shape: [
                [0, 'I', 0, 0],
                [0, 'I', 0, 0],
                [0, 'I', 0, 0],
                [0, 'I', 0, 0]
            ]
        },
        {
            shape: [
                ['Z', 'Z', 0],
                [0, 'Z', 'Z'],
                [0, 0, 0]
            ]
        },
        {
            shape: [
                [0, 'J', 0],
                [0, 'J', 0],
                ['J', 'J', 0]
            ]
        },
    ]

    function generateNumber() {
        //generate numbers from 0-6
        const temp = Math.floor(Math.random() * 7);
        return temp;
    }

    return tetrominos[generateNumber()].shape;
}
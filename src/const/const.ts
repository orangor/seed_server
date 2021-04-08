
const ONE = 1;
const  enum LETTER {
    A = 1,
    B = 2,
    C = 3,
    D = 4
}
interface CARD_CELL {
    name: string
    id: string
}
interface CARD_NODE {
    name: string;
    list: CARD_CELL[]
}
export { ONE, LETTER, CARD_CELL, CARD_NODE }
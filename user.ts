/*---------Aula 08 - Estendendo Type Aliases com Intersection */
// accountInfo
// charInfo

type AccountInfo = {
    id: number | string;
    name: string;
    email?: string;
}

const account: AccountInfo = {
    id: 1,
    name: "Luan Moraes",    
}

type CharInfo = {
    nickname: string;
    level: number;
}

const char: CharInfo = {
    nickname: "Luan",
    level: 100
}

// Intersection
type PlayerInfo = AccountInfo & CharInfo;

const player: PlayerInfo = {
    id: "123",
    name: "Luan Moraes",
    nickname: 'Luan',
    level: 200
}

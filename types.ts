/*--------Aula 05---------*/

// boolean (true/false)
let isOpen: boolean;
isOpen = true;

// string ('foo', "foo", `foo`)
let message: string;
message = `foo ${isOpen}`;

// number (int, float, hex, binary)
let total: number;
total = 0xff0;

// array (type[])
let items: string[];
items = ["foo", "bar"];

let values: Array<number>;
values = [1, 3, 5]

// tuple: sei quantos elementos tenho e de quais tipos eles sao
let title: [number, string, string];
title = [1, "foo", "bar"];

// enum
enum Colors {
    white = "#fff",
    black = "#000"
}

// any(qulaquer coisa) nao e legal!
let coisa: any;
coisa = [1];

// void(vazio)
function logger(): void {
    console.log('foo');
}

// null / undefined
type Bla = string | undefined;

// never
function error(): never {
    throw new Error("error");
}

// object
let cart: object;

cart = {
    key: "fi",
};

/*-------Aula 06 - Type Inference --------- */ 

// Type Inference
let message2 = "mesangem definida";
message2 = "string nova";

window.addEventListener('click', (e) => {
    console.log(e.target);
})



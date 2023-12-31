// const nums: number[] = [];
const nums: Array<number> = [];
const colors: Array<string> = [];

// const inputEl = document.querySelector<HTMLInputElement>("#username")!;
// console.dir(inputEl)
// inputEl.value = "Hacked";

// const btn = document.querySelector<HTMLButtonElement>(".btn")!;

// function merge<T, U>(object1: T, object2: U) {
//     return {
//         ...object1,
//         ...object2
//     };
// }

// const comboObj = merge({ title: "Software Enginer"}, { pets: ["pickles", "doggy"]});

// interface Lengthy {
//     length: number;
// };

// //function with Generic T extending properties from the interface of Lengthy
// function printDoubleLength<T extends Lengthy>(thing: T): number {
//     return thing.length * 2;
// }

function makeEmptyList<T>(): T[] {
    return [];
};

const numbers = makeEmptyList<number>();


// Generic classes
interface Song {
    title: string;
    artist: string;
}

interface Video {
    title: string;
    creator: string;
    resolution: string;
}

class Playlist<T> {
    public queue: T[] = [];

    add(el: T) {
        this.queue.push(el)
    }
}


const songs = new Playlist<Song>();

const videos = new Playlist<Video>();
// I could create many functions that have different purposes add, remove, update, search
// videos.add();
// Type guard

function twoTypes(id: number | string) {
    if (typeof id === "string") {
        console.log("Hey that was a string with a text value of : " + id);
    } else if (typeof id === "number") {
        console.log("Hey that was a number and it equals" + id);
    }
}

function repeatThrice(value: number | string) {
    if (typeof value === "string") {
        return value.repeat(3);
    }
}

// Truthiness Guard

const printLettersFromWord = (word?: string) => {
    if(word) {
        for (let char of word){
            console.log(char);
        }
    } else {
        console.log("You did not pass in a word!");
    }
}

// Equality Narrowing withequality operators

const someFunc = (x: string | boolean, y: string | number) => {
    if ( x === y) {
        x.toUpperCase();
        y.toLowerCase();
    } else {
        console.log(x);
        console.log(y);
    }
}

// Narrowing with the "in" operator

type Tiger = { meow: () => void };
type Wolf = { bark: () => void};

const talk = ( creature: Tiger | Wolf) => {
    if ("meow" in creature) {
        console.log(creature.meow());
    } else {
        console.log(creature.bark());
    }
}

const kitty: Tiger = { meow: () => 'Meowww'};
talk(kitty);

// InstanceOf


// Type Predicates

interface VideoGame {
    title: string;
    playTime: number;
}

interface Trailer {
    title: string;
    studioRelease: string;
}

function isVideoGame(production: VideoGame | Trailer): production is VideoGame {
    return (production as VideoGame).playTime !== undefined;
}

function releaseMedia(production: VideoGame | Trailer): string {
    if (isVideoGame(production)) {
        production;
        return "Video Game Launched!";
    } else {
        production;
        return "Trailer Released!";
    }
}

// Discriminated Unions

interface USDZ {
    useCase: string;
    fileSize: number;
    dateEntered: number;
    __extension: ".usdz";
}

interface OBJ {
    useCase: string;
    fileSize: number;
    dateEntered: number;
    __extension: ".obj"
}

interface ThreeDS {
    useCase: string;
    fileSize: number;
    dateEntered: number;
    __extension: ".3ds";
}

type fileFormat = USDZ | OBJ | ThreeDS;

function get3DAssets(file: fileFormat) {
    switch (file.__extension) {
        case ".usdz":
            return "USDZ file";
        case ".3ds":
            return "3D Maya File";
        case ".obj":
            return "OBJ File";
        default:
        // We should never make it here, if we handled all cases correctly
        //   const shouldNeverGetHere: never = file;
        //   return shouldNeverGetHere
            const _exhaustiveCheck: never = file;
            return _exhaustiveCheck;
    }
}
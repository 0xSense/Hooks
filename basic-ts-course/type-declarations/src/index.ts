import axios from "axios";
import _ from "lodash";


_.sample([9, 99,999,9999,99999])
interface User {
    id: number;
    name: string;
    username: string;
    email: string;
    address: {
        street: string;
        suite: string;
        city: string;
        zipcode: string;
        geo: {
            lat: string;
            lng: string;
        };
    };
    phone: string;
    website: string;
    company: {
        name: string;
        catchPhrase: string;
        bs: string;
    };
}

axios.get<User>("https://jsonplaceholder.typicode.com/users/1")
.then((res) => {
    console.log("WOOOOO!!!");
    printUser(res.data);
})
.catch((e) => {
    console.log("Error", e);
});

axios
    .get<User[]>("https://jsonplaceholder.typicode.com/users")
    .then((res) => {
        console.log("Wooooo!");
        res.data.forEach(printUser);
    })
    .catch((e) => {
        console.log("Error!", e);
    })

function printUser(user: User) {
    console.log(user.name);
    console.log(user.email);
    console.log(user.phone);
}
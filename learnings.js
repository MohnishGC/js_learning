// console.log("HI Yash");
// let name01 = "Mohnish";
// console.log(name01);
// alert(name01);

function MyButton() {
    return (
        <button>
            I'm a button
        </button>
    );
}

export default function MyApp() {
    return (
        <div>
            <h1>Welcome to my app</h1>
            <MyButton />
        </div>
    );
}
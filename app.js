console.log("Let's Start");

async function main() {

    let a = await fetch("http://127.0.0.1:3000/Nasheed/")
    let response = await a.text();
    console.log(response)
}

main()

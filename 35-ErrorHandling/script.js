// ReferenceError
// TypeError
// SyntaxError
// URIError

// Error

let user = {

    name: "Emrecan Kurşun"
}

try {
    // console.log(myFunction());
    console.log(user.name);

    if (!user.email) {
        throw new Error("User has no email property");
    }

} catch (e) {

    console.log(e);
    console.log(e.message);
    console.log(e.name);
    console.log(e instanceof ReferenceError);
    console.log(e instanceof TypeError);
    console.log(typeof e);
} finally {

    console.log("Finally Block");
}
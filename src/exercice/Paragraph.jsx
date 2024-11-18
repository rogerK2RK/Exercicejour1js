import Boolean from './Boolean';


export default function Paragraph() {
    // Un titre soit en rouge soit en bleu en fonction d'un boolean
    // let isLoggedIn = false;
    console.log(Boolean());

    return (
        <>
            <h1>{Boolean() ? "Hello" : "Goodbye"}</h1>
        </>
    );
}
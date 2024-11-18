import './Style.css'
import Boolean from './Boolean';


export default function Title() {
    // Un titre soit en rouge soit en bleu en fonction d'un boolean
    // let isChecked = false;

    return (
        <>
            <h1 className={Boolean() ? "red" : "blue"}>Hello la team comment ça va ?</h1>
        </>
    );
}

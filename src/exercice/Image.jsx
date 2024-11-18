
import './Style.css'
import Boolean from './Boolean';


export default function Image() {
    /*
        Afficher soit:
            - https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcTq1KZI9GbrTXSAmN0cj7bxaR7lweiUfwxRbGiVgH8SfSVKJyH1
            - https://www.zoologiste.com/images/main/lama.jpg
        en fonction d'un boolean
    */
        // let isChecked = false;
        const img1 = "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcTq1KZI9GbrTXSAmN0cj7bxaR7lweiUfwxRbGiVgH8SfSVKJyH1";
        const img2 = "https://www.zoologiste.com/images/main/lama.jpg";


        return (
            <>
                <img src={Boolean() ? img1 : img2} />
            </>
        );
}
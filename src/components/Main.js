import { useState } from "react";

function Main() {

    // state pour stocker le données 
    const [langages, setLangages] = useState(["js", "java", "go", "python", "php"]);

    const [nom1, nom2] = ["Kevin", "Maiwen", "Jayson"];


    // comportement

    const handleDelete = (index) => {
        // c'est de modifier la table en utilisant setLangages et supprimer l'élément selectionné
        alert(index);

        setLangages(langages.filter((langage, i) => i !== index));


    }

    // affichage 

    return (
        <main>
            <ul>
                {langages.map((langage, i) => <li key={i}>{langage.toUpperCase()} {i}  <button onClick={() => handleDelete(i)}>X</button></li>)}
            </ul>

        </main>



    );

}

export default Main;
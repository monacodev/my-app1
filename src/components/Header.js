

function Header(props) {

    // state 

    // comportement

    // affichage à partir de là je fais du jsx 
    // les accolades me permettent de faire l'interpolation pour pouvoir me metre en mode js 
    return (
        <header className="App-header">
            <h1>{props.titre}</h1>

            <p> juste du texte rien que du texte</p>
        </header>
    );

}


export default Header;

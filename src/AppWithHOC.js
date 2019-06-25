import React from 'react';
import withCatHugs from './higherOrderComponent/CatData';


function App(props) {

    let cat = props.cat;

    return (
        <div className="App">
            <h1>Hugged by HOC</h1>
            {(cat.breeds[0]) ? <h2 className="breed"> {cat.breeds[0].name} </h2> : ''}
            <img className="cat-image" src={cat.url} alt="your loving cat"/>


            <style>{`
                 .App{
                   color: white;
                   text-align: center;
                   background-color: black;
                   height: 100vh;
                 }

                 h1 {
                     margin-top: unset;
                     margin-bottom: 20px;
                 }

                 .breed {
                   size: 25px;
                 }

                 .cat-image{
                   margin-top: 50px;
                   max-width: 500px;
                   max-height: 500px;
                 }

                  `}
            </style>


        </div>
    );
}

//export default App;


export default withCatHugs(App);

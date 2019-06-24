import React from 'react';
import CatDataToChildren from './renderChildren/CatDataToChildren';
import './App.css';

function App() {
  return (
    <div className="App">

      {/*Render Children Props */}
      {/*<CatDataToChildren>*/}
          {/*{(cat) =>  <img src={cat.url} />}*/}
      {/*</CatDataToChildren>*/}


      {/*Render Props */}
      <CatDataToChildren
        // render={catImage => <img src={catImage} />}
        // children = {catImage => <img src={catImage} />}


        // getCats = {cat => (
        //     [
        //         (cat.breeds[0]) ? <h2 className="breed"> {cat.breeds[0].name} </h2> : '',
        //       <img className="cat-image" src={cat.url} />
        //     ]
        // )}

        getCats = {cat => (
        <React.Fragment>
            {(cat.breeds[0]) ? <h2 className="breed"> {cat.breeds[0].name} </h2> : ''}
            <img className="cat-image" src={cat.url} />
        </React.Fragment>

        )}
      />

      <style jsx>{`

      .App{
        text-align: center;
        margin-top: 50px;
      }

      .breed {
        size: 25px;
      }

      .cat-image{
        max-width: 500px;
        max-height: 500px;
      }

      `}
      </style>


    </div>
  );
}

export default App;

import React from 'react';
import CatDataToChildren from './renderChildren/CatDataToChildren';

function AppWithRenderProps() {
  return (
    <div className="App">

      {/*Render Children Props */}
      <CatDataToChildren>
          {(cat) =>  <img src={cat.url} />}
      </CatDataToChildren>


      {/*Render Props */}
      <CatDataToChildren
        // getCats={catImage => <img src={catImage} />}
        // children = {catImage => <img src={catImage} />}


        render = {cat => (
        <React.Fragment>
            {(cat.breeds[0]) ? <h2 className="breed"> {cat.breeds[0].name} </h2> : ''},
            <img className="cat-image" src={cat.url} alt="your loving cat"/>
        </React.Fragment>

            // getCats = {cat => (
            //     [
            //         (cat.breeds[0]) ? <h2 className="breed"> {cat.breeds[0].name} </h2> : '',
            //       <img className="cat-image" src={cat.url} />
            //     ]
            // )}

        )}
      />

      <style>{`
          .App{
            text-align: center;
          }

          .breed {
            size: 25px;
          }

          .cat-image{
            max-width: 500px;
            margin-top: 50px;
            max-height: 500px;
          }
      `}
      </style>


    </div>
  );
}

export default AppWithRenderProps;

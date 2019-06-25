import React from 'react';
import useFetch from './CatDataHooks';

function AppWithHooks() {
    const {cat, loading} = useFetch();

    if(loading){
        return "Loading..."
    }

    if(cat) {
        return (
            <div className="App">
                    <img src={cat.url} alt="Your hugging cat?"/>
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

           `}</style>


            </div>
        )
    };

    return null;
}

export default AppWithHooks;

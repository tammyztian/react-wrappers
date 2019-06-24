import React from 'react';
import CatQuery from './CatDataToChildren';

export default ({children}) => (
    <CatQuery>
        {({data, loading, error}) => {
                if (loading) return 'Loading'
                if (error) return 'Error'

                let catImage = data[0].url;

                return children(catImage);
        }}
    </CatQuery>
)
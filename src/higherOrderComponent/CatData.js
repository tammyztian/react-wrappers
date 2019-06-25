import React from 'react';


const withCatHugs = (WrappedComponent) => {
    class Wrapper extends React.Component {
        constructor(props){
            super(props);

            this.state = {
                loading: true,
                error: false,
                data: {}
            };
        }

        componentDidMount() {
            fetch('https://api.thecatapi.com/v1/images/search')
                .then(res => res.json())
                .then(data => {
                    this.setState({ data: data, loading: false, error: false });
                })
                .catch(err => {
                    this.setState({ data: {}, error: true, loading: false });

                });
        }

        render() {
            let {data, loading, error} = this.state;

            if (loading) return 'Loading'

            if (error) return 'Error'



            if (data) {
                let cat = data[0];

                console.log(cat);

                return (
                    <WrappedComponent
                        {...this.props}
                        cat={cat}
                    />
                );

            }
        }
    }

    return Wrapper;
};


export default withCatHugs;
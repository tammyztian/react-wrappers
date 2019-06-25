import React from 'react';


export default class CatDataToChildren extends React.Component {
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
            let catImage = data[0].url;

            let cat = data[0];

            console.log(cat);

            return (this.props.children) ?
                this.props.children(cat) :
                this.props.getCats(cat)

            //Children is a 'built in' prop that contains the components nested inside it

        }


    }
}
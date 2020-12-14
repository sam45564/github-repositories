import React, { Component } from 'react';
import axios from 'axios';
import Content from './Content';

const resourceEndpoint = 'https://api.github.com/users/sam45564/repos';

export default class List extends Component {
    state = {
        repos: [],
        searchResult: [],
    };

    componentDidMount() {
        axios.get(resourceEndpoint)
            .then(response => {
                const { data } = response;
                this.setState({ repos: data, searchResult: data });
            })
            .catch(error => {
                console.error('An error occurred while fetching the repositories', error);
            });
    }

    render() {
        const { searchResult } = this.state;
        return (
            <React.Fragment>
                <input type="text" className="form-control" placeholder="Search..." onKeyDown={this.search} />
                <ul className="list-group col-12 p-0">
                    {searchResult && searchResult.map(repo => (
                        <Content key={repo.id} name={repo.name} url={repo.html_url} description={repo.description} addtInfo={repo.git_url} />
                    ))}
                </ul>
            </React.Fragment>
        )
    }

    search = (event) => {
        const { value: searchTerm } = event.target;
        const { repos } = this.state;

        if (!searchTerm) {
            this.setState({ searchResult: repos });
        } else {
            const result = repos && repos.filter(repo => repo.name.includes(searchTerm));
            const searchResult = [...result];
            this.setState({ searchResult });
        }
    }
}

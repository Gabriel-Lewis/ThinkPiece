import React,{Component} from 'react';

export default class NotFoundComponent extends Component {

    render() {
        return (
            <div className="error-message">
              <h3>404 page not found</h3>
              <p>We are sorry but the page you are looking for does not exist.</p>
            </div>
        );
    }
}

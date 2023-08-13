import React, {Component} from 'react';

class ErrorBoundary extends Component {
    state = {
        hasError: null
    }

    static getDerivedStateFromError(error) {
        return {hasError: true}
    }

    componentDidCatch(error, errorInfo) {
        console.log("error", error)
        console.log('errorInfo', errorInfo)
    }


    render() {
        if(this.state.hasError) {
            return <span>Error</span>
        }

        return (
            this.props.children
        );
    }
}

export default ErrorBoundary;
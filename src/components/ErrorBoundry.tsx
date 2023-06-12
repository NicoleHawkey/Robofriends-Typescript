import React, { Component, ReactNode } from "react";

interface IErrorBoundryProps {
    children: ReactNode;
}

interface IErrorBoundryState {
    hasError: boolean;
}

class ErrorBoundry extends React.Component<IErrorBoundryProps, IErrorBoundryState> {
    constructor (props: IErrorBoundryProps) {
        super(props);
        this.state= {
            hasError: false
        }
    }

    componentDidCatch(error: Error, info: React.ErrorInfo): void {
        this.setState({ hasError: true })
    }

    render(): ReactNode {
        if (this.state.hasError) {
         return <h1>Ooooops. This is not good.</h1>
        }
        return this.props.children as ReactNode;
    }
}

export default ErrorBoundry;
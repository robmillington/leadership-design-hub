import React, { Component, ErrorInfo, ReactNode } from "react";
import { Link } from "react-router-dom";

interface Props {
    children: ReactNode;
    fallback?: ReactNode;
}

interface State {
    hasError: boolean;
    error?: Error;
}

export class ErrorBoundary extends Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = { hasError: false };
    }

    static getDerivedStateFromError(error: Error): State {
        return { hasError: true, error };
    }

    componentDidCatch(error: Error, errorInfo: ErrorInfo) {
        console.error("ErrorBoundary caught an error:", error, errorInfo);
    }

    render() {
        if (this.state.hasError) {
            if (this.props.fallback) {
                return this.props.fallback;
            }

            return (
                <div className="container-narrow py-20">
                    <div className="text-center">
                        <h1 className="mb-6">Something went wrong</h1>
                        <p className="text-muted-foreground mb-8">
                            We encountered an unexpected error. Please try refreshing the page.
                        </p>
                        {this.state.error && process.env.NODE_ENV === "development" && (
                            <pre className="text-left bg-secondary p-4 rounded-lg overflow-x-auto text-sm mb-8">
                                {this.state.error.toString()}
                            </pre>
                        )}
                        <div className="flex gap-4 justify-center">
                            <button
                                onClick={() => window.location.reload()}
                                className="bg-primary text-primary-foreground px-6 py-2 rounded-lg hover:opacity-90 transition-opacity"
                            >
                                Refresh page
                            </button>
                            <Link
                                to="/"
                                className="bg-secondary text-secondary-foreground px-6 py-2 rounded-lg hover:opacity-90 transition-opacity"
                            >
                                Go home
                            </Link>
                        </div>
                    </div>
                </div>
            );
        }

        return this.props.children;
    }
}

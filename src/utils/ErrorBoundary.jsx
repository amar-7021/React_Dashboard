import { Component } from "react";
import PropTypes from "prop-types";

class ErrorBoundary extends Component {
	constructor(props) {
		super(props);

		this.state = { hasError: false, error: null, errorInfo: null };
	}

	// eslint-disable-next-line no-unused-vars
	static getDerivedStateFromError(error) {
		return { hasError: true };
	}

	componentDidCatch(error, errorInfo) {
		console.log(error, errorInfo);
	}
	render() {
		if (this.state.hasError) {
			return <div>Something went wrong. Please try again later.</div>;
		}

		return this.props.children;
	}
}

ErrorBoundary.propTypes = {
	children: PropTypes.node,
};

export default ErrorBoundary;

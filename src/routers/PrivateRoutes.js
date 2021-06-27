import React from "react";
import { Route, Redirect } from "react-router-dom";
import PropTypes from "prop-types";

export const PrivateRoutes = ({ isAuth, component: Component, ...rest }) => {
	
	localStorage.setItem('lastPath', rest.location.pathname)

	return (
		<Route
			{...rest}
			component={(props) =>
				isAuth ? <Component {...props} /> : <Redirect to="/login" />
			}
		/>
	);
};

PrivateRoutes.propTypes = {
	isAuth: PropTypes.bool.isRequired,
	compponent: PropTypes.func.isRequired,
};

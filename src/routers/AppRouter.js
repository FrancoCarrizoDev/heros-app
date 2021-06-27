import { AuthContext } from "auth/AuthContext";
import { LoginScreen } from "components/login/LoginScreen";
import React, { useContext } from "react";
import { BrowserRouter as Router, Switch } from "react-router-dom";
import { DashboardRoutes } from "./DashboardRoutes";
import { PrivateRoutes } from "./PrivateRoutes";
import { PublicRoute } from "./PublicRoute";

export const AppRouter = () => {
	const {
		user: { logged },
	} = useContext(AuthContext);
	return (
		<Router>
			<div>
				<Switch>
					<PublicRoute
						exact
						path="/login"
						component={LoginScreen}
						isAuth={logged}
					/>
					<PrivateRoutes
						path="/"
						component={DashboardRoutes}
						isAuth={logged}
					/>
				</Switch>
			</div>
		</Router>
	);
};

/* eslint-disable */
import * as React from 'react';
import { Route, Redirect } from 'react-router-dom';
export class FrontendAuth extends React.Component {
    render() {
        const { location: { pathname }, config, isAuthed } = this.props;
        const targetRouterConfig = config.find((route) => route.path === pathname );
        if(isAuthed){
            return (pathname === '/login' || !targetRouterConfig ) ? <Redirect to='/' /> 
            : (<Route path={pathname} component={(props) => 
            <targetRouterConfig.component 
                tableName={targetRouterConfig.tableName}
                tableSettings={targetRouterConfig.tableSettings}
            {...props} />} 
            />);
        } else {
            return (targetRouterConfig && !targetRouterConfig.auth) ? <Route exact path={pathname} component={(props) => 
            <targetRouterConfig.component 
            {...props} /> } /> 
            : <Redirect to='/login' />
        }
    }
}

import React from 'react';
import { connect } from 'react-redux';
import requiresLogin from '../../requires-login';
import { fetchProtectedData } from '../../actions/protected-data';

import './accountpage.css';
import UserInfo from '../userinfo/userinfo';

export class AccountPage extends React.Component {
    componentDidMount() {
        this.props.dispatch(fetchProtectedData());
    }

    render() {
        return (
            <div>
                <UserInfo />
            </div>
        )
    }
}

const mapStateToProps = state => {
    const { currentUser } = state.auth;
    return {
        username: state.auth.currentUser.username,
        email: `${currentUser.email}`,
        protectedData: state.protectedData.data
    };
};

export default requiresLogin()(connect(mapStateToProps)(AccountPage));
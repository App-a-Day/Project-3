import React from "react";
import { connect } from 'react-redux';
import { signIn, signOut } from '../authentication/actions';

class GoogleAuth extends React.Component {
    componentDidMount(){
        window.gapi.load('client:auth2', () => {
            window.gapi.client.init({
                clientId: '186667235953-j2fte15v0l536qg9f09iqsuaiearrt4o.apps.googleusercontent.com',
                scope: 'email'
            }).then(() => {
                this.auth = window.gapi.auth2.getAuthInstance();
                this.onAuthChange(this.auth.isSignedIn.get());
                this.auth.isSignedIn.listen(this.onAuthChange);
            });
        });
    }
onAuthChange = (isSignedIn) => {
    if (isSignedIn) { 
        this.props.signIn(this.auth.currentUser.get().getBasicProfile());
    } else {
        this.props.signOut();
    }
};

onSignInClick = () => {
    this.auth.signIn();
};

onSignOutClick = () => {
    this.auth.signOut();
    window.location="/"
}

viewLessons = () => {
    window.location="learn"
};
viewLogin = () => {
    window.location="login"
};

    renderAuthButton() {
        if(this.props.isSignedIn === null) {
            return null;
        } else if (this.props.isSignedIn) {
            return (
                <button onClick={this.onSignOutClick} className="ui red google button">
                <i className="google icon" />
                Sign Out
                </button>
            );
        } else {
            return (
                <button onClick={this.onSignInClick} className="ui red google button">
                <i className="google icon" />
                Sign In with Google
                </button>
            );
        }
    }

    renderTutorials() {
        if(this.props.isSignedIn === null) {
            return null;
        } else if (this.props.isSignedIn) {
            return (
                <button onClick={this.viewLessons} className="ui green google button">
                Tutorials
                </button>
            );
        } else {
            return null
        }
    }
    render() {
        console.log('This is our state: ', this.state)
        console.log('This is our props: ', this.props)
        return (
            <div>{this.renderAuthButton()}

            </div>
        );
    }
};

const mapStateToProps = (state) => {
    return { isSignedIn: state.auth.isSignedIn };
};

export default connect(
    mapStateToProps,
     { signIn, signOut }) (GoogleAuth);
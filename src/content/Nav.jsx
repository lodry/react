import PropTypes from "prop-types";
import NavElement from "./NavElement";
import {translate} from "../func.list";
import React, {Component} from 'react';
import {withUserConsumer} from '../services/UserContext';
import {Language} from '../services/LanguageContext';

class Nav extends Component {
    static propTypes = {
        navigateTo: PropTypes.func.isRequired,
        user: PropTypes.object,
    };

    static defaultProps = {user: null}

    render() {
        const {navigateTo} = this.props;
        return (<nav className="menu">
            <Language.Consumer>
                {language => (
                    <React.Fragment>
                        <NavElement link="about" goTo={navigateTo} text={translate(language, "about")}/>
                        <NavElement link="calculation" goTo={navigateTo} text={translate(language, "calculation")}/>
                        <NavElement link="contacts" goTo={navigateTo} text={translate(language, "contacts")}/>
                        {this.props.user&&<NavElement link="profile" goTo={navigateTo} text={translate(language, "profile")} />}
                    </React.Fragment>)
                }
            </Language.Consumer>
        </nav>);
    }
}

export default withUserConsumer(Nav)
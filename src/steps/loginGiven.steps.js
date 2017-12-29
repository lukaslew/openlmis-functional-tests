import { defineSupportCode } from 'cucumber';

import LoginPage from '../pages/login.page';
import HomePage from '../pages/home.page';

defineSupportCode(({ Given }) => {
    Given(
        /^I navigate to the login page$/,
        LoginPage.open
    );
    Given(
        /^I enter the username "([^"]*)?"$/,
        (username) => {
            LoginPage.username = username;
        }
    );

    Given(
        /^I enter the password "([^"]*)?"$/,
        (password) => {
            LoginPage.password = password;
        }
    );

    Given(
        /^I am on the home page$/,
        () => HomePage.isVisible()
    );
});
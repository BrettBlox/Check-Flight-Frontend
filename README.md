# Check Ride

Check Ride is an application that connects pilots looking for an examiner to administer their check ride, the final exam in becoming a certified pilot with the Federal Aviation Administration. Examiners can customize their profiles to reflect calendar availability, airports they fly out of, rates, their personal bio and other relevant information that a potential client would be interested in. Pilots, once registerd, can filter their search for an examiner by selecting the airport(s) they want to fly from, which will allow them to see the examiners who are associated with that airport.

Check Ride was built with React on the front-end and Ruby on Rails with PostgreSQL for the back-end.

[Check Ride Functionality Video](https://youtu.be/C3CM3GsqGgs)

---

# Home

The homepage includes a brief about section for Check Ride and forms for logging in or registering. Users will login or regeister as either a pilot or examiner. The examiner registration form includes extra fields such as rate and bio.

### Home - Navbar

![navbar](screenshots/navbar.png)

### Home - Intro

![about](screenshots/intro.png)

### Home - Login

##### The homepage defaults to the login forms. To switch to registration forms, click the link at the bottom of the form.

![login](screenshots/login.png)

### Home - Registration

![register](screenshots/Register.png)

---

# Pilot Profile

![pilottop](screenshots/piProfileTop.png)

![checkboxes](screenshots/checkboxes.png)

![checked](screenshots/checkedairports.png)

#### Filtered results with links to examiner contact data for examiners associated with that airport.
![airports](screenshots/airports.png)

#### Examiner contact data. 
![examinercontact](screenshots/examinercontact.png)

---

# Examiner Profile

![examinertop](screenshots/exprofiletop.png)

![exairports](screenshots/exprofileairports.png)

##### The calendar allows examiners to set their availability.
![calendar](screenshots/calendar.png)

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).


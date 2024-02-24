![Screenshot (208)](https://github.com/weberankit/YTReact/assets/94105514/b52d9e0c-fcf6-4a0e-8464-9ad3ae738d4c)![thumbnail](https://github.com/weberankit/YTReact/assets/94105514/98e7a67b-2bfb-42fc-b1d0-8f5bcd39b99a)

project description:___
YouTube: 🎇 What's new in this project❓ 🗼 There are lots of YouTube projects.

🎯 But this one's different: ✌️

Here's the Project Uniqueness:

🔵 Added a QR code, making it a breeze to open videos on your phone by scanning. 📱🔓

🔵 The most exciting part:

📣 Now, you can reply and comment on nested comments of any depth, thanks to our recursive filtering. 🧩🔁

✅ Some say DSA isn't that important, but trust me, it's been a challenge for me, a DSA newbie. 📚💪 It is important to know at least the basics.

Difficulty :
Fail-😌
I initially added replies directly to comments without IDs, and it worked. But in the console, it only displayed the value, not in the DOM – possibly due to complex nested comments. React does not re-render it. I tried everything to make it happen, but it didn't. 😓🔍

Finally 😃
So, I switched to Redux and adopted the ID value approach for adding comments. 🔄💬

However, learning recursion took time, as I was not well-versed in it. After understanding it, I implemented 🚨 N-level recursive filtering 🚨 for adding replies to nested comments. 🧠🔄 (so that nested comments can be filtered and replies added to that particular comment, and also generated a unique ID for the reply comments for further comments)
And voilà, it's done! 🎉



Other cool features(common):
🔵 Smooth debouncing in search suggestions with cache
🔵 Live chat features like YouTube
🔵 Routing


🌟Dark Mode (Built from scratch, without using any libraries)
🌟 Filter Button (Utilized the same search Redux slice 😊)
🌟Shimmer Effect
🌟Lazy Loading
🛠️ Error handling







# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)

# Moodeo (Mood + Video)
Create a mood-oriented recommender targeted for older adults.

#Setup Environment
-Start issue: if Metro Bundle can start on certain port in the localhost but still cannot build and send the link to the mobile phone. SOLUTION: enter "expo publish" and log in expo with username: meifang417@gmail.com and pass:pxxxxxxx (Link: https://forums.expo.io/t/tunnel-url-not-found-failed-back-to-lan-url/14380/5 )

-Steps of starting application: npm start (or expo start) -> login expo via cell phone -> send link to cell phone in localhost:xxxxx, connection: Tunnel, under the same network environment (either both platforms are WIFI or Cellular) 

# Log:
- 1/17/2019
Read research papers regarding how to build a recommendation system.
- 1/18/2019
Set up development environment.
- 1/19/2019
Checked in codebase to github.
- 1/20/2019
  - Designed the system architecture for the app.
  - Added a rough login UI.
- 1/21/2019
  - Added buttons.
  - Added react navigation dependency.
- 1/22/2019
  - Worked on IRB.
- 1/23/2019
  - Added CheckBox dependency and CheckBox.
  - Added Image.
- 1/24/2019
  - Worked on react navigation.
- 1/25/2019
  - Watched Udemy online course of React Native from lecture 1 - 24.
- 1/26/2019
  - Watched Udemy online course of React Native from lecture 25 - 35.
- 1/27/2019
  - Watched Udemy online course of React Native from lecture 36 - 60.
- 1/28/2019
  - Watched Udemy online course of React Native from lecture 61 - 90.
- 1/29/2019
  - Watched Udemy online course of React Native from lecture 91 - 110.
- 1/30/2019
  - Watched Udemy online course of React Native from lecture 111 - 150.
- 1/31/2019
  - Watched Udemy online course of React Native from lecture 151 - 170.
- 2/1/2019
  - Watched Udemy online course of React Native from lecture 171 - 180.
- 2/2/2019
  - Watched Udemy online course of React Native from lecture 181 - 203. Completed the online course and received the certificate.
- 2/3/2019
  - Set up Firebase database.
- 2/4/2019
  - Fix npm start bug due to npm version by downgrading npm version to 4.
- 2/6/2019
  - Added a customized ListItem component and a rough shopping item feature.
- 2/7/2019
  - Fixed npm start error. 
- 2/8/2019
  - Working on screen navigation.
- 2/9/2019
  - Keep on working screen navigation.
- 2/10/2019
  - Organized code by spliting code into different components.
- 2/11/2019
  - Fixed bugs and working on screen navigation.
- 2/12/2019
  - Completed navigation and work well.
- 2/13/2019
  - Worked on connecting firebase.
- 2/14/2019
  - Figured out how to connect to firebase.
- 2/15/2019
  - Figured out Access Denied Error.
- 2/20/2019
  - Worked on routing of Shooping List.
- 2/21/2019
  - Worked on routing of Shooping List.
- 2/22/2019
  - Figured out routing of Shooping List.
- 2/25/2019
  - Draft UIs.
- 3/07/2019
  - Worked on firebase email authentication.
- 3/08/2019
  - Added auth navigator.
- 3/09/2019
  - Added login/logout for firebase email authentication.
- 3/10/2019
  - Working on register for firebase email authentication.
- 4/04/2019 
  - Implemented UI features for ProfileScreen.
- 4/06/2019
  - Added checkbox to ProfileScreen.
  - Add SearchBar to HomeScreen.

- 8/29/2019
  - Set up environment.
- 8/30/2019
  - Add video section.
- 8/31/2019
  - Convert LinksScreen to MoodeoScreen.
  - Edit home page.
  - Convert Shopping List screen to video list screen.
  - Edit user profile.
- 9/01/2019 
  - Edit recommendation button in home screen to navigate to Moodeo screen.
  - Change splash page.
  - Add feature of recommendation for next video.
- 9/12/2019
  - Fix navigation to home page.
- 9/12/2019
  - Deal with videoURL string.
- 9/16/2019
  - Add hundreds of youtube video key tokens.
- 9/21/2019
  - Change header bar style.
  - Hide header bar.
  - Edit home page picker style, delete image.
  - Change Authbutton font size.
- 9/22/2019
  - Change app theme color.
  - Add video icon to Moodeo page. (Link to this icon lib: https://ionicons.com/).
  - Change header title font size.
- 9/24/2019
  - Design and update Moodeo application logo.
  - Change video list screen font and button sze.
- 11/03/2019
  - Fix WebView cannot display YouTube videos issue and upgrade expo sdk from 32 to 33 due to expo client 33.
   https://github.com/expo/expo/issues/5864
   https://docs.expo.io/versions/latest/workflow/upgrading-expo-sdk-walkthrough/
- 11/10/2019 
  - Edit screen button style.
  - Add validate video feature for happy mood.
- 11/16/2019
  - Implement video validation and save result to firebase.
    Firebase URL: https://console.firebase.google.com/u/1/project/foodmanager-4af3d/database/firestore/data~2FvideoValidationResult~2FBj2Q0e12tjoq7N9z4WJs

    Reference: https://www.djamware.com/post/5bbcd38080aca7466989441b/react-native-firebase-tutorial-build-crud-firestore-app
- 11/24/2019
  - Refine alert message logic for clicking the submit button in Validate Video page.
  - Remove border below the header for mood screens and video list screen.
    Reference: https://github.com/react-navigation/react-navigation/issues/865
- 12/07/2019
  - Display video validation result that is stored in the firebase collection called videoValidationResult.
  - Add total record of validated videos in Result screen.
- 12/08/2019 
  - Improve adding total record of validated videos feature.
  - Implement showing number of both valid and invali videos in Result screen.
# Polaroid Social Media App

The project I have developed is a social, photo sharing application called Polaroid. The goal of the site is to be a platform for users who wish to share pictures from their daily lives with their friends and followers while also letting them keep up to date with what their own followers are also sharing. The site is aimed at people of all ages and backgrounds, pretty much anybody who has access to a camera and the internet can use this site. Since social media is especially popular with younger generations, I tried to keep the site as simple as possible with the aim of allowing all people to easily use the functionality on the website.

Some of the main features include the ability to upload an image alongside a title and caption describing the picture or whatever information they wish to share to accompany the image. Images can be assigned a category on the “Create A Post” page and users can choose from a dropdown list of categories to assign their post to. Other features include the ability to scroll through different posts and visit individual profiles to find out more information from users by reading their bio, location or checking out their profile image. Site users can sign up for an account and will then have full access to the functionality of the website such as creating posts, pinning posts and leaving comments on users posts. Registered users have the ability to create posts and leave comments at free will, but the creation of categories is a feature that only site admins have permission to do. Site admins will also monitor the site for any offensive or discriminatory content, and it will be promptly removed if and when it is discovered.

![am-i-responsive-img](/src/assets/readme/amiresponsive.png)

# Current Features

## Home Page

![home-img](/src/assets/readme/home.png)

When users first navigate to the the site, the initial landing page you will arrive on is the home page. At the very top of the page and present on all pages of the site is the navigation menu. When you first arrive on the site you will be signed out so the nav menu will display links to allow you to sign in or create an account. This menu will change depending on your logged in status and you can find more information about this in the components section of this read-me.

Below the navigation menu is the main layout of the home page which is split into 3 seperate columns, the middle one displaying users posts and the ones on either side listing the most active and the most followed profile accounts. When you are signed in and authenticated, the most followed profiles list will also display either a follow or unfollow button next to each profile depending on the following status from the logged in account. When these are buttons are clicked, the handleFollow or handleUnfollow function will run to change the following status. Any changes here will be recognised and updated on all other pages of the site. Also present in the top right corner of the page is a search bar which lets you search for specific posts. The search bar filters the post results using keywords from the post title and caption, as well as the category name and a users username or profile name. By including a feature, I have ensured the completion of the user story titled Search Bar.

The user posts displaying here, are placed inside a bootstrap card component and the get request from the api retrieves all posts from accounts that the currently logged in user is following. These posts are then mapped over using the javascript map function so they are displayed in a list view. The card contains all of the expected information relating to the post including the image, title, caption and timestamp along with the username of the person that the post belongs to. At the bottom of the card is a button which pins/unpins the post when clicked and two seperate font awesome icons that show the total number of pins and comments that the post has. If a user attempts to pin or unpin a post while signed out, an overlay message will instead display explaining how you must be signed in to pin posts. If a user clicks on the main image, they are then redirected to the post detail page which is outlined below.

The content on this page is fully responsive and adjusts the layout depending on the screen size it is displayed on. On medium screens and smaller, the navigation menu compresses into a burger menu, and the most active profiles side bar is removed completely. The most popular profiles side bar is pushed to the top of the page and displays a maximum of 4 profiles to prevent the list becoming to compressed. This is achieved by using the slice javascript method on the list of profiles array that is returned. The follow/unfollow buttons are also removed in this view as it does not look as clean with these on show. Lastly, the search bar is pushed to the top of the page and spread across the entire length of the screen. This is to allow users to have the option to filter posts at all screen sizes, and so it is displayed in an easy to see position on the site.

## Post Detail Page

![post-detail-img](/src/assets/readme/post-detail.png)

As detailed above, if a user clicks on the the main image or comment icon they are redirected to the post detail page. Similarly to the home page, the post clicked is shown in a larger card format with the extra ability to add comments and see all comments that the post already has. The list of active profiles has also been removed on this page to allow the post card to be displayed larger and to not distract from the main content. The post can also be pinned from this page and the change will show on all other aspects of the site.

![comments-img](/src/assets/readme/comments.png)

Below the post bootstrap card is a comment form where the currently logged in user can leave comments on the post. The logged in users avatar shows on the left of a text area box. When you have added a comment, you are free to click the Comment button and the comment will be displayed below the form. Any users visiting the site who are not registered and signed in will not have the ability to post comments at all. Instead, the comment form will not show and it will just list out any comments the post currently has along with a message telling the user you must be logged in to post comments.

I have also added the functionality to allow users to like each others comments. Next to any user comments is an outlined thumbs up font awesome icon, and when clicked it transitions into a highlighted icon and a comment like is registered in the database. Similarly to the pinned functionality, if a site user is not signed in then the like button will be unavailable until you register an account.

One final piece of functionality on this page is the addition of an edit/delete dropdown component. This dropdown displays only if the currently logged in user is the owner of the post or comment. When clicked, the user has the option of either editing or deleting the post/comment from the database entirely. If you want to edit a post, you will be redirected to the edit post page which is outlined below. When editing a comment, the comment form re-displays and you are able to change the currently present text in the comment. When you have made the changes, you can press the update button to confirm them or cancel to close the comment form and leave the comment unchanged.

For mobile screen sizes, the content is once again adjusted to fit a smaller device. The most followed profiles are pushed to the top of the screen the same way as on the home page and the card is also displayed the same. The comment form and list of comments is displayed underneath the card in a list format taking up the entire width of the screen size as shown in the image above.

## Create A Post Page

![create-post-img](/src/assets/readme/create-post.png)

When a site user has successfully registered for an account and signed in, the Create link in the navigation menu will appear and allow you to start adding posts to the site. When this link is clicked you will be redirected to the CreatePostForm page with a form to fill in the details for your post.

The form is split into two columns, one on the left for the text details including the title, caption and category selection. The one on the right is to select the image you wish to share and it allows you to select a file and display a preview before posting. When you have selected an image and the preview is displaying, a button will appear below the image allowing you to change it and select a new file if clicked. All of the text fields can be left blank if you wish to post just an image and if no image is selected, then a default one will automatically be posted alongside any text details you choose to include.

Also present here is image validation to ensure that files sizes are not larger than 2mb and that the dimenions are not larger than what was specified in my api. If an attempt is made to add a file too large, then an error message is displayed underneath the corresponding form field explaining what went wrong. These errors are displayed by being added to an error variable and then being mapped over and displayed in a bootstrap alert underneath each form field in CreatePostForm.js.

![create-post-mobile-img](/src/assets/readme/create-post-mobile.png)

When in a mobile view, the form layout is adjusted so it is suited more for displaying on a smaller screen. Instead of having two columns, I have changed this to one with the text fields displaying underneath the image preview field. I have also removed the borders, in order to make the design look alot more clean and fluid.

## Edit Post Page

![edit-post-img](/src/assets/readme/edit-post.png)

If you are signed in as the owner of a post, the edit dropdown will become visible for you and when clicked will redirect you to the edit post page. This edit page is identical to the create a post page described above other than it automatically displaying the data you have posted from the post you wish to edit. This data is retrieved by making a get request to the api and retrieving the correct post data using its unique id. This data is then displayed to the user on the edit page and is then able to be changed to the post owners liking before confirming the changes they make.

Any changes made on this page once confirmed are reflected on all other pages of the website. The post id will remain the same and the updated_at variable will be updated to show when the last edit took place. The aim of allowing users to edit posts is to give users as much freedom as possible about what they want to share and when. Having this functionality also lets people correct any errors they may have made when creating a post or add some extra information that they have forgotten to share at the time of the post creation.

## My Pinboard Page

![pinboard-img](/src/assets/readme/pinboard.png)

The pinboard page uses the same list layout as the home screen but the posts displayed here are filtered by posts that the currently logged in user has pinned. As per on the homescreen, the most followed and most active profile lists are displayed here in seperate columns.

The aim of this page is to make it easy for users to navigate back to posts that they are interested in and may wish to revisit at a future date. I have added the functionality to allow users to also pin their own posts so you can create a custom board with content that interests you including posts that you may have created yourself.

## Discover Page

The discover page is present purely to allow users to explore all of the different posts that the site has to offer. There are no filters controlling what posts will show here, so if you keep scrolling you will eventually view every post that has ever been posted on Polaroid. My aim with this was to hopefully showcase different types of posts and profiles that a site user may not think about viewing themselves and to showcase all of the different types of content that I hope to get shared throughout the website.

As with the home and pinboard pages, the two extra columns of profiles display here as well which I hope will also encourage users to click into them and discover the content that they are sharing with their own followers.

## Profile Page

![profile-page-img](/src/assets/readme/profile-page.png)

When users are signed in and authenticated, they can use the profile link in the navigation menu to navigate to the profile page. Alternatively if a user clicks on a profile avatar, you will be redirected to that specific users profile. Profiles show the users statistics, along with their location and bio if they choose to add those. The aim of the profile page is to encourage users to interact with each others content, while also allowing you to become more familiar with the different types of users that are present on Polaroid.

Similarly to the post detail page, I decided to display only the popular profiles list with the intention of making the user profile the hero content of the page. The statistics are unique for each user and are linked and updated correctly according to the amount of posts a user has, the number of followers and the number of people they are following. I kept the style similar to the walkthrough and Instagram as this will be very familiar and easy to undertstand for the majority of site users. Directly underneath the statistics, the users bio and location are displayed. I decided to include these to add an extra level of customisation and for other users to gain some personal information about them. I added a location style font awesome icon to clearly show it is referring to the users location in the world. Lastly, there is of course a larger image of the users profile picture to clearly show this profile belongs to them!

Directly underneath the stats and description, all of the posts belonging to that specific profiles user are displayed in a list format which will continue loading as you scroll by implementing the infinite scroll componenent included in my project. The posts display in descending order with the most recent at the top, with the ability for users to still pin posts from this page. The aim of including posts here is to allow profile visitors to see what type of content the user is sharing before making a decision as to whether they want to follow them or not.

If you are signed in and on your own profile page, the editDeleteDropdown will appear just underneath your display name. This gives you the option to edit your profile, change your username and your password. Clicking on either the change username or change password option will redirect you to a form page with the fields to update them. When the username form is submitted, an api put request is made to the dj-rest-auth/user/ endpoint with your updated username. For changing your password, another network request is made. This time it is a post request to the dj-rest-auth/password/change/ endpoint which then updates it on the backend. Clicking on the edit your profile link will redirect you to the EditProfile page, the details of which are outlined in the next section.

When on a device with a smaller screen size, the content of the profile page is changed to allow for easier user on mobile devices. As described with some of my other pages, the list of popular profiles is decreased to a maximum of four and it is pushed to the top of the page and displayed in an inline style. The profile picture becomes the center piece with the user statistics moved down to display directly underneath. The bio and location is displayed below and all of the users posts are still displayed in a list view underneath the main profile details.

## Edit Profile Page

![edit-profile-img](/src/assets/readme/edit-profile.png)

If you click the edit profile option from the editDeleteDropdown, you are then taken to this edit form page. It is similar in style to the edit post page, with two columns seperating the image and text content. On the left side, is a preview of your current profile picture with the familiar change the image button below letting you update the image with a new preview. The two text fields present are a text area box for your bio and another to input your location. If this is your first time adding these details, the boxes will be empty. If you come back at a later date to update them, the previous information will show up and let you make any changes that you wish. After you have finished, you can press the update button to save your changes or cancel to redirect you back to the previous page you were on.

## Create An Account Page

![create-account-img](/src/assets/readme/create-account.png)

Upon your first visit to the site, one of the first pages you will interact with is most likely to be the create an account page. On the left it contains a simple form, requiring you to input a username, password and finally the password confirmation. Users are required to input a unique username different to any other on the site and the two passwords must obviously be matching. Once completed you can press the Join button and you will be redirected to the sign in page where you can log in with your newly created credentials.

The page contains error handling and if any are present these will be displayed back to the user in a bootstrap alert underneath the corresponding form field. Under the Join button is a message with a link to the sign in page if a user has already registered an account with Polaroid. Next to the form is a circular image, which is present to purely add some style and colour to the page. When on smaller screen sizes, the image first becomes square shaped and then disappears altogether on mobile devices to prevent the page from becoming squashed with content.

## Sign In Page

![sign-in-img](/src/assets/readme/signin-page.png)

Once you have created an account or are revisiting the site at a future date, you will be required to log back into your account to gain full use of all the features that Polaroid has to offer. The sign in screen is very similar in style to the create an account page, with a very simple form on the left hand side and a circular image on the right. The only fields present on this form are your username and password.

As with the create account page, error handling is present and once your details are filled in you can click the sign in button and be redirected to the home page. You will notice the navigation menu has now changed its content and all capabilities of the website will have become available for use.

Multiple user stories have now been completed successfully with the implementation of full user authentication. Users have the ability to create an account, sign in, sign out and see the navigation menu conditionally render links depending on their logged in status.

# Components

## Asset Component

My asset component was used multiple times all over my application for one of three uses. It was primarily used to show a bootstrap loading spinner for when some data was still getting fetched from my api. The most obvious times you will see this in use is when the home page is loaded, and all of my data is fetched upon my components mounting. Three of these spinners are showing consecutively at this point because it is fetching the users posts, the popular profiles and also the active profiles list. The spinner is also used in various other parts of my application including when fetching full posts, user profiles and when switching between the home, the pinboard and the discover pages. When making use of the infinite scroll component, the spinner is used briefly here while more posts or comments are being loaded. The benefit that this brings to the user is that they are not just staring at a blank screen while data is being fetched. Instead the spinner makes it obvious to a user that content is currently loading and that the site has not crashed or encountered some other error.

Another use for the asset component was to show the no-results image along with a feedback message for the user. This was used solely for results that were found from search bar requests. This was a good way to give feedback to the user when the request they entered returned no results. If this method was not used, the screen would be blank with no indication to the site user as to whether or not there request had been received. The message prop was handy as it gives a customised response and informs the user there is nothing to show, so please amend your search.

One last use for the asset component was to show the upload image on the create a post page. Like the no-results image above, using the asset component here allowed me to display the upload image for the user along with a customised message. In this instance, it was used to tell them that they can click the image to upload a file to preview in the createPostForm.

## EditDeleteDropdown Component

This component was useful for re-use wherever I wanted users to have the ability to edit or delete some content. Because of the permissions I have set up in my back-end, this dropdown would only become available when you are viewing you own content. It was re-used in three different areas of my project, which included posts, comments and the profile of the currently signed in user. For the posts and comments, the same exact dropdown was used which was the option to edit or delete. For the profile page, I tweaked it slightly to allow users the ability to edit their profile, change their username or their password.

Re-using this component was simple enough to implement as all I had to was check if the content being displayed belonged to the currently logged in user. If so, I could just call the relevant function from EditDeleteDropdown and the font awesome pen icon which doubled as a dropdown menu would show for the user. Lasty by including this component along with the required pages, I have ensured the completion of several user stories. These include the ability for users to customise their profile, edit their posts and comments and lastly the option to delete their own content.

## PageNotFound Component

The PageNotFound component was a simple one to produce that simply returns the asset component described above when a search is made for a url that does not exist. I only had to call the component in the App.js file which then automatically renders the component when a page is searched for that is not present on the site. This was valuable to the user as it provides a feedback message and shows good user experience by not just rendering an error 404 message from the browser.

## ProfileAvatar Component

My ProfileAvatar component is an image tag with the src, size and text passed into it as props. As simple as this component is, I have re-used it all over my site to quickly and easily display users profile pictures where users would expect to see them. In the active and popular profile lists is one of the main areas where this component has been used. Another example is in the bootstrap card components used to display user posts. It is usually standard practise now to display the author of a post alongside their profile image at the top of any social media posts, which is why I decided to include it here. The size prop was a helpful addition to include, as it made it very easy to adjust the image size for the different areas of the site that I wished to implement the component.

The aim of using this component is to allow users to gain a quick insight into what they can expect if they click into the profile and to also make the profile more memorable by relating it back to the image it has attached to it. Including this component also ensures that my user story to display avatars/usernames is achieved with regards to making users profiles as easy as possible to identify. I have chosen to always display this component inside a link so it is as easy as possible for a site user to click into that persons profile if it looks interesting to them and they want to see more!

## Infinite Scroll Component

One external component I installed and implemented in my project was the react-infinite-scroll-component. This was used in multiple parts of my site including my PostList.js page to continue fetching users posts, the continuous loading of comments and fetching all posts beloging to a specific user on their profile page. This component takes five necessary props to get it set up and working. These include a children prop, which takes my mapped over Comment or Post component as its value. The other props needed are dataLength which takes the results array length as its value, loader which is used to show my loading spinner as well as the hasMore and next props which are used to determine whether there is more data to show and fetch it if available.

Infinite scrolling is a feature present on nearly all social media sites today. It has shown to encorage users to stay on sites longer by continuously loading new and engaging content. By having to manually click next over and over to reach the next page of results, users tend to become disengaged and leave the site alot sooner. Lastly by implementing this feature, I think the user experience is increased as it keeps the page free from pagination and looking a lot cleaner. Because of these above benefits, I believe the addition of this component to be an essential feature in my project. Making use of this component lastly ensures that my infinite scroll user story is achieved in allowing users to view content as easily as possible.

## UseRedirectUser Hook

This hook is used to ensure users do not gain access to any pages on the site that they should not be able to view. When the hook is called, its given either the value signedIn or signedOut and then the user is automatically redirected to the home page with the useHistory hook from react-router-dom if their logged in status does not match. I have used this hook in numerous different places throughout the site including the sign in and create an account pages. Before this implementation, a user could manually type an endpoint onto the url for example /create/account when they are already signed in. This should not be possible, so using this hook recognises that the user is already signed in and will automatically redirect them away from that screen. As well as the sign in/create account pages, this hook is also called on the create a post page in the opposite way, as unauthenticated users should not have the ability to create a post.

## UseClickOutToggle Hook

This hook is primarily used for the burger menu in my navBar when on smaller screen sizes. The standard bootstrap burger menu requires you to manually click on the burger icon again for it close. If you select an option or click outside of the menu, it still stays open which is very bad user experience. To solve this problem, I have made use of the useRef hook and attached a mouseup event listener to check for when a user selects an option or clicks outside of the menu.

As my project only contains one burger menu at this time, it is currently just a single use component. As I add more features to this project in the future, it will be very convenient to call this hook and improve ux for any more menu's that encounter this issue. This hook was implemented in the moments walkthrough project and this is where my code was taken from for this feature.

# Future Features To Implement

## Masonry Layout

An extra feature that I would like to implement at a future date is a masonry layout. I wanted to add this functionality on the “my pins” and “discover” pages with the idea for it to loosely resemble the social media site Pinterest. I spent some time trying to implement this feature but I unfortunately not did not have the time to add it before my submission date. The benefit of this feature would be for the site to display a more attractive and modern layout similar to many other popular websites around right now.

## Sign In/Up With Social Account

A second feature I would like to include in this project is the ability to sign in and sign up with a Google account. Social login is something I have wanted to add in several projects but the time allowance I have had, has not allowed me the necessary time to add it to any so far. This is present on many websites today and is becoming standard practise on all social media websites as time goes on. The benefits for the user would be the ability to create an account and sign in very quickly while also not having to manually type in your authentication details over and over.

## Private Messaging

Another feature I would like to try and add is the functionality to send direct messages between accounts on Polaroid. While having the ability to comment on posts is advantageous, introducing this feature would take the application to the next level in my eyes and encourage a lot more interactivity between users. This feature could then be added to further with the capability of eventually being able to send images and videos to other users directly.

## Video Uploads

One final feature I would like to include is the ability for users to upload videos alongside images for their posts. This is a standard feature that is included in almost all social media applications that are available today. Video files is something that I have no experience working with so I am keen to try and implement this feature for my own learning as well as the added benefits for site users.

# The Agile Approach

![kanban-img](/src/assets/readme/kanban-image.png)

Throughout the development, I have attemepted to stick with agile best practises and refer back to these principles throughout production and while implementing project features. Before starting any of the practical aspects of this project, I listed out all of the necessary user stories and seperated them into the different areas of the site that they applied to. This helped to ensure that I covered all bases of the site and didn't miss out any necessary features.

On Github, I made use of the issues tab to document all of my user stories. Accompanying each one, was a list of tasks that were required to implement the feature as well as the acceptance criteria for each story. Once all of the user stories were done, I assigned each one a label with the amount of story points that I believed each story to require. Once all of my issues were documented, I opened a new project within my pp5-social-media-frontend repository and created a kanban board where I could keep track over what user stories were completed and which ones still needed work. After using this feature in my portfolio project 4, I found it to be an extremely useful tool for keeping track of my workload. As this project is quite substantial in its requirements and bigger than anything else I have done, the act of moving over stories from in-progress to done helped me to break down the project into smaller, easier to manage tasks. I could of very easily became overwhelmed with the amount of functionality I still had left to implement, but using the kanban board really helps you to realise how much you have done and how its easier to manage one small step at a time.

Since I only had approximately three weeks to build this project, the sprints had to be three consecutive ones each lasting for one week. The first sprint was primarily focused on the back-end portion of this project along with the NavBar and authentication on the front-end. The second was purely front-end development, with a particular focus on pinning posts, commenting and following user accounts. For my third sprint, the original plan was for the focus to primarily be on testing, fixing errors and this documentation. Because of time constraints, the front-end development carried on into the third sprint and made me fall behind my intended deadlines.

Throughout the development, I found that I had to adjust the amount of story points for certain user stories. As I also noticed in my previous project, this was because some functionality took me a lot longer or sometimes much less time that I had assigned for it. As I become more familiar with different languages and get more experience, I expect that my assessment for story points and the time to implement features will become more accurate along with it.

The list of issues for this project are available here -
https://github.com/DanTaylor28/pp5-social-media-frontend/issues

You can access my Github project board from the following link -
https://github.com/users/DanTaylor28/projects/7

# Languages & Libraries Used

- React
- React-Bootstrap
- React-Router-Dom
- React-Infinite-Scroll-Component
- Axios
- JWT-Decode
- HTML
- CSS

The language used in the development of this project is React.js, alongside React-Bootstrap which I decided to use for the primary styling of the site. As I have worked with bootstrap before, I decided to stick with it for this project as it is simple to use and very easy to customise with your own ccs to make it more unique. Because react has to be used with JSX, the React-Boostrap library is necessary so the styles are compatible with the react project. If a site uses purely bootstrap styling it looks very obvious to a user that this the case, therfore I made sure to include my own custom styling on most of my components to ensure this wasn't the case. The benefits of using React in this application is having the ability for different components of the site rendering content all the time. Its updated constantly when their is user interaction and any changes reflect on all parts of the site simultaneously. Its also a benefit as the site does not have to be refreshed constantly. Because the whole project is on just one html page, the user can interact with content, click links and upload posts without the necessity of page loading times hindering user experience.

React-Router was used in my project as it enables client side routing. This allows the site to update the url without making any further requests from the server. This improves the user experience as loading times are much less for the user as the browser does not need to continuously request new documents as these can be rendered immediately without the need to re-evaluate any javascript or css files.

As shown in the moments walkthrough, Axios was used for any HTTP requests for the browser. I used it in my project as it is simple to use for get and post requests as well as posting HTML forms to the backend as JSON data. The infinite scroll component was used in this project as I believe it is a great way to keep users engaged for longer, while showing better ux by removing the need for site pagination. The component is also really easy to set up and incorporate into many aspects of my site including the ability to continuously list out users posts and comments.

# Design

For the design of my site, I took some inspiration from the moments walkthrough project while making sure to add plenty of extra elements to ensure my project has its own unique styling. The main layout of the Home Screen along with the “my pins” and “discover” pages are using a three column layout. I decided with this approach as it is a common style theme in a lot of social media sites and I believe it encourages more interactivity by the site user. I displayed the main post content in the centre and lists of different user profiles on each side to make it as easy as possible to navigate and discover new and interesting users you may wish to follow.

The post detail page is aimed to primarily showcase the user post, so I decided to remove one of the columns here and instead expand the user post column to ensure it is the main focus on the page. Underneath the post, the focus shifts to the comments section where users can add comments as well as read through current ones and like them if they wish. Each comment is listed in its own div to clearly separate the content and make it as easy as possible to see which comment and like belongs to which user.

On the profile page, the design I went for is similar to the Instagram style(and moments) in which the users stats are displayed showcasing their number of posts, their number of followers and the number of users they are following. The profile owners profile picture is displayed in the top left with a circular border that I believe suits the style of the page that I was aiming to achieve. Underneath the user stats, the bio and location are displayed if the user chooses to add them. Having them display at the top of the page next to the profile picture immediately gives visitors to the given profile a brief introduction of the person and the type of content which they might expect to find there.

## Colour Scheme

![general-color-scheme-img](/src/assets/readme/color-scheme1.png)

The general colour scheme that I went for is displayed above. These colours were used for alot of the main features on the page including the headings, my logo and also most of the buttons that I have on the site. I wanted to keep the colour scheme as clean as possible as too much colour I feel, would draw attention away from the main content which should be the users posts. I got inspiration for this colour scheme from the Facebook website and I feel as though it works well here on Polaroid.


![pin-button-color-scheme-img](/src/assets/readme/color-scheme2.png)

I used the above color scheme when I wanted there to be a pop of colour, especially when there is a component on the page that I want users attention drawn to. The main example of how I incorportaed these colours is the pin button. I want users to be immediately aware of when they pin a post, so having it illuminate in these bright colours is a way to ensure that happens. Other areas of the site where I incorporated this colour scheme is the comment like button and for some links on the sign in and create account pages.

## Wireframes

### Home Screen 

![home-screen-wireframe](/src/assets/readme/home-screen-wireframe.png)

Above is a wireframe I created for the home page in the implementation of this project. I think throughout the development, I have managed to stick with the same design more or less. Originally, I was planning on displaying a list of users that the currently logged in user already follows on the left. When I got to that part of the code, I found it difficult to get those profiles to display so instead I opted for a list of the most active profiles. This was possible by listing the profiles with the highest number of posts in descending order.

### Full Post Page

![full-post-wireframe](/src/assets/readme/full-post-wireframe.png)

Above is a wireframe for my full post page, which shows the original layout that I was aiming for. I believe I stuck with the wireframe design throughout the development, and the finshed page looks very simialar to the one I created above while in the planning stages of this project.

### Pinboard Page

![pinboardwireframe](/src/assets/readme/pinboard-wireframe.png)

This was a design that I really wanted to implement at the beginning of this project. I think masonry layouts look very modern and stylish, especially on image sharing websites. As I progressed with the project and after lots of research, I began to realise that this would be a pretty difficult feature to include in the timeframe that I had to complete it. Eventually I decided to abort this layout option and stick with the design that I had already completed for the Home page. This is definitely a feature I want to come back to, and try to include in this project.  

# Deployment

## Local Deployment

The below points outline the steps taken to deploy this project to a local server.

- Create a new Github repository and give it a name of your choice
- Click on the green gitpod button to open a new Gitpod workspace
- To create a React app use the following command -
  "npx create-react-app . --use-npm"

For this particular project, instead of using the above command I used the following one instead from Code Institute to ensure I had all of the necessary dependencies I needed automatically installed for me -
"npx create-react-app . --template git+https://github.com/Code-Institute-Org/cra-template-moments.git --use-npm"

- Enter the command "y" to confirm you want to install the above package
- To start the application, type the following command - "npm start"
- Your project should now be running locally on port 3000

## Live Deployment

The following points outline the steps taken to successfully deploy the live project on Heroku.

These initial steps will get your skeleton project deployed live to Heroku -

- Commit your changes and push your code to Github
- Navigate to Heroku.com
- Click on the link to create new app
- Add a unique name for the application and select your region
- Navigate to the deploy tab and click on the connect to Github button
- Enter the name of your Github repository and click connect
- If you want your app to automatically re-deploy with any changes pushed to Github, enable automatic deploys by clicking that button on the deploy page
- Press the deploy branch button to tell Heroku to start building the application

To successfully connect my front-end application to my back-end drf_api, the below steps were followed -

- Navigate to Heroku.com and select my back-end API
- Navigate to the settings tab and select the reveal config vars option
- Add two new config vars, CLIENT_ORIGIN and CLIENT_ORIGIN_DEV
- The value of CLIENT_ORIGIN is the deployed url for your front-end site
- The value of CLIENT_ORIGIN_DEV is the url for your gitpod preview link for your front-end site
- Remember to remove the trailing backslash present on both of the above url's
- The Gitpod preview link will change slightly every couple of weeks, so if the application suddenly stops working you may have to update the Gitpod preview link in the Heroku config vars

For my final deployment, these last few steps were followed to get it successfully deployed on Heroku -

- In your package.json file, inside the "scripts" section add the following prebuild command -
  "heroku-prebuild": "npm install -g serve",
- Create a Procfile in the root of the project and add the following web command -
  web: serve -s build
- Ensure all final changes have been committed and pushed to Github
- Navigate to Heroku.com
- Select your front-end project and navigate to the deploy tab
- Scroll down to the bottom of the page and click the Deploy Branch button
- Heroku will now start building your final application
- When you see the message "deployed to Heroku", your app is now deployed and live on Heroku

The live link to my React application can be accessed here - https://pp5-frontend-social-app.herokuapp.com/

The back-end API that this project is connected to can be accessed with the below links -

Live link to my DRF_API application - https://social-media-drf-api.herokuapp.com/
Link to my DRF_API Github project - https://github.com/DanTaylor28/pp5-drf-api

# Testing

## Automatic Testing

I have included a few automatic tests in this application to ensure that my navigation menu renders as expected and displays the correct output to users. I intended to include many more automatic tests in this project checking the functionality of more my components. Unfortunately I did not have the time to create more than the ones that were demonstrated in the Moments walkthrough project. 

In the future, I intend to come back and create more to check the functionality and so I can also perfect my ability to code them. These types of tests were a new concept to me so it wasn't something I would have the time to fully understand in the time period I have before my submission. They are certainly a topic that I intend to delve alot more deeper into after my submission.

## Manual Testing

Throughout this development, extensive manual testing has been carried out by myself to check for any existing bugs in my code. The project has also been sent to my family and friends to ensure they do not come across any other bugs that I may have missed.

Some of the general tests that have been carried out include -

- All code has been put through the appropriate validator tests and has passed with no errors.
- The site functionality has been tested using Chrome, Safari and Firefox browsers and functions as expected on each.
- You can successfully create posts on multiple different devices including desktop, tablet and mobile screen sizes.
- The editing and deletion of posts can also be successfully executed on the above screen sizes.
- Comments can be created from all device screen sizes and they display as expected on each.
- The ability to pin and unpin posts works as expected and this can be done on all screen sizes with the changes reflected on all devices.

Permission classes and if statements are used extensively throughout the application, checking
users logged in statuses and ensuring they are the post/comment owners to have access to edit and delete data. All of this functionality has also been tested to ensure users data is protected and that users do not gain access to unauthorised pages of the site.

The below manual test were carried out by myself and others -

- Non signed in users cannot access the Create post page. They will be redirected to the home page if an attempt is made using direct url input.
- Non signed in users cannot access the My Pinboard or Discover pages.
- Unauthenticated users do not have the ability to pin posts. If an attempt is made, an overlay comment displays informing them that they have to be signed in to pin posts.
- Users cannot like comments if they are not signed in. The same message as above will display informing them why.
- The comment form is not displayed on the full post page for unauthenticated users making it impossible for non signed in users to post comments.
- The NavBar component renders the correct links for when a user is signed in or not, ensuring they don't have the ability to access pages they shouldn't be able to.
- When viewing a post or comment you uploaded, the EditDeleteDropdown displays and gives users access to update that content.
- The EditDeleteDropdown also shows for signed in users when on their own profile page, giving them access to edit their profile, username and change their password.
- Authenticated users cannot access the Sign In or Create Account pages. Any attempts to do so will automatically redirect them to the home page.
- Any follow/unfollow buttons shown for authenticated users do not appear if you are not signed in.
- All follow/unfollow buttons display in all expected areas of the site for users that are signed into their account.
- Each user profile displays a follow/unfollow button for signed in users, but as expected this option is not present on your own profile page as you cannot follow yourself.
- The follow/unfollow button displays the correct output depending on if you follow the account or not and updates on all pages correctly when any changes are made by the user.
- When a user pins or unpins a post, the icon is changed to reflect the users action.
- The icons displaying the num_of_pins and the num_of_comments values gets updated everytime the number of pins or comments changes.

The site contains user authentication and this has also been tested on multiple devices to ensure the following -

- Testing has ensured users can sign into their account as expected and also sign out by sending a post request to the "/dj-rest-auth/logout/" endpoint successfully.
- Users can create an account, with the information being sent to the "/dj-rest-auth/registration/" endpoint and getting stored in the API as expected.
- Any attempts to sign up using a username that already exists, will result in an error message displaying to the user explaining that the username is already taken.
- Submitting the form to update your username works as expected. A put request will be sent to the "dj-rest-auth/user/" endpoint and the changed username will be saved to the API and display correctly on the frontend site.
- Changing your password also functions as intended. A post request will be made to the "dj-rest-auth/password/change/" endpoint and your password will be successfully changed.
- Once a user signs in, that account will stay logged in for a 24 hour period without the need to re-authenticate.

One thing to note here is that when I first attempted to sign in using a mobile device, the page just kept loading the sign in page over and over. I realised this was due to having prevent cross-site tracking enabled on my device. Once this was disabled, the authentication and all other functionality worked as expected.

There are no console errors displaying in my dev tools other than a few expected ones when the component mounts. These expected errors include three 401 errors on mount when not signed in, a 401 error when a user navigates to the Sign In or Create Account page, a 400 error if incorrect information is input into a form and finally a 401 error when refreshing the access token.

## Validator Testing

- All of my CSS style sheets pass through the W3C CSS validator with no issues
- My HTML code passes through the W3C validator with no issues

- The Prettier extension was used to format all of my code and keep it in a consistent style

## Lighthouse Results

### Home Page - Desktop View

![home-desktop-lighthouse-img](/src/assets/readme/home-desktop.png)

### Home Page - Mobile View

![home-mobile-lighthouse-img](/src/assets/readme/home-mobile.png)

- The only results that suffered a slightly low result was the performance. From what I can understand, this is to do with the sizing and image quality of user posts that are present on this page. I couldn't see a solution in the time I had to improve this performance score as the quality of images getting posted here is in the hands of the user that creates the posts. I intend to come back to this at a later date and work out a solution to improve the score.

### My Pinboard Page - Desktop View

![pinboard-desktop-lighthouse-img](/src/assets/readme/pinboard-desktop.png)

### My Pinboard Page - Mobile View

![pinboard-mobile-lighthouse-img](/src/assets/readme/pinboard-mobile.png)

- Similarly to the Home page above, the performance was suffering here slightly due to the user posts that are displayed here.

### Discover Page - Desktop View

![discover-desktop-lighthouse-img](/src/assets/readme/discover-desktop.png)

### Discover Page - Mobile View

![discover-mobile-lighthouse-img](/src/assets/readme/discover-mobile.png)

- Again, the performance was slightly low because of the user posts.

### Create Post Page - Desktop View

![create-post-desktop-lighthouse-img](/src/assets/readme/createpost-desktop.png)

### Create Post Page - Mobile View

![create-post-mobile-lighthouse-img](/src/assets/readme/createpost-mobile.png)

### Profile Page - Desktop View

![profile-desktop-lighthouse-img](/src/assets/readme/profile-desktop.png)

### Profile Page - Mobile View

![profile-mobile-lighthouse-img](/src/assets/readme/profile-mobile.png)

- Performance was a little low here again as the profile owners posts are displayed underneath the profile details. Depending on how many posts the user has, the performance results here can fluctuate slightly.

### Sign In Page - Desktop View

![signin-desktop-lighthouse-img](/src/assets/readme/signin-desktop.png)

### Sign In Page - Mobile View

![signin-mobile-lighthouse-img](/src/assets/readme/signin-mobile.png)

### Sign Up Page - Desktop View

![signup-desktop-lighthouse-img](/src/assets/readme/signup-desktop.png)

### Sign Up Page - Mobile View

![signup-mobile-lighthouse-img](/src/assets/readme/signup-mobile.png)

# Bugs

## Unfixed Bugs

- Unfollowing a user from a different profile page

One error I noticed that I didn't get time to properly investigate before submission was when unfollowing a user from the popular profiles list. If I am on a profile page of a different user than the one I am unfollowing, the page redirects to the users profile I am unfollowing and the unfollow button doesn't update on the profile page. When I refresh the page, it updates and redirects me back to the original profile I was viewing with the button now updated to show the correct output. Every other instance of following or unfollowing a user except for this one works as expected and updates all the page elements correctly.

- Comment profile avatar not displaying properly

On the comment form, the currently logged in users avatar should display inside the component to the left of where users write comments. The component renders, but only a default image shows along with the alt tag. I unfortunately did not have time to solve this issue before my submission but I intend to come back and find a fix as soon as possible.

## Fixed Bugs

- Error messages not displaying

While working on the CreatePostForm, any errors raised would not show up as a bootstrap Alert as expected and it would instead redirect me to the sign in page. I spent a considerable amount of time adjusting the code on my form page but after a while, I realised the error must be originating from somewhere else. Eventually I saw that when I defined my axiosReq interceptor in CurrentUserContext.js, I wrote the post request endpoint as “dj-rest/auth/token/refresh/” instead of “dj-rest-auth/token/refresh/“. After making this adjustment to the endpoint, my code then functioned as expected.

- HandlePin not functioning properly

When I was defining the handleUnpin function in Post.js, I came across a bug where an error would be raised if I tried to pin a post that I had just unpinned before. I concluded that the error must be originating from either the handlePin or handleUnpin function but it was quite tricky to pinpoint as both functions worked as expected when testing them independently from each other. After looking back over the API requests, I finally noticed that I had missed the “await” before the axios.post request in the handlePin function. This ultimately fixed the problem that I was having.

- Posts not showing on feed page

While working on the code for PostList.js, a bug arose which prevented my posts from rendering on the feed page as expected. After looking over and testing various pieces of code, I saw that when I declared the variable to useLocation() in PostList.js I used curly brackets around the variable instead of square ones. After making this adjustment, my posts then rendered as I expected.

- Results not defined bug

When coding ProfilePage.js, I got an error saying that results was not defined in the following line of my code - “const [profile] = pageProfile.results;”
After some digging, I remembered that I had failed to declare the pageProfile variable with the empty results array inside ProfileDataContext.js. Once I added that required variable, the error was gone.

- Assigning a category to a post not working as expected

In CreatePostForm.js, I was attempting to include a category field with a choice of select options to assign to the post. When I tried to make a selection from the dropdown list and upload the post, an error message would display saying "Incorrect type. Expected pk value, received str." While it was obvious to me that it was expecting a primary key number, I couldn't at first figure out how to assign an id number to the value. Eventually I noticed it was as simple as changing the value in my options variables to a numbered value for each different category. This bug also caused my edit form to have an issue. As the category could not be updated, the edit form would not submit at all therfore no changes could be made to posts after they had been uploaded. Once these changes were made to my form, all of the above errors were solved.

# Credits

- Code Institutes walkthrough projects “DRF_API” and “Moments”
  These 2 walkthrough projects were invaluable for me to be able to complete this project. There were a few methods introduced in the Moments walkthrough that were new to me, and implementing them in the walkthrough really helped to cement my understanding of them so I could incorporate them into my own project.

- Code Institutes Slack group
  As a member of the pp5 Advanced Frontend group, I could find other people struggling with many of the problems I was facing myself. Most of the time, I could work out solutions to many of my errors from reading through other peoples which were similar a lot of the time. The support in the group from fellow members is also a big plus, as it helps to keep you motivated and determined to not give up.

- Canva
  I used this to edit and crop numerous images. It was useful to ensure my images were the correct dimensions before I used them for my posts, and to create the logo which is present in the navigation bar of my project.

- Icons8
  This was used for my favicon on the site.

- Unsplash
  Unsplash was used for some images that I added to my uploaded posts in the application.

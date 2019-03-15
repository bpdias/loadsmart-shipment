### Development Description ###

After receiving the challenge, I choose the React library to handle the specifications. 
I use the create-react-app boilerplate to begin the development, and with Npm I add the dependencies and libraries to complete the task

### Application details ###

Thinking about componentization and organization I follow the components pattern of singularity, each component is independent and have your complete structure in one place. Js, Styles and Test files are inside the specific component folder to become easier to debug, mantain and refactor.

In multidisciplinary teams, I think if someone else is going to work on a specific component if all off functionality are in one place is easy to understand and work on it.

Looking for code organization and reusability of code following the DRY principle, I normally create folders who handle specific things that are reusable. 

Config, helpers, and hocs (higher order components) folders are examples of reusability. 

On Config folder I reserve for files who have configurations and constants that are immutable and reusable in all parts of the system. In this particular case the external API links.

The Helper folders I organize js and CSS files that have a specific utilization like label manipulation and CSS variables. were we can reuse on all the system.

Hocs folder as the same, I put all my Higher Order Functions  on the folder because by definition they are reusable.

The Pages folder is where I put the class extended components who will deal as the pages on the system and will handle to get the data necessary for the components who build the page.

And finally the Redux folder where I organize all the state management structure, the actions creators and reducers.

### Test Coverage ###

I cover the two main components on this challenge the Card and Details components to guarantee that the information I need to display is there.

Also an important thing to test is the actions and the reducers, when I test my action I want to verify if my ajax call from my ajaxHelper file are dispatching the right actions. And for my reducers test I want to cover if the states of my application was what I expect.


### Notes and considerations about not delivered functionalities ###

First of all, it was very fun and challenging to perform this test. 
Thank you for the opportunity. 

One of the requirements you guys mention was, "If you use a preprocessor, include both the raw files and the compiled CSS output". Well I discover that when we use the create-react-app boilerplate I can't make non-minified build. I make a research but as Dan Abramov (Co-author of Redux and Create React App) says it's not supported.

Here the discussion: https://github.com/facebook/create-react-app/issues/3403

So, in the build folder I have the CSS output but a minify one sorry about that.

Hope you guys enjoy my work and please if you have time send me some feedback.

Best regards.

### Observation ###

I create the project in m private repository on git hub. If you guys want access just let me know, In there you can avaliate the commits structure and have access to the code.
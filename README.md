# Interactive Dialogue

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

The motivation of creating this project was to build an algorythm system that provides the opportunity for the user to have an interactive conversation. The project simulates a conversation one could have on dating app. 

## Structure 

The project is structured in this way: 

*App.js > Start Animation file and 9 main conversation components > sub 
conversation components* 

The App.js file holds all of the 9 main conversation blocks and allows them to be wrapped up for the usage of the React Feature ("Context" ... but more about that below).

Each of the 9 conversation components holds a different number of sub conversation components that result in having chosen different paths of the algorithm. They are at the same time expanding the algorithm and causing it to branch out. 

At the rate of having 2 options at every stage the branch system would expand exponentially. Because I didn't want to overcomplicate the code, I used certain paths multiple times (one unmatching the other one - sub block 3.3., one getting unmatched - sub block 4.5. and actually deciding to meet up - sub block 8.2). 

## Single page logic - moving through the conversation blocks 

As this is a single page application I used the 9 main conversation blocks to display whatever is needed. While one block is active, the others are set to "null" and simply not displayed. There is a condition set up for that within the App.js file. 

The user chooses what answer they want to repond with and by clicking on it a context variable is increased by 1. The mentioned condition sees this and accordingly sets the not needed block to null, while activating the display of the needed conversation block. So if "count == 2" the second conversation block including the sub conversation block will be displayed. 

## React Context - Further usage of this feature

Not only did I use the Context system React provides to determine which conversation block should be visible, but I also used it to regulate the time certain processes take within each sub conversation block. 

--> how long the three typing dots animation is
--> how long it takes until the two options of response appear to the user
--> how long the chosen answer is displayed until the count is increased and we are moving on to the next conversation block

## Things to improve 

The styling of the app can certainly be improved. I tried to focus on the logic for the algorythm mainly. 

Also the usage of context can be expanded even further. There are few more time settings where I could refactor the code, so they are controlled centrally and I don't need to check on every single component everytime I decide to reset a time. 

Even whole blocks of code could eventually be used through the context feature. I didn't see the need to do this for this project though. 

Last but not least the algorithm could be improved through clearer, thematically structured sub blocks. For examole the three blocks mentioned (unmatching 3.3., being anmatched 4.5., meeting 8.2.) could be taken out of the block system that works through numeration and just summarized in theme-blocks. There could be a conversation block called "Unmatching" instead of using the sub block 3.3. That would have the advantage of not having to look through the sub blocks so much, which can be confusing, and one could more easily add more alternative components. Instead of having the pop up if the user decides to unmatch someone, a sort of thematic library could be created. 

## Learnings

I experienced how quickly an algorithm can "escalate" and how complex things can get. I had to draw up the options I created on a piece of paper as I lost track really fast. 

I can't praise the Context feature enough. It was really practical and so helpful to get my project running smoothly on different levels. 

### Deployment

Deployed with Netlify: [https://scintillating-otter-a118f4.netlify.app/](https://scintillating-otter-a118f4.netlify.app/)

### Feedback

If you want to contact me and even give me feedback on my project, I would love to hear from you. Please contact me on LinkedIn: [https://www.linkedin.com/in/regina-schmidt/](https://www.linkedin.com/in/regina-schmidt/) 

# learning-react
A repository documenting my progress in learning React. This contains mini-projects, experiments, and notes that demonstrate my growth and understanding of React concepts, from the basics to advanced topics like state management, hooks, and component architecture.
# What i Learnerd so far (dont hesitate to visit my list of projects which is more descriptive )
  # Project 1: Travel List
  
  This project demonstrates my understanding of core React concepts. It focuses on the creation of a travel list application.
  
  ### What I learned:
  - **Setting up a new React project:** Created a React application using Vim for an efficient setup.
  - **Using JSX:** Returned JavaScript objects to describe what React should display on the page.
  - **Composability:** Built custom components that handle specific parts of the UI.
  - **Reusability:** Utilized `props` to make components reusable across the application.
  - **Linking to static assets in vite:**
  - **Creating components from an array of data:**
      - In this project, data was stored in a `data.js` file.
      - In future projects, I plan to fetch the data dynamically from an API.
  - **Mapping through data:** Dynamically rendered an array of components inside the `App` component using the `.map()` function and *making sure that each component in the list has its unique key*
  
  ---
  
  # Project 2: Chef Claude
  
  Chef Claude is a web application that allows users to input ingredients they have on hand and interact with an AI API to retrieve a list of possible recipes that can be made with those ingredients.
  
  ### What i learned:
  - **User Input:** Allows users to input the ingredients they have.
  - **AI API Integration:** Sends the ingredients to an AI-powered API.
  - **Recipe Generation:** Returns a list of recipes tailored to the user's ingredients.
  - **Event Hundler in React:**
  - **State management:** Learning the two ways of using state :
    - Pass the new version of state that we want to use as the replacement for the old version of state.
    - Pass a callback function. Must return what we want the new value of state to be. Will receive the old version of state as a parameter   
  - **Fomrs:** Learning the declarative way of accessing and gathering data forms by implementing a function in the action attribute
  - **Conditional rendering**
  - **Shared state:**
    - Derived State : deriving the component's state  based on the parent state by implementing a state inside the child component => *Ussue: Multiple Sources of truth  which means that the current component will loose synchronisatiion with the states stored in theparent component*
    - Unified source of truth: implementing a function in the parent component that uses a state to determine which child component needs to change its properties => *One source of truth: Synchronisation of child components with the parent component*
  - **Dynamic UI:** Displays the relevant recipes along with details like cooking time and instructions.

  # Project 3: Meme Generator

  ### What i learned:
  - **Controlled Components:** Its a component that React is in control of and does reflect the current value of state , to make the a component controlled we need 2 things :
    - Be able to update state EVERY TIME there is a change inside of an input element (eg. input box)
    - Making the input reflect the current value of STATE
  - **Fetching data:** without using use effect we will stuck in  an infinite loop  -> not handling side effects!
  - **useEffect:**  useEffect(callbackfunction to execute any code that has side effect on the state and it will run on every single runder, dependecies array : rerunning the callbackfunction if the array changed its values )  [the component renders than it execute the useEffect function !]
  - **when using useEffect :**
    - Any code that affects or interacts with an outside system
    - local storage, API, websockets, DOM manipulation
  -**Cleanup function :**
    - its a returned function from the anonymous callback function if the useEffect and its role is to describe to our useEffect what to do when our component disapear from the page
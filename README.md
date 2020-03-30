# Project

This is a final group project that uses blockchain

# To Do
- Mark & Steven
    - [x] input data onto chain customized to vote
    - [x] looking at how blockchain data is stored and where it is
    - [x] create random ids for user from function and maybe time? this id is unique, identify user and location (two strings put together)
- Claudine
    - [x] create database for users
        - [x] database will probably have voting candidates as well
    - [x] create login system
    - [x] connect it to our web app
- Johan
    - [x] UI for Federal Voting (edited)
    - [x] clean up the overall UI
    - [x] End splash screen to thank the user for voting and close, we want it to be its own separate page and not added onto previous
    - [x] make tab icon our icon

- Far goal
    - [] make our app public


Follow the steps below to download, install, and run this project.

## Dependencies
Install these prerequisites to follow along with the tutorial. See free video tutorial or a full explanation of each prerequisite.
- NPM: https://nodejs.org
- Truffle: https://github.com/trufflesuite/truffle
- Ganache: http://truffleframework.com/ganache/
- Metamask: https://metamask.io/

## Step 2. Install dependencies
```
$ cd election-2019_update
$ npm install
```
## Step 3. Start Ganache
Open the Ganache GUI client. This will start your local blockchain instance.

## Step 4. Compile & Deploy Election Smart Contract
`$ truffle migrate --reset`
You must migrate the election smart contract each time your restart ganache.

## Step 5. Run and Configure Metamask
- Load up Metamask, you may be prompted for a password if you have not loaded it recently.
  - Change network to 'Main Ethereum Network' and log into your account
- Then change change your network to your custom RPC (which is on 127.0.0.1) or Localhost 8545
  - This is dependent on the configurations in your truffle-config.js file and Ganache settings

## Step 6. Run the Front End Application
`$ npm run dev`
This is because of settings that are set in the package.json

## Troubleshoot Starting Application
If you are getting npm ERR! when trying to run the command
`$ npm run dev`
Then delete the node_modules folder and re-install the dependencies with 
`$ npm install`


# References
- [Dapp University tutorial on blockchain](https://www.dappuniversity.com/articles/the-ultimate-ethereum-dapp-tutorial)
- [Maple Leaf Image](https://www.google.com/url?sa=i&source=images&cd=&ved=2ahUKEwigp5eCjbLnAhXJjp4KHbThAY8QjRx6BAgBEAQ&url=https%3A%2F%2Fen.wikipedia.org%2Fwiki%2FFile%3AMaple_leaf_--_Liberal.svg&psig=AOvVaw361coCyzDhp55neyhPCy6y&ust=1580706576053742)
- [Check Mark Image](https://www.google.com/url?sa=i&source=images&cd=&ved=2ahUKEwj4y4igjbLnAhXZJzQIHZnvAVIQjRx6BAgBEAQ&url=https%3A%2F%2Fsnorkelandstudy.org%2Feligibility-awards%2Fcheck-mark%2F&psig=AOvVaw00pcX2Ttrv30R2Zce4Qsf2&ust=1580706639856498)
- [react links to another page](https://reacttraining.com/react-router/web/guides/quick-start)
- [react routing](https://www.golangprograms.com/how-to-create-simple-react-router-to-navigate-multiple-pages.html)
- [react routing 2](https://reacttraining.com/react-router/web/api/Route)
- [icon for tab](https://stackoverflow.com/questions/4888377/how-to-add-a-browser-tab-icon-favicon-for-a-website)
- [Potential for Javascript, confirm pop up window](https://www.w3schools.com/jsref/met_win_confirm.asp)
- [Materialize Navbar](https://materializecss.com/navbar.html)
- [Materialize ](https://materializecss.com/getting-started.html)
- [Solidity arrays, how to create one](https://www.tutorialspoint.com/solidity/solidity_arrays.htm)
- [Solidity data types](https://solidity.readthedocs.io/en/v0.4.21/types.html)
- [Solidity concatenate uint into a string](https://ethereum.stackexchange.com/questions/10811/solidity-concatenate-uint-into-a-string)
- [Initializing an array Solidity](https://ethereum.stackexchange.com/questions/11533/how-to-initialize-an-empty-array-and-push-items-into-it)
- [Loops in solidity](https://subscription.packtpub.com/book/application_development/9781788831383/5/ch05lvl1sec61/the-for-loop)
- [Solidity, working with strings and storing items in variables](https://hackernoon.com/working-with-strings-in-solidity-c4ff6d5f8008)
- [Firebase is not a function console error](https://stackoverflow.com/questions/38248723/firebase-database-is-not-a-function)
- [Implement a Realtime Firebase Database in a webpage](https://www.freakyjolly.com/implement-realtime-firebase-database-in-a-webpage-from-scratch/)
- [align items in div tags](https://www.w3schools.com/tags/att_div_align.asp)
- [Bootstrap 4 documentation](https://getbootstrap.com/docs/4.0/utilities/colors/)
- [bootstrap icons for login](https://icons.getbootstrap.com/)
- [MDBootstrap Documentation](https://mdbootstrap.com/docs/jquery/forms/customization/)
- [resetting error message on login screen](https://stackoverflow.com/questions/21457904/change-element-display-none-back-to-default-style-value-js)
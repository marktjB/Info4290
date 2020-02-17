# Project

This is a final group project that uses blockchain

# To Do
- Mark & Steven
    - [] input data onto chain customized to vote
    - [] looking at how blockchain data is stored and where it is
    - [x] create random ids for user from function and maybe time? this id is unique, identify user and location (two strings put together)
- Claudine
    - [x] create database for users
        - [] database will probably have voting candidates as well
    - [x] create login system
    - [x] connect it to our web app
- Johan
    - [] UI for the Municipal and Provincial Voting
    - [] clean up the overall UI
    - [] End splash screen to thank the user for voting and close, we want it to be its own separate page and not added onto previous
    - [] make tab icon our icon

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

## Step 5. Configure Metamask
- Load up Metamask, you may be prompted for a password if you have not loaded it recently.
- Else you'll just need to change your network to the Main network and then to your custom RPC (which is on 127.0.0.1)

## Step 6. Run the Front End Application
`$ npm run dev`
This is because of settings that are set in the package.json


# References
- [Maple Leaf Image](https://www.google.com/url?sa=i&source=images&cd=&ved=2ahUKEwigp5eCjbLnAhXJjp4KHbThAY8QjRx6BAgBEAQ&url=https%3A%2F%2Fen.wikipedia.org%2Fwiki%2FFile%3AMaple_leaf_--_Liberal.svg&psig=AOvVaw361coCyzDhp55neyhPCy6y&ust=1580706576053742)
- [Check Mark Image](https://www.google.com/url?sa=i&source=images&cd=&ved=2ahUKEwj4y4igjbLnAhXZJzQIHZnvAVIQjRx6BAgBEAQ&url=https%3A%2F%2Fsnorkelandstudy.org%2Feligibility-awards%2Fcheck-mark%2F&psig=AOvVaw00pcX2Ttrv30R2Zce4Qsf2&ust=1580706639856498)
- [react links to another page](https://reacttraining.com/react-router/web/guides/quick-start)
- [react routing](https://www.golangprograms.com/how-to-create-simple-react-router-to-navigate-multiple-pages.html)
- [react routing 2](https://reacttraining.com/react-router/web/api/Route)
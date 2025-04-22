# Customer Workflow System

A sample react program that uses the useState and useEffect(Something like reactive) to gather the frequent changes with the system and display the workflow changes.

## Create Project

Ensure you have node package manager installed in your machine. Use the below npm, command to generate the project:

```bash
npx create-react-app sample-react-jsf	
```
This process will install the create-react-app module and further start creating a development bed for us to start with react works readily.

With the above being down - Next is to start the development activity.

In this example - We have used - useState and useEffect which are two important hooks in React that help manage state and side effects in functional components.

A perfect example of how a reactive state management can happen - But as far in this example, I have managed to simulate the same with timeout. Please refer to **workflow.js**

## Steps to Run the Project in local

1. Build the Project & test it locally in Chrome. The possible link in which the project will be hot deployed is [localhost](http://localhost:3000)

```bash
npm start
```
2. Once you are happy with the testing, Generate the build using the below command.

```bash
npm run build
```
3. The **build** directory will hold the main.js and main.map which are two important final artifact to be simulated from the static server.

## Contributing

Pull requests are welcome. For major changes, please open an issue first
to discuss what you would like to change.

Please make sure to update tests as appropriate.

## License

[Apache 2.0](https://www.apache.org/licenses/LICENSE-2.0)
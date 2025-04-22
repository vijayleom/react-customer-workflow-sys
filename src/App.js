import Workflow from "./workflow.js";

const App = () => {
    const headingStyle = {
        color: 'green',
        textAlign: 'center'
    };

    return (
      <div>
        <center>
          <h1 style={headingStyle}>Customer Validation Workflow</h1>
         <Workflow /> 
        </center>
      </div>
      );
};

export default App;
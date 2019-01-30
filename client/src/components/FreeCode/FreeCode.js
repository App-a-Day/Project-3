import React from "react";
import CodeEditor from "../CodeEditor/CodeEditor";

class FreeCode extends React.Component {
    render() {
        return (
            <div>
                <div className="ui container">
                <div className="ui equal width center aligned padded grid">
      <div className="column"></div>
                
                <CodeEditor />
                </div>
            </div>
            </div>

      
    
        );
    }
}
    

export default FreeCode;
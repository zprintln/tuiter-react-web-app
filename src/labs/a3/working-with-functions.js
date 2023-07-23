import ES5Functions from "./es5-functions";
import ArrowFunctions from "./arrow-functions";
import ImpliedReturn from "./implied-return";
import FunctionParenthesisAndParameters from "./function-parenthesis-and-parameters";
import WorkingWithArrays from "./working-with-arrays";

function WorkingWithFunctions() {
    console.log('Working with functions');

    return(
       <div>
            <ES5Functions/>
            <ArrowFunctions/>
            <ImpliedReturn/>
            <FunctionParenthesisAndParameters/>
            <WorkingWithArrays/>
       </div>
    );
}

export default WorkingWithFunctions

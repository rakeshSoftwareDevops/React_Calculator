import './buttons.css';
import Resultdisplay from './resultdisplay';
import React from 'react'

class buttons extends React.Component{
  constructor(props){
      super(props);
      this.state={
          inputData:[],
          resultData:null,
          inputdata1:null,
          operator:null,
          inputdata2:null,
          operationperformed:false
    };

  }
  handlebuttonClick=(event)=>{
      var inputArr=[],input1preArr=[],input2preArr,input1Arr=[],input2Arr=[],operator,result,resultArr=[],operand1,operand2,proceedfurther=false;
      const input=event.target.value;
      inputArr.push(input);
      console.log("inputArr"+inputArr);
      this.setState({
        inputData: [...this.state.inputData,...inputArr]
      },()=>{
        console.log(this.state.inputData);
        if(this.state.inputdata1===null||this.state.operator===null||this.state.inputdata2===null){
          input1preArr=this.state.inputData.slice(0,this.state.inputData.length);
          var input1prestring=input1preArr.toString();
          var operandpre1=parseInt(input1prestring.replace(/\,/g,""));
          this.setState({inputdata1: operandpre1},()=>{console.log(this.state.inputdata1)});
        }
        for(var i=0;i<this.state.inputData.length;i++){
          if(this.state.inputData[i]=='+'||this.state.inputData[i]=='-'||this.state.inputData[i]=='/'||this.state.inputData[i]=='×'){
            input1Arr=this.state.inputData.slice(0,i);
            operator=this.state.inputData[i];
            input2Arr=this.state.inputData.slice(i+1,this.state.inputData.length);
            var input1string=input1Arr.toString();
            var operatorstring=operator.toString();
            var input2string=input2Arr.toString();
             console.log("input1sting"+input1string+"input2string"+input2string);
            if(typeof input1string!=='undefined'&& input1string!=='')
            {
              operand1=parseInt(input1string.replace(/\,/g,""));
  
            }
            if(typeof input2string!=='undefined'&& input2string!==''){
            operand2=parseInt(input2string.replace(/\,/g,""));
            }
            this.setState({inputdata1: operand1},()=>{console.log(this.state.inputdata1)});
            this.setState({inputdata2: operand2},()=>{console.log(this.state.inputdata2)});
            this.setState({operator: operatorstring},()=>{console.log(this.state.operator)});
            console.log("operands"+operand1+operand2+operatorstring);
            if(typeof operand1!=='undefined' && operand1!==''&&typeof operand2!=='undefined'&& operand2!==''&& typeof operatorstring!=='undefined' && operatorstring!==''){
                switch(operatorstring){
                    case '+':
                        result=operand1+operand2;
                        this.setState({inputdata1: operand1},()=>{console.log(this.state.inputdata1)});
                        this.setState({inputdata2: operand2},()=>{console.log(this.state.inputdata2)});
                        this.setState({operator: operatorstring},()=>{console.log(this.state.operator)});
                        this.setState({resultData: result},()=>{console.log(this.state.resultData)});
                        resultArr.push(result);
                        this.setState({inputData:resultArr},()=>{console.log(this.state.inputData)});
                        this.setState({inputdata1: result},()=>{console.log(this.state.inputdata1)});
                        console.log("result"+result+"resultArr"+resultArr+"operand1"+operand1+"operand2"+operand2);
                        operand1='';
                        operand2='';
                        operatorstring='';
                       // this.setState({inputdata2: operand2},()=>{console.log(this.state.inputdata2)});
                       // this.setState({operator: operatorstring},()=>{console.log(this.state.operator)});
                        this.setState({operationperformed: true},()=>{console.log(this.state.operationperformed)});
                        break;
                    case '-':
                        result=operand1-operand2;
                        this.setState({inputdata1: operand1},()=>{console.log(this.state.inputdata1)});
                        this.setState({inputdata2: operand2},()=>{console.log(this.state.inputdata2)});
                        this.setState({operator: operatorstring},()=>{console.log(this.state.operator)});
                        this.setState({resultData: result},()=>{console.log(this.state.resultData)});
                        resultArr.push(result);
                        this.setState({inputData:resultArr},()=>{console.log(this.state.inputData)});
                        console.log("result"+result+"resultArr"+resultArr+"operand1"+operand1+"operand2"+operand2);
                        operand1='';
                        operand2='';
                        operatorstring='';
                        break;
                    case '×':
                        result=operand1*operand2;
                        this.setState({inputdata1: operand1},()=>{console.log(this.state.inputdata1)});
                        this.setState({inputdata2: operand2},()=>{console.log(this.state.inputdata2)});
                        this.setState({operator: operatorstring},()=>{console.log(this.state.operator)});
                        this.setState({resultData: result},()=>{console.log(this.state.resultData)});
                        resultArr.push(result);
                        this.setState({inputData:resultArr},()=>{console.log(this.state.inputData)});
                        console.log("result"+result+"resultArr"+resultArr+"operand1"+operand1+"operand2"+operand2);
                        operand1='';
                        operand2='';
                        operatorstring='';
                        break;
                    case '/':
                        result=operand1/operand2;
                        this.setState({inputdata1: operand1},()=>{console.log(this.state.inputdata1)});
                        this.setState({inputdata2: operand2},()=>{console.log(this.state.inputdata2)});
                        this.setState({operator: operatorstring},()=>{console.log(this.state.operator)});
                        this.setState({resultData: result},()=>{console.log(this.state.resultData)});
                        resultArr.push(result);
                        this.setState({inputData:resultArr},()=>{console.log(this.state.inputData)});
                        console.log("result"+result+"resultArr"+resultArr+"operand1"+operand1+"operand2"+operand2);
                        operand1='';
                        operand2='';
                        operatorstring='';
                        break;
                    default:
                        break;
                    
  
                }
            }
  
          }
        }
      
      
      
      
      });
    
       
      console.log(this.state.inputData);
      console.log(this.state.resultData);
         
     
     
      
     
      
 


  }
  handleclearsection=(event)=>{
    this.setState({inputdata1: null},()=>{console.log(this.state.inputdata1)});
    this.setState({inputdata2: null},()=>{console.log(this.state.inputdata2)});
    this.setState({operator: null},()=>{console.log(this.state.operator)});
    this.setState({resultData: null},()=>{console.log(this.state.resultData)});
    this.setState({inputData:[]},()=>{console.log(this.state.inputData)});
  }
  render(){
    return (
        <div className="output">
            <Resultdisplay operand1={this.state.inputdata1} operator={this.state.operator} operand2={this.state.inputdata2} result={this.state.resultData}/>
            <div className="inputcontrols">
                <button className="Input" value="7" onClick={this.handlebuttonClick}>7</button>
                <button className="Input" value="8" onClick={this.handlebuttonClick}>8</button>
                <button className="Input" value="9" onClick={this.handlebuttonClick}>9</button>
                <button className="InputOperator" value="/" onClick={this.handlebuttonClick}>/</button>

            </div>
            <div className="inputcontrols">
                <button className="Input" value="4" onClick={this.handlebuttonClick}>4</button>
                <button className="Input" value="5" onClick={this.handlebuttonClick}>5</button>
                <button className="Input" value="6" onClick={this.handlebuttonClick}>6</button>
                <button className="InputOperator" value="×" onClick={this.handlebuttonClick}>×</button>
            </div>
            <div className="inputcontrols">
                <button className="Input" value="1" onClick={this.handlebuttonClick} >1</button>
                <button className="Input" value="2" onClick={this.handlebuttonClick}>2</button>
                <button className="Input" value="3" onClick={this.handlebuttonClick}>3</button>
                <button className="InputOperator" value="+" onClick={this.handlebuttonClick}>+</button>
            </div>
            <div className="inputcontrols">
                <button className="Input" value="." onClick={this.handlebuttonClick}>.</button>
                <button className="Input" value="0" onClick={this.handlebuttonClick}>0</button>
                <button className="Input" value="=" onClick={this.handlebuttonClick}>=</button>
                <button className="InputOperator" value="-" onClick={this.handlebuttonClick}>-</button>
            </div>
            <button className="clearsection" value="clear"  onClick={this.handleclearsection}>Clear</button>
        </div>
    );

  }
 
}

export default buttons;

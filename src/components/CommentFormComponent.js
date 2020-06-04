import React,{Component} from 'react';
import {Button} from 'reactstrap';

class CommentForm extends Component{

    render(){
        return(
            <div>
                <Button outline>
                    <span className='fa fa-edit fa-lg'> </span>
                    Submit Comment
                </Button>
            </div>
        );
    }
}
export default CommentForm;
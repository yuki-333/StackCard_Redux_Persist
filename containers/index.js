import Home from "../components/Home";
import { connect } from "react-redux";

import { addTodo } from '../actions'


const mapStateToProps = state => {
   return {
       title: state.title,
       word: state.words.list,
   };
};

const mapDispatchToProps = dispatch => {
   return {
       onAddToDo: word => {
           dispatch(addTodo(word))
       }
   };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);

//App component - represents the whole app

App = React.createClass({

    mixins: [ReactMeteorData],

    //getInitialState()
    //{
    ///  return
    //  {
    //    hideCompleted: false
    //  }
  //  },

    getMeteorData(){
        return{
            tasks: Tasks.find({}, {sort: {createdAt: -1}}).fetch()//,
            //incompleteCount: Tasks.find({checked: {$ne: true}}).count()
        }
    },

    getTasks(){
        return[
            {_id:1, text: "Test 1"},
            {_id:2, text: "Test 2"},
            {_id:3, text: "Test 3"}
        ];
    },

    renderTasks(){
        return this.data.tasks.map((task) =>{
            return <Task key={task._id} task={task} />;
        });
    },

    handleSubmit(event){
        event.preventDefault();

        // Find the text field via the React ref

        var text = React.findDOMNode(this.refs.textInput).value.trim();

        Tasks.insert({
            text: text,
            createdAt: new Date() // current time
        });

        // Clear form

        React.findDOMNode(this.refs.textInput).value = "";
    },

    /*toggleHideCompleted()
    {
      this.setState
      ({
          hideCompleted: !this.state.hideCompleted
      });
    },*/

    render() {
      return(
        <div className="container">
          <header>
            <h1>Todo List /*({this.data.incompleteCount})*/</h1>


            /*<label className="hide-completed">
              <input
                type="checkbox"
                readOnly={true}
                checked={this.start.hideCompleted}
                onClick={this.toggleHideCompleted} />
              Hide Completed Tasks
            </label>*/
            /*<form className="new-task" onSubmit={this.handleSubmit} >
                <input
                  type="text"
                  ref="textInput"
                  placeholder="Type to add new tasks"/>
            </form>*/
          </header>
          <ul>
            {this.renderTasks()}
          </ul>
        </div>
    );
  }
});

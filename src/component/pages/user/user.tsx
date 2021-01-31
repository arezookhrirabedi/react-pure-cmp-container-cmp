import React from 'react'
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { IUser } from '../../../model/model.user';
import { action_updateUsers } from '../../../redux/action/users';
import { IReduxState } from '../../../redux/app.state';
interface IProps{
    users:Array<IUser>}
    interface IState{}
 class UserComponent extends React.Component<IProps,IState> {
    render() {
        alert(this.props.users)
        return (

            <div>
              {this.props.users.map((user:IUser,index:number)=>{
                  return(
                    <>
                    {/* <div key={index}>
                        {user}
                    </div> */}
                    </>
                  )
              })} 
            </div>
        )
    }
}
const mapDispatchToProps = (dispatch: Dispatch) => {
    return {
      onUpdateUsers: (users: Array<IUser>) => dispatch(action_updateUsers(users)),
    };
  };
  const mapStateToProps = (state: IReduxState) => {
    return {
      users: state.users,
    };
  };
  
  
export const User= connect(mapStateToProps, mapDispatchToProps)(UserComponent );
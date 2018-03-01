import React from 'react'
import { connect } from 'dva'

function TestEnv({ dispatch, envName }) {
    function showEnv(){
        dispatch({
            type: "testEnv/get",
            payload: {}
        })
    }
    return (
        <div>
            <button onClick={showEnv}>Click</button>&nbsp;&nbsp;&nbsp;
            <span>{envName}</span>
        </div>
    );
}
function mapStateToProps(state) {
    const { envName } = state.testEnv
    return { envName }
}
export default connect(mapStateToProps)(TestEnv)
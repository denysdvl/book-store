const updatePostOrder = (state, action) => {

    if (state === undefined) {
        return {
            obviouslyform: false,
            successPost: false,
            loading: false,
            error: null,
        }
    }

    switch (action.type) {
        case 'OPEN_ORDER':
            return{
                successPost: false,
                obviouslyform: true,
                loading: true,
                error: null,
            }
        case 'POST_ORDER_REQUEST':
            return {
                successPost: false,
                obviouslyform: state.postOrder.obviouslyform,
                loading: true,
                error: null,
            }
        case 'POST_ORDER_SUCCESS':
            return {
                obviouslyform: true,
                successPost: action.payload,
                loading: false,
                error: null,
            }
        case 'POST_ORDER_FAILURE':
            return {
                obviouslyform: state.postOrder.obviouslyform,
                loading: false,
                error: action.payload,
            }
        case 'OPEN_CLOSE_FORM':
            return {
                loading: false,
                obviouslyform: !state.postOrder.obviouslyform,
                error: null
            }
            default:
                return state.postOrder
    }

}

export default updatePostOrder;
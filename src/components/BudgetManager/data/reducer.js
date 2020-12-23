import { BUDGET_CATEGORY_ACTIONS, EXPENSE_ACTIONS} from './constants'
import {CreateCategory, RemoveCategory, ModifyCategoryField, CreateExpense, RemoveExpense, ModifyExpenseField} from './budgetManagerPublicAPI'

const defaultBudgetPlannerObject = {
    categories: [],
    expenses: []
}

export default function BudgetManagerReducer(state = defaultBudgetPlannerObject, action) {
    switch(action.type){
        case BUDGET_CATEGORY_ACTIONS.CREATE_CATEGORY:
            return CreateCategory(state)
        case BUDGET_CATEGORY_ACTIONS.REMOVE_CATEGORY:
            return RemoveCategory(state, action.payload.id)
        case BUDGET_CATEGORY_ACTIONS.MODIFY_CATEGORY:
            return ModifyCategoryField(state, action.payload.id, action.payload.field, action.payload.value)
        case EXPENSE_ACTIONS.CREATE_EXPENSE:
            return CreateExpense(state, action.payload.name, action.payload.date, action.payload.amount, action.payload.id )
        case EXPENSE_ACTIONS.REMOVE_EXPENSE:
            return RemoveExpense(state, action.payload.id)
        case EXPENSE_ACTIONS.MODIFY_EXPENSE:
            return ModifyExpenseField(state, action.payload.id, action.payload.field, action.payload.value)
        default:
            return state
    }
}
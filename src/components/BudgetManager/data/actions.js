import { id } from "date-fns/locale"
import { BUDGET_CATEGORY_ACTIONS, BUDGET_CATEGORY_FIELDS, EXPENSE_ACTIONS, EXPENSE_FIELDS } from "./constants"

const CreateBudgetCategory = () => {
    return {
        type: BUDGET_CATEGORY_ACTIONS.CREATE_CATEGORY,
    }
}

const RemoveBudgetCategory = (id) => {
    return {
        type: BUDGET_CATEGORY_ACTIONS.REMOVE_CATEGORY,
        payload: {
            id
        }
    }
}

const ModifyBudgetCategoryName = (id, value) => {
    return {
        type: BUDGET_CATEGORY_ACTIONS.MODIFY_CATEGORY,
        payload: {
            id: id,
            field: BUDGET_CATEGORY_FIELDS.Name,
            value: value
        }
    }
}

const ModifyBudgetCategoryDescription = (id, value) => {
    return {
        type: BUDGET_CATEGORY_ACTIONS.MODIFY_CATEGORY,
        payload: {
            id: id,
            field: BUDGET_CATEGORY_FIELDS.Description,
            value: value
        }
    }
}

const ModifyBudgetCategoryBudgetedAmount = (id, value) => {
    return {
        type: BUDGET_CATEGORY_ACTIONS.MODIFY_CATEGORY,
        payload: {
            id: id,
            field: BUDGET_CATEGORY_FIELDS.BudgetedAmount,
            value: value
        }
    }
}

const ModifyBudgetCategoryIncomeSource = (id, value) => {
    return {
        type: BUDGET_CATEGORY_ACTIONS.MODIFY_CATEGORY,
        payload: {
            id: id,
            field: BUDGET_CATEGORY_FIELDS.IncomeSource,
            value: value
        }
    }
}

const ModifyBudgetCategoryColor = (id, value) => {
    return {
        type: BUDGET_CATEGORY_ACTIONS.MODIFY_CATEGORY,
        payload: {
            id: id,
            field: BUDGET_CATEGORY_FIELDS.Color,
            value: value
        }
    }
}

const CreateExpense = (name, date, amount, category) => {
    return {
        type: EXPENSE_ACTIONS.CREATE_EXPENSE,
        payload: {
            name,
            date,
            amount,
            category,
        }
    }
}

const RemoveExpense = () => {
    return {
        type: EXPENSE_ACTIONS.REMOVE_EXPENSE,
        payload: {
            id
        }
    }

}

const ModifyExpenseName = () => {
    return {
        type: EXPENSE_ACTIONS.MODIFY_EXPENSE,
        payload: {
            id: id,
            field: EXPENSE_FIELDS.Name,
            value: value
        }
    }
}

const ModifyExpenseDate = () => {
    return {
        type: EXPENSE_ACTIONS.MODIFY_EXPENSE,
        payload: {
            id: id,
            field: EXPENSE_FIELDS.Date,
            value: value
        }
    }
}

const ModifyExpenseAmount = () => {
    return {
        type: EXPENSE_ACTIONS.MODIFY_EXPENSE,
        payload: {
            id: id,
            field: EXPENSE_FIELDS.Amount,
            value: value
        }
    }
}

const ModifyExpenseCategory = () => {
    return {
        type: EXPENSE_ACTIONS.MODIFY_EXPENSE,
        payload: {
            id: id,
            field: EXPENSE_FIELDS.Category,
            value: value
        }
    }
}

export const BudgetActions = {
    CreateBudgetCategory,
    RemoveBudgetCategory,
    ModifyBudgetCategoryName,
    ModifyBudgetCategoryDescription,
    ModifyBudgetCategoryBudgetedAmount,
    ModifyBudgetCategoryIncomeSource,
    ModifyBudgetCategoryColor,
    CreateExpense,
    RemoveExpense,
    ModifyExpenseName,
    ModifyExpenseDate,
    ModifyExpenseAmount,
    ModifyExpenseCategory
}
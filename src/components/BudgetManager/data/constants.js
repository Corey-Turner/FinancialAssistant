
export const BUDGET_CATEGORY_FIELDS = {
    Name : 'name',
    Description : 'description',
    BudgetedAmount: 'budgetedAmount',
    IncomeSource: 'incomeSource',
    Color: 'color',
}

export const EXPENSE_FIELDS = {
    Name: 'name',
    Date: 'date',
    Amount: 'amount',
    Category: 'category'
}

export const DEFAULT_VALUES = {
    NO_CATEGORY: -1,
    NEW_CATEGORY: 'NewCategory ',
    NEW_EXPENSE: 'NewExpense ',
    DEFAULT_COLOR: '#808080'
}

export const BUDGET_CATEGORY_ACTIONS = {
    CREATE_CATEGORY : "CREATE_BUDGET_CATEGORY",
    REMOVE_CATEGORY : "REMOVE_BUDGET_CATEGORY",
    MODIFY_CATEGORY : "MODIFY_BUDGET_CATEGORY",
    
}

export const EXPENSE_ACTIONS = {
    CREATE_EXPENSE : "CREATE_BUDGET_EXPENSE",
    REMOVE_EXPENSE : "REMOVE_BUDGET_EXPENSE",
    MODIFY_EXPENSE : "MODIFY_BUDGET_EXPENSE",
}



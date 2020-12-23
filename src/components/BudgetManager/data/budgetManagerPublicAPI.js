import {addBudgetCategory, addItemToExpenseList, removeBudgetCategory, removeItemFromExpenseList, setListOfExpensesToUncategorized, updateBudgetCategory} from './budgetManagerPrivateAPI'

//  *****************************************************************************
///   <summary>
///       Creates a Default Budget category and adds it to budget Categories
///   </summary>
///
///   <param name="state">      Current state value         </param>
///
///   <returns>                 Updated state               </returns>
//  *****************************************************************************
export const CreateCategory = (state) => {
    let newItem = Object.assign({}, state)
    newItem.categories = addBudgetCategory(newItem.categories)
    return newItem;
}

//  *****************************************************************************
///   <summary>
///       Removes the Item from the BudgetPlannerObject.Categories list
///   </summary>
///
///   <param name="state">  Current state value             </param>
///   <param name="id">     CategoryID                      </param>
///
///   <returns>             Updated state                   </returns>
//  *****************************************************************************

export const RemoveCategory = (state, id) => {
    let newItem = Object.assign({}, state)

    newItem.categories = removeBudgetCategory(newItem.categories, id)
    newItem.expenses = setListOfExpensesToUncategorized(newItem.expenses, state.expenses.map(o => {
        if(o.category === id){
            return o.id
        }
    }))

    return newItem;
}

//  *****************************************************************************
///   <summary>
///       Updates the specified field (EXPENSE_CATEGORY_FIELDS)
///   </summary>
///
///   <param name="state">  Current state value                             </param>
///   <param name="id">     Category ID                                     </param>
///   <param name="field">  Field To be updated BUDGET_CATEGORY_FIELDS      </param>
///   <param name="value">  Value being assigned to the specified field     </param>    
///
///   <returns>             Updated state                                   </returns>
//  *****************************************************************************
export const ModifyCategoryField = (state, id, field, value) => {
    let newItem = Object.assign({}, state)

    newItem.categories = updateBudgetCategory(newItem.categories, id, field, value)

    return newItem;
}

//  *****************************************************************************
///   <summary>
///       Creates an ExpenseItemObject and adds it to the Expenses List
///   </summary>
///
///   <param name="state">          Current state value             </param>
///   <param name="name">           Expense Name                    </param>
///   <param name="date">           Expense Date                    </param>
///   <param name="amount">         Expense Amount                  </param>
///   <param name="categoryID">     Expense Category ID             </param>
///     
///   <returns>             Updated state                           </returns>
//  *****************************************************************************
export const CreateExpense = (state, name, date, amount, categoryID) => {
    let newItem = Object.assign({}, state)
    newItem.expenses = addItemToExpenseList(newItem.expenses, name, date, amount, categoryID)
    return newItem;
}

//  *****************************************************************************
///   <summary>
///       Removes the Expense From Expenses List
///   </summary>
///
///
///   <param name="state">      Current state value             </param>
///   <param name="id">         Expense ID                      </param>
///
///   <returns>                 Updated state                   </returns>
//  *****************************************************************************
export const RemoveExpense = (state, id) => {
    let newItem = Object.assign({}, state)
    newItem.expenses = removeItemFromExpenseList(newItem.expenses, id)
    return newItem;
}

//  *****************************************************************************
///   <summary>
///       Updates the Specified Field ( EXPENSE_FIELDS)
///       Expense Category field redirects to ModifyExpenseCategory
///   </summary>
///
///   <param name="state">  Current state value                             </param>
///   <param name="id">     Expense ID                                      </param>
///   <param name="field">  Field To be updated EXPENSE_FIELDS              </param>
///   <param name="value">  Value being assigned to the specified field     </param>    
///
///   <returns>             Updated state                                   </returns>
//  *****************************************************************************
export const ModifyExpenseField = (state, id, field, value) => {
    let newItem = Object.assign({}, state)

    newItem.expenses = updateBudgetCategory(newItem.expenses, id, field, value)

    return newItem;    
}
